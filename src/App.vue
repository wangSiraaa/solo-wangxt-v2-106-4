<script setup lang="ts">
import { computed, onMounted, reactive, ref, shallowRef, watch } from 'vue'
import { buildGear, validateGearInput, DEG, transformOutline, type GearGeometry, type Pt } from './geometry/gear'
import { analyzeMesh, gearAnglesAt, mateAngle, type MeshInfo } from './geometry/mesh'
import { intersectOutlines } from './geometry/clipper'
import {
  buildMeasurementRecord,
  measurementStatus,
  newMeasurementId,
  outlineFingerprint,
  signedDeviation,
  deviationHistogram,
  type MeasurementRecord,
  type MeasurementStatus
} from './geometry/measurement'
import { GearViewer, type ViewerOptions } from './viewer'
import { UNITS, fromMm, toMm, fmtLen, type LengthUnit } from './units'
import {
  type CaseData,
  downloadJson,
  listCases,
  newCaseId,
  parseCase,
  saveCase,
  deleteCase
} from './store'

// ------- 参数（内部全部 mm / 度） -------
const unit = ref<LengthUnit>('mm')

const gearParams = reactive({
  z1: 20,
  z2: 40,
  m: 2, // mm
  alphaDeg: 20,
  faceWidth: 10,
  centerDistance: 60, // mm
  useStandardCenter: true
})

const g1 = shallowRef<GearGeometry>()
const g2 = shallowRef<GearGeometry>()
const mesh = shallowRef<MeshInfo>()

const errors = reactive({ g1: [] as string[], g2: [] as string[] })

function rebuild() {
  const in1 = { z: Math.round(gearParams.z1), module: gearParams.m, alpha: gearParams.alphaDeg * DEG, faceWidth: gearParams.faceWidth }
  const in2 = { z: Math.round(gearParams.z2), module: gearParams.m, alpha: gearParams.alphaDeg * DEG, faceWidth: gearParams.faceWidth }
  errors.g1 = validateGearInput(in1)
  errors.g2 = validateGearInput(in2)
  if (errors.g1.length || errors.g2.length) return
  g1.value = buildGear(in1)
  g2.value = buildGear(in2)
  const a = gearParams.useStandardCenter
    ? g1.value.pitchR + g2.value.pitchR
    : gearParams.centerDistance
  mesh.value = analyzeMesh({ g1: g1.value, g2: g2.value, centerDistance: a })
}

// ------- 单位输入辅助（数值随单位换算；内部 mm 不变） -------
const mInput = computed({
  get: () => fromMm(gearParams.m, unit.value),
  set: (v: number) => (gearParams.m = toMm(v, unit.value))
})
const faceInput = computed({
  get: () => fromMm(gearParams.faceWidth, unit.value),
  set: (v: number) => (gearParams.faceWidth = toMm(v, unit.value))
})
const centerInput = computed({
  get: () => fromMm(gearParams.centerDistance, unit.value),
  set: (v: number) => (gearParams.centerDistance = toMm(v, unit.value))
})

watch(unit, () => {})

// ------- 动画 -------
const playing = ref(true)
const phi1 = ref(0)
const speed = ref(0.25) // rad/s（轮1）
let lastT = 0
const contactS = ref(0)

const showOpts = reactive<ViewerOptions>({
  showPitchCircle: true,
  showBaseCircle: true,
  showAddendumCircle: false,
  showDedendumCircle: false,
  showActionLine: true,
  showContact: true,
  contactS: 0
})

// ------- 干涉 -------
const interferenceArea = ref<number | null>(null)
const interferenceRegions = shallowRef<Pt[][]>([])
const interferenceBusy = ref(false)
let interfereReq = 0

async function checkInterference(currentPhi1: number) {
  if (!g1.value || !g2.value || !mesh.value) return
  const p1 = currentPhi1
  const p2 = mateAngle(g1.value, g2.value, mesh.value, p1)
  const o1 = [transformOutline(g1.value.outline, 0, 0, p1)]
  const o2 = [transformOutline(g2.value.outline, mesh.value.a, 0, p2)]
  const req = ++interfereReq
  interferenceBusy.value = true
  try {
    const res = await intersectOutlines(o1, o2)
    if (req !== interfereReq) return
    interferenceArea.value = res.area
    interferenceRegions.value = res.regions
  } finally {
    if (req === interfereReq) interferenceBusy.value = false
  }
}

// ------- 视图 -------
const host = ref<HTMLDivElement>()
let viewer: GearViewer | null = null

function pushOverlay() {
  if (!viewer || !mesh.value) return
  viewer.setMeshOverlay(mesh.value, {
    ...showOpts,
    contactS: contactS.value,
    contactRegions: [interferenceRegions.value]
  })
}

onMounted(() => {
  rebuild()
  viewer = new GearViewer(host.value!)
  if (g1.value && g2.value && mesh.value) viewer.setGears(g1.value, g2.value, mesh.value.a)

  const loop = (t: number) => {
    const dt = Math.min(0.05, (t - lastT) / 1000 || 0)
    lastT = t
    if (playing.value && g1.value && g2.value && mesh.value) {
      phi1.value += speed.value * dt
      // 归一到一个齿距周期，避免数值增长
      const period = (2 * Math.PI) / g1.value.input.z
      phi1.value = ((phi1.value % period) + period) % period
      // 接触点 s 随 φ1 同步：dφ1/ds = 1/rb1，相位常量按节点对齐
      const s = (phi1.value - (gearAnglesAt(mesh.value, g1.value, g2.value, 0).phi1)) * g1.value.baseR
      contactS.value = clampS(s)
    }
    if (g1.value && g2.value && mesh.value) {
      const p2 = mateAngle(g1.value, g2.value, mesh.value, phi1.value)
      viewer!.setAngles(phi1.value, p2)
      showOpts.contactS = contactS.value
      pushOverlay()
    }
    requestAnimationFrame(loop)
  }
  requestAnimationFrame(loop)
})

function clampS(s: number) {
  if (!mesh.value) return 0
  const a = mesh.value.actionLine
  const ap = mesh.value.alphaPrime
  const nx = Math.sin(ap),
    ny = Math.cos(ap)
  const sLo =
    (a.p0.x - mesh.value.pitchPoint.x) * nx + (a.p0.y - mesh.value.pitchPoint.y) * ny
  const sHi =
    (a.p1.x - mesh.value.pitchPoint.x) * nx + (a.p1.y - mesh.value.pitchPoint.y) * ny
  // 超出区间则循环到下一齿（让接触点重新进入）
  if (s < sLo) return sHi - ((sLo - s) % (sHi - sLo))
  if (s > sHi) return sLo + ((s - sHi) % (sHi - sLo))
  return s
}

watch(
  () => [gearParams.z1, gearParams.z2, gearParams.m, gearParams.alphaDeg, gearParams.faceWidth, gearParams.useStandardCenter, gearParams.centerDistance],
  () => {
    rebuild()
    if (viewer && g1.value && g2.value && mesh.value) viewer.setGears(g1.value, g2.value, mesh.value.a)
    phi1.value = 0
    contactS.value = 0
    interferenceArea.value = null
    interferenceRegions.value = []
    // 基准参数已变：旧测量自动转为历史证据（状态由指纹判定），仅重绘覆盖层
    pushMeasurementOverlay()
  }
)

watch(showOpts, pushOverlay)
watch(contactS, () => (showOpts.contactS = contactS.value))

// ------- 暂停时手动检查 -------
function pause() {
  playing.value = false
}
function resume() {
  playing.value = true
}

/** 暂停时手动拖动接触点：把轮1 转到与该 s 严格对应的相位（同一条渐开线接触） */
function scrubContact() {
  if (playing.value || !g1.value || !g2.value || !mesh.value) return
  phi1.value = gearAnglesAt(mesh.value, g1.value, g2.value, contactS.value).phi1
}

// ------- 实测轮廓覆盖层（仅对比展示，不扩大模型适用范围） -------
const measurements = ref<MeasurementRecord[]>([])
const measGear = ref<1 | 2>(1)
const measError = ref('')
const measReport = ref('')
const measBusy = ref(false)
const showMeasurement = ref(true)

interface MeasView {
  rec: MeasurementRecord
  status: MeasurementStatus
  reason: string
}

/** 每条测量相对当前理论模型的状态（指纹失配 → 仅历史证据） */
const measViews = computed<MeasView[]>(() =>
  measurements.value.map((rec) => {
    const g = rec.gear === 1 ? g1.value : g2.value
    const st = measurementStatus(rec, g)
    return { rec, ...st }
  })
)

function currentFingerprint(gearIdx: 1 | 2): string {
  const g = gearIdx === 1 ? g1.value : g2.value
  return g ? outlineFingerprint(g) : ''
}

function importMeasurementFile(ev: Event) {
  const input = ev.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = () => {
    // 先完整校验再入列；任何一步失败都不产生记录（数据库无残留）
    try {
      const target = measGear.value === 1 ? g1.value : g2.value
      if (!target) throw new Error('当前齿轮参数无效，无法绑定测量')
      const rec = buildMeasurementRecord({
        id: newMeasurementId(),
        text: String(reader.result),
        gear: measGear.value,
        name: file.name,
        target,
        alphaDeg: gearParams.alphaDeg
      })
      measurements.value = [...measurements.value, rec]
      measError.value = ''
      measReport.value =
        `已导入 ${rec.normalized.length} 点（源单位 ${rec.sourceUnit}` +
        `${rec.adjustments.reversed ? '，原始点序为顺时针已反转' : ''}），` +
        `并绑定当前齿轮 ${rec.gear} 的理论轮廓指纹。`
    } catch (e) {
      measError.value = (e as Error).message
      measReport.value = ''
    }
  }
  reader.readAsText(file)
  input.value = ''
}

function removeMeasurement(id: string) {
  measurements.value = measurements.value.filter((m) => m.id !== id)
}

/**
 * 暂停位置用现有 Clipper 布尔能力比较实测覆盖层与对方理论轮廓的局部相交。
 * 仅允许指纹匹配当前基准的测量参与；失配测量只是历史证据。
 */
async function checkMeasurement(v: MeasView) {
  measReport.value = ''
  if (playing.value) {
    measReport.value = '请先暂停动画，再在暂停位置做覆盖层布尔检查'
    return
  }
  if (v.status !== 'matched') {
    measReport.value = `拒绝参与计算：${v.reason}`
    return
  }
  if (!g1.value || !g2.value || !mesh.value) return
  const selfIs1 = v.rec.gear === 1
  const p2 = mateAngle(g1.value, g2.value, mesh.value, phi1.value)
  const phiSelf = selfIs1 ? phi1.value : p2
  const phiOther = selfIs1 ? p2 : phi1.value
  const cSelf = selfIs1 ? 0 : mesh.value.a
  const cOther = selfIs1 ? mesh.value.a : 0
  const otherOutline = selfIs1 ? g2.value.outline : g1.value.outline
  measBusy.value = true
  try {
    const res = await intersectOutlines(
      [transformOutline(v.rec.normalized, cSelf, 0, phiSelf)],
      [transformOutline(otherOutline, cOther, 0, phiOther)]
    )
    v.rec.checks.push({
      at: Date.now(),
      phi1: phi1.value,
      overlapArea: res.area,
      intersects: res.intersects,
      fingerprint: v.rec.fingerprint
    })
    measReport.value =
      `覆盖层(齿轮${v.rec.gear}) × 对方理论轮廓：重叠面积 ${res.area.toExponential(3)} mm²，` +
      `${res.intersects ? '局部相交 ❗' : '无相交 ✅'}。仅为实测覆盖层对比，不构成啮合认证。`
  } finally {
    measBusy.value = false
  }
}

/** 偏差着色：0→绿，正偏差(材料多)→红，负偏差→蓝；色标 ±5% 模数 */
function devColor(dev: number): number {
  const s = Math.max(1e-9, 0.05 * gearParams.m)
  const t = Math.min(1, Math.abs(dev) / s)
  const lerp = (a: number, b: number) => a + (b - a) * t
  let r: number, gg: number, b: number
  if (dev >= 0) {
    r = lerp(0.23, 1)
    gg = lerp(0.9, 0.18)
    b = lerp(0.42, 0.33)
  } else {
    r = lerp(0.23, 0.3)
    gg = lerp(0.9, 0.55)
    b = lerp(0.42, 1)
  }
  return (Math.round(r * 255) << 16) | (Math.round(gg * 255) << 8) | Math.round(b * 255)
}

/** 每台齿轮显示最新一条测量；匹配时按偏差着色，失配时灰色（历史证据） */
function pushMeasurementOverlay() {
  if (!viewer) return
  for (const gi of [1, 2] as const) {
    const views = measViews.value.filter((v) => v.rec.gear === gi)
    const v = views[views.length - 1]
    if (!showMeasurement.value || !v) {
      viewer.setMeasurementOverlay(gi, null)
      continue
    }
    const g = gi === 1 ? g1.value : g2.value
    let colors: number[] | undefined
    if (v.status === 'matched' && g) {
      colors = v.rec.normalized.map((p) => devColor(signedDeviation(p, g.outline)))
    }
    viewer.setMeasurementOverlay(gi, v.rec.normalized, colors)
  }
}

/** 偏差直方图（匹配时实时重算；失配时回退到绑定时的历史统计） */
function measHistogram(v: MeasView) {
  const g = v.rec.gear === 1 ? g1.value : g2.value
  if (v.status === 'matched' && g) {
    return deviationHistogram(v.rec.normalized.map((p) => signedDeviation(p, g.outline)))
  }
  return v.rec.deviation.histogram
}

function histMax(hist: { count: number }[]): number {
  return Math.max(1, ...hist.map((h) => h.count))
}

watch([measViews, showMeasurement, g1, g2], pushMeasurementOverlay)

// ------- 案例库 -------
const cases = ref<CaseData[]>([])
const caseName = ref('未命名案例')
const caseNote = ref('')

async function refreshCases() {
  cases.value = await listCases()
}
onMounted(refreshCases)

function currentCaseData(withOutlines: boolean): CaseData {
  const a = mesh.value?.a ?? gearParams.centerDistance
  return {
    schemaVersion: 1,
    id: newCaseId(),
    name: caseName.value,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    note: caseNote.value,
    gear1: {
      z: gearParams.z1,
      module: gearParams.m,
      alpha: gearParams.alphaDeg * DEG,
      alphaDeg: gearParams.alphaDeg,
      faceWidth: gearParams.faceWidth
    },
    gear2: {
      z: gearParams.z2,
      module: gearParams.m,
      alpha: gearParams.alphaDeg * DEG,
      alphaDeg: gearParams.alphaDeg,
      faceWidth: gearParams.faceWidth
    },
    centerDistance: gearParams.useStandardCenter ? null : a,
    unit: unit.value,
    outlines:
      withOutlines && g1.value && g2.value
        ? { gear1: g1.value.outline, gear2: g2.value.outline }
        : undefined,
    measurements: measurements.value.length ? measurements.value : undefined
  }
}

async function saveCurrent(withOutlines: boolean) {
  await saveCase(currentCaseData(withOutlines))
  await refreshCases()
}

function exportCase(withOutlines: boolean) {
  downloadJson(currentCaseData(withOutlines))
}

async function loadCase(c: CaseData) {
  gearParams.z1 = c.gear1.z
  gearParams.z2 = c.gear2.z
  gearParams.m = c.gear1.module
  gearParams.alphaDeg = c.gear1.alphaDeg
  gearParams.faceWidth = c.gear1.faceWidth
  if (c.centerDistance == null) {
    gearParams.useStandardCenter = true
  } else {
    gearParams.useStandardCenter = false
    gearParams.centerDistance = c.centerDistance
  }
  unit.value = c.unit || 'mm'
  caseName.value = c.name
  caseNote.value = c.note
  measurements.value = c.measurements ?? []
  measError.value = ''
  measReport.value = ''
  rebuild()
  if (viewer && g1.value && g2.value && mesh.value) viewer.setGears(g1.value, g2.value, mesh.value.a)
  pushMeasurementOverlay()
}

async function removeCase(id: string) {
  await deleteCase(id)
  await refreshCases()
}

function importFile(ev: Event) {
  const input = ev.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = async () => {
    try {
      const c = parseCase(String(reader.result))
      await saveCase(c)
      await loadCase(c)
      await refreshCases()
    } catch (e) {
      alert('导入失败：' + (e as Error).message)
    }
  }
  reader.readAsText(file)
  input.value = ''
}

// ------- 派生显示 -------
const dims = computed(() => {
  if (!g1.value || !g2.value || !mesh.value) return null
  return { g1: g1.value, g2: g2.value, mesh: mesh.value }
})

/** 实际啮合线参数 s 的两端（用于接触点滑块） */
const sBounds = computed<[number, number]>(() => {
  if (!mesh.value) return [-30, 30]
  const m = mesh.value
  const nx = Math.sin(m.alphaPrime),
    ny = Math.cos(m.alphaPrime)
  const lo = (m.actionLine.p0.x - m.pitchPoint.x) * nx + (m.actionLine.p0.y - m.pitchPoint.y) * ny
  const hi = (m.actionLine.p1.x - m.pitchPoint.x) * nx + (m.actionLine.p1.y - m.pitchPoint.y) * ny
  return [Math.floor(lo * 10) / 10, Math.ceil(hi * 10) / 10]
})

function fmt(mm: number) {
  return fmtLen(mm, unit.value)
}

// 预设样本：标准齿数与极少齿数，便于核对
function preset(z1: number, z2: number, m = 2, alphaDeg = 20) {
  gearParams.z1 = z1
  gearParams.z2 = z2
  gearParams.m = m
  gearParams.alphaDeg = alphaDeg
  gearParams.useStandardCenter = true
}
</script>

<template>
  <div class="app">
    <header>
      <h1>直齿圆柱齿轮参数化实验室</h1>
      <div class="sub">外啮合 · 无变位 · 理想刚性 · 渐开线齿廓（教学模型）</div>
    </header>

    <main>
      <aside class="panel">
        <section>
          <h2>显示单位（不改变实际尺寸）</h2>
          <div class="units">
            <button v-for="u in Object.keys(UNITS)" :key="u" :class="{ active: unit === u }" @click="unit = u as LengthUnit">
              {{ UNITS[u as LengthUnit].label }}
            </button>
          </div>
        </section>

        <section>
          <h2>齿轮参数</h2>
          <label>压力角 α（度）
            <input type="number" v-model.number="gearParams.alphaDeg" min="1" max="45" step="0.5" />
          </label>
          <label>模数 m（{{ UNITS[unit].label }}）
            <input type="number" v-model.number="mInput" :step="UNITS[unit].step" />
          </label>
          <label>齿宽 b（{{ UNITS[unit].label }}）
            <input type="number" v-model.number="faceInput" :step="UNITS[unit].step" />
          </label>
          <div class="two">
            <label>齿数 z₁
              <input type="number" v-model.number="gearParams.z1" min="4" step="1" />
            </label>
            <label>齿数 z₂
              <input type="number" v-model.number="gearParams.z2" min="4" step="1" />
            </label>
          </div>
          <div v-if="errors.g1.length" class="err">{{ errors.g1.join('；') }}</div>
          <div v-if="errors.g2.length" class="err">{{ errors.g2.join('；') }}</div>
        </section>

        <section>
          <h2>中心距</h2>
          <label class="row">
            <input type="checkbox" v-model="gearParams.useStandardCenter" /> 使用标准中心距 a₀ = m(z₁+z₂)/2
          </label>
          <label v-if="!gearParams.useStandardCenter">实际中心距 a（{{ UNITS[unit].label }}）
            <input type="number" v-model.number="centerInput" :step="UNITS[unit].step" />
          </label>
        </section>

        <section>
          <h2>运动 / 检查</h2>
          <div class="row">
            <button @click="pause" :disabled="!playing">暂停</button>
            <button @click="resume" :disabled="playing">继续</button>
          </div>
          <label>轮1 角速度（rad/s）
            <input type="range" v-model.number="speed" min="0" max="1.5" step="0.01" />
          </label>
          <label>接触点沿啮合线 s（mm，暂停可拖动）
            <input type="range" :disabled="playing" v-model.number="contactS" :min="sBounds[0]" :max="sBounds[1]" step="0.05" @input="scrubContact" />
          </label>
          <button class="wide" @click="checkInterference(phi1)" :disabled="playing || interferenceBusy">
            {{ interferenceBusy ? 'Clipper 求交中…' : '在当前帧做局部干涉求交（Clipper2 WASM）' }}
          </button>
          <div v-if="interferenceArea !== null" class="report">
            重叠面积 = {{ interferenceArea.toExponential(3) }} mm²
            <b :class="interferenceArea > 1e-6 ? 'bad' : 'good'">
              {{ interferenceArea > 1e-6 ? '存在实体干涉 ❗' : '当前帧无干涉 ✅' }}
            </b>
          </div>
        </section>

        <section>
          <h2>显示选项</h2>
          <label class="row"><input type="checkbox" v-model="showOpts.showPitchCircle" /> 节圆/分度圆</label>
          <label class="row"><input type="checkbox" v-model="showOpts.showBaseCircle" /> 基圆</label>
          <label class="row"><input type="checkbox" v-model="showOpts.showAddendumCircle" /> 齿顶圆</label>
          <label class="row"><input type="checkbox" v-model="showOpts.showDedendumCircle" /> 齿根圆</label>
          <label class="row"><input type="checkbox" v-model="showOpts.showActionLine" /> 啮合线（理论/实际）</label>
          <label class="row"><input type="checkbox" v-model="showOpts.showContact" /> 接触点</label>
        </section>

        <section>
          <h2>核对样本</h2>
          <div class="samples">
            <button @click="preset(20,40)">20/40 标准</button>
            <button @click="preset(17,17)">17/17 临界</button>
            <button @click="preset(16,40)">16/40 根切</button>
            <button @click="preset(12,40)">12/40 极少齿</button>
          </div>
        </section>
      </aside>

      <section class="viewport">
        <div ref="host" class="canvas-host"></div>

        <div class="readouts">
          <div v-if="dims" class="dim-grid">
            <table>
              <thead><tr><th></th><th>齿轮 1（z₁={{ gearParams.z1 }}）</th><th>齿轮 2（z₂={{ gearParams.z2 }}）</th></tr></thead>
              <tbody>
                <tr><td>分度圆直径 d</td><td>{{ fmt(dims.g1.pitchR * 2) }}</td><td>{{ fmt(dims.g2.pitchR * 2) }}</td></tr>
                <tr><td>基圆直径 d_b</td><td>{{ fmt(dims.g1.baseR * 2) }}</td><td>{{ fmt(dims.g2.baseR * 2) }}</td></tr>
                <tr><td>齿顶圆 d_a</td><td>{{ fmt(dims.g1.addendumR * 2) }}</td><td>{{ fmt(dims.g2.addendumR * 2) }}</td></tr>
                <tr><td>齿根圆 d_f</td><td>{{ fmt(dims.g1.dedendumR * 2) }}</td><td>{{ fmt(dims.g2.dedendumR * 2) }}</td></tr>
                <tr><td>齿距 p = πm</td><td>{{ fmt(dims.g1.circularPitch) }}</td><td>{{ fmt(dims.g2.circularPitch) }}</td></tr>
                <tr><td>基节 p_b</td><td>{{ fmt(dims.g1.basePitch) }}</td><td>{{ fmt(dims.g2.basePitch) }}</td></tr>
                <tr><td>齿顶压力角 α_a</td><td>{{ (dims.g1.alphaTip / DEG).toFixed(2) }}°</td><td>{{ (dims.g2.alphaTip / DEG).toFixed(2) }}°</td></tr>
                <tr><td>根切风险 (z&lt;{{ dims.g1.zMinValue.toFixed(1) }})</td>
                  <td :class="dims.g1.undercut ? 'bad' : 'good'">{{ dims.g1.undercut ? '根切 ❗' : '安全' }}</td>
                  <td :class="dims.g2.undercut ? 'bad' : 'good'">{{ dims.g2.undercut ? '根切 ❗' : '安全' }}</td></tr>
              </tbody>
            </table>

            <div class="mesh-report">
              <h3>啮合检查</h3>
              <div>标准中心距 a₀：<b>{{ fmt(dims.mesh.a0) }}</b></div>
              <div>实际中心距 a：<b>{{ fmt(dims.mesh.a) }}</b>（Δa = {{ fmt(dims.mesh.deltaA) }}）</div>
              <div>啮合角 α′：<b>{{ (dims.mesh.alphaPrime / DEG).toFixed(3) }}°</b></div>
              <div>节圆半径 r₁′/r₂′：<b>{{ fmt(dims.mesh.pitchR1) }} / {{ fmt(dims.mesh.pitchR2) }}</b></div>
              <div>实际啮合线长度 g_α：<b>{{ fmt(dims.mesh.pathOfContact) }}</b></div>
              <div>重合度 ε_α = g_α/p_b：<b :class="dims.mesh.contactRatio < 1 ? 'bad' : 'good'">{{ dims.mesh.contactRatio.toFixed(3) }}</b></div>
              <div>圆周/法向侧隙：<b>{{ fmt(dims.mesh.backlashTangential) }} / {{ fmt(dims.mesh.backlashNormal) }}</b></div>
              <div>顶隙 c：<b>{{ fmt(dims.mesh.clearance12) }}</b></div>
              <div>基节一致：<b :class="dims.mesh.basePitchMatch ? 'good' : 'bad'">{{ dims.mesh.basePitchMatch ? '是 ✅' : '否 ❌' }}</b></div>
              <ul v-if="dims.mesh.warnings.length" class="warns">
                <li v-for="(w, i) in dims.mesh.warnings" :key="i">⚠️ {{ w }}</li>
              </ul>
              <div class="formula">
                渐开线：x=r_b(sin t−t cos t)，y=r_b(cos t+t sin t)；inv(α)=tanα−α；
                啮合要求基节相等 + 相位共法线，且 r_b1·Δφ₁ = −r_b2·Δφ₂（不是只按转速比旋转）。
              </div>
            </div>
          </div>
        </div>
      </section>

      <aside class="panel right">
        <section>
          <h2>实测轮廓覆盖层</h2>
          <p class="note">
            仅用于与理论渐开线轮廓并排对比；不参与理论模型计算，不代表啮合认证，
            不扩大模型适用范围（外啮合 · 无变位 · 理想刚性）。
          </p>
          <div class="row">
            <label class="row">绑定到
              <select v-model.number="measGear">
                <option :value="1">齿轮 1</option>
                <option :value="2">齿轮 2</option>
              </select>
            </label>
          </div>
          <label class="wide filebtn">导入测量坐标（JSON/CSV，需声明单位，首尾闭合）
            <input type="file" accept=".json,.csv,.txt,application/json,text/csv,text/plain" @change="importMeasurementFile" hidden />
          </label>
          <div v-if="measError" class="err">导入被拒绝：{{ measError }}（未写入任何数据）</div>
          <label class="row"><input type="checkbox" v-model="showMeasurement" /> 在视图中显示覆盖层（按偏差着色：红=材料偏多，蓝=偏少）</label>
          <ul class="caselist measlist">
            <li v-for="v in measViews" :key="v.rec.id">
              <div class="ci">
                <b>{{ v.rec.name }}</b>
                <span>齿轮 {{ v.rec.gear }} · {{ v.rec.normalized.length }} 点 · 源单位 {{ v.rec.sourceUnit }}<template v-if="v.rec.adjustments.reversed"> · 点序已反转</template></span>
                <span>绑定：z={{ v.rec.bound.z }} m={{ v.rec.bound.module }} α={{ v.rec.bound.alphaDeg }}° · 指纹 {{ v.rec.fingerprint.slice(0, 8) }}…</span>
                <span :class="v.status === 'matched' ? 'good' : 'bad'">
                  {{ v.status === 'matched' ? '✅ 指纹匹配当前基准' : '⚠️ 仅历史证据（不参与当前计算）' }}
                </span>
                <span class="reason">{{ v.reason }}</span>
                <span>
                  偏差 max {{ fmt(v.rec.deviation.max) }} · min {{ fmt(v.rec.deviation.min) }} ·
                  RMS {{ fmt(v.rec.deviation.rms) }} · 外/内 {{ v.rec.deviation.outside }}/{{ v.rec.deviation.inside }}
                </span>
                <span class="hist" title="偏差分布直方图">
                  <i v-for="(b, bi) in measHistogram(v)" :key="bi"
                     :style="{ height: (4 + 14 * b.count / histMax(measHistogram(v))) + 'px' }"
                     :title="`${fmt(b.lo)} ~ ${fmt(b.hi)}: ${b.count} 点`"></i>
                </span>
                <span v-if="v.rec.checks.length" class="checks">
                  <span v-for="(c, ci) in v.rec.checks" :key="ci">
                    {{ new Date(c.at).toLocaleTimeString() }} · φ₁={{ c.phi1.toFixed(3) }} ·
                    重叠 {{ c.overlapArea.toExponential(2) }} mm² · {{ c.intersects ? '局部相交 ❗' : '无相交' }}
                    <template v-if="c.fingerprint !== currentFingerprint(v.rec.gear)">（历史结论，基准已变）</template>
                  </span>
                </span>
              </div>
              <div class="ca">
                <button @click="checkMeasurement(v)" :disabled="playing || measBusy || v.status !== 'matched'"
                        :title="v.status !== 'matched' ? '基准已失配，仅作历史证据' : '在暂停位置用 Clipper 比较覆盖层与对方理论轮廓'">
                  布尔检查
                </button>
                <button class="del" @click="removeMeasurement(v.rec.id)">删</button>
              </div>
            </li>
            <li v-if="!measViews.length" class="empty">暂无测量数据</li>
          </ul>
          <div v-if="measReport" class="report">{{ measReport }}</div>
        </section>

        <section>
          <h2>案例（IndexedDB）</h2>
          <input v-model="caseName" placeholder="案例名称" />
          <textarea v-model="caseNote" placeholder="备注（可选）" rows="2"></textarea>
          <div class="row">
            <button @click="saveCurrent(true)">保存（含轮廓）</button>
            <button @click="saveCurrent(false)">仅参数</button>
          </div>
          <div class="row">
            <button @click="exportCase(true)">导出 JSON+轮廓</button>
            <button @click="exportCase(false)">导出参数</button>
          </div>
          <label class="wide filebtn">导入 JSON
            <input type="file" accept="application/json,.json" @change="importFile" hidden />
          </label>
        </section>
        <section>
          <h2>已存案例</h2>
          <ul class="caselist">
            <li v-for="c in cases" :key="c.id">
              <div class="ci">
                <b>{{ c.name }}</b>
                <span>{{ c.gear1.z }}/{{ c.gear2.z }} · m={{ c.gear1.module }} · α={{ c.gear1.alphaDeg }}°{{ c.outlines ? ' · 含轮廓' : '' }}{{ c.measurements?.length ? ` · 含测量(${c.measurements.length})` : '' }}</span>
              </div>
              <div class="ca">
                <button @click="loadCase(c)">载入</button>
                <button class="del" @click="removeCase(c.id)">删</button>
              </div>
            </li>
            <li v-if="!cases.length" class="empty">暂无案例</li>
          </ul>
        </section>
      </aside>
    </main>
  </div>
</template>
