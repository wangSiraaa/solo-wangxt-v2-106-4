/**
 * 实测轮廓覆盖层：导入、校验、归一化、偏差分析与理论轮廓指纹绑定。
 *
 * 教学定位（UI 中同步声明）：
 *  - 实测数据只是"覆盖层"，用于与理论渐开线轮廓并排对比；
 *  - 它不参与、也不改变理论模型（外啮合、无变位、理想刚性）的任何计算；
 *  - 通过/不通过本工具的布尔对比 ≠ 啮合认证，不扩大模型适用范围；
 *  - 记录绑定导入时刻的齿轮参数与理论轮廓指纹；基准参数改变后，
 *    旧测量只作为历史证据保留，不再参与当前案例的任何检查。
 *
 * 内部长度单位固定为 mm；导入文件必须显式声明单位（mm/cm/m/in）。
 */
import { toMm, UNITS, type LengthUnit } from '../units'
import { maxRadius, polygonArea, type GearGeometry, type Pt } from './gear'

/** 闭合环最少不同点数（不含重复闭合点） */
export const MEASUREMENT_MIN_POINTS = 12

// ---------------------------------------------------------------------------
// 记录结构（随案例持久化，见 store.ts）
// ---------------------------------------------------------------------------

/** 一次暂停帧布尔检查的历史结论 */
export interface MeasurementCheck {
  /** 检查时刻（ms 时间戳） */
  at: number
  /** 检查时的轮1 本体转角 */
  phi1: number
  /** 覆盖层与对方理论轮廓的重叠面积 mm² */
  overlapArea: number
  intersects: boolean
  /** 检查发生时的理论轮廓指纹（用于事后判断是否仍为同一基准） */
  fingerprint: string
}

/** 偏差统计（相对绑定时的理论轮廓，mm；正=实测在理论之外即材料偏多） */
export interface DeviationStats {
  max: number
  min: number
  mean: number
  rms: number
  /** 落在理论轮廓之外/之内的测点数 */
  outside: number
  inside: number
  /** 偏差直方图（等宽 bins，覆盖 [min, max]） */
  histogram: { lo: number; hi: number; count: number }[]
}

export interface MeasurementRecord {
  id: string
  /** 绑定到哪一台齿轮（1/2） */
  gear: 1 | 2
  name: string
  importedAt: number
  /** 文件声明的源单位 */
  sourceUnit: LengthUnit
  /** 原始导入点（源单位、原始顺序、含闭合点），原样保留供复核 */
  rawPoints: Pt[]
  /** 归一化结果：mm、逆时针、质心在原点、起点规范化、不含重复闭合点 */
  normalized: Pt[]
  /** 导入时刻绑定的齿轮参数 */
  bound: { z: number; module: number; alphaDeg: number; faceWidth: number }
  /** 导入时刻理论轮廓指纹（outlineFingerprint） */
  fingerprint: string
  /** 归一化做过的修正（便于向学生解释数据被如何处置） */
  adjustments: { reversed: boolean; translation: Pt }
  /** 绑定时刻的偏差统计 */
  deviation: DeviationStats
  /** 历次暂停帧布尔检查结论（历史证据） */
  checks: MeasurementCheck[]
}

export function newMeasurementId(): string {
  return `meas-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
}

// ---------------------------------------------------------------------------
// 解析：JSON 或 CSV，必须显式声明单位
// ---------------------------------------------------------------------------
/**
 * 支持的文件格式：
 *  JSON: { "unit": "mm", "points": [[x,y],...] 或 [{x,y},...] }
 *  CSV : 首行（或任意行）`# unit: mm` / `unit,mm`，其余每行 `x,y`（或空白分隔）
 * 坐标必须首尾闭合（首点重复于末点）。
 */
export function parseMeasurementText(text: string): { unit: LengthUnit; points: Pt[] } {
  const t = text.trim()
  if (!t) throw new Error('测量文件为空')

  if (t.startsWith('{') || t.startsWith('[')) {
    let obj: unknown
    try {
      obj = JSON.parse(t)
    } catch {
      throw new Error('测量文件 JSON 解析失败')
    }
    if (Array.isArray(obj) || typeof obj !== 'object' || obj === null) {
      throw new Error('缺少单位声明（需要 { "unit": "mm", "points": [...] }）')
    }
    const rec = obj as Record<string, unknown>
    const unit = parseUnit(rec.unit)
    const raw = rec.points
    if (!Array.isArray(raw) || !raw.length) throw new Error('缺少 points 坐标数组')
    const points = raw.map((p) => {
      if (Array.isArray(p) && p.length === 2) return { x: Number(p[0]), y: Number(p[1]) }
      if (p && typeof p === 'object' && 'x' in p && 'y' in p) {
        const q = p as { x: unknown; y: unknown }
        return { x: Number(q.x), y: Number(q.y) }
      }
      throw new Error('坐标点格式应为 [x,y] 或 {x,y}')
    })
    return { unit, points }
  }

  // CSV / 纯文本
  let unit: LengthUnit | null = null
  const points: Pt[] = []
  for (const rawLine of t.split(/\r?\n/)) {
    const line = rawLine.trim()
    if (!line) continue
    const um = line.match(/^#?\s*unit\s*[:=,]\s*([A-Za-z]+)\s*$/i)
    if (um) {
      unit = parseUnit(um[1])
      continue
    }
    if (line.startsWith('#')) continue
    const parts = line.split(/[,;\s]+/).filter(Boolean)
    if (parts.length !== 2) throw new Error(`无法解析的数据行：${line}`)
    const x = Number(parts[0])
    const y = Number(parts[1])
    if (!Number.isFinite(x) || !Number.isFinite(y)) throw new Error(`非数值坐标：${line}`)
    points.push({ x, y })
  }
  if (!unit) throw new Error('缺少单位声明（CSV 需含 "unit,mm" 或 "# unit: mm" 行）')
  if (!points.length) throw new Error('文件中没有坐标点')
  return { unit, points }
}

function parseUnit(u: unknown): LengthUnit {
  const s = String(u ?? '').toLowerCase()
  if (!s || !(s in UNITS)) {
    throw new Error(`缺少或无法识别的单位 "${s || '(空)'}"（支持 ${Object.keys(UNITS).join('/')}）`)
  }
  return s as LengthUnit
}

// ---------------------------------------------------------------------------
// 校验与归一化
// ---------------------------------------------------------------------------

export interface NormalizeResult {
  /** mm、CCW、质心在原点、起点规范化、无重复闭合点 */
  normalized: Pt[]
  /** 原始点序为顺时针（已反转） */
  reversed: boolean
  /** 平移量（归一化前的面积质心，mm） */
  translation: Pt
  pointCount: number
}

/**
 * 校验闭合环并归一化。任一项不通过即抛错（调用方不得落库）：
 * 闭合、最少点数、非零面积、无自交、方向统一为 CCW。
 */
export function normalizeMeasurement(ptsMm: Pt[]): NormalizeResult {
  if (ptsMm.length < MEASUREMENT_MIN_POINTS + 1) {
    throw new Error(`测点不足（至少 ${MEASUREMENT_MIN_POINTS} 个不同点 + 重复首点闭合）`)
  }
  for (const p of ptsMm) {
    if (!Number.isFinite(p.x) || !Number.isFinite(p.y)) throw new Error('存在非有限坐标（NaN/Infinity）')
  }

  // 去掉相邻重复点
  const dedup: Pt[] = []
  for (const p of ptsMm) {
    const last = dedup[dedup.length - 1]
    if (!last || Math.hypot(p.x - last.x, p.y - last.y) > 1e-12) dedup.push(p)
  }

  // 尺寸尺度（相对容差的基准）
  let minX = Infinity,
    maxX = -Infinity,
    minY = Infinity,
    maxY = -Infinity
  for (const p of dedup) {
    minX = Math.min(minX, p.x)
    maxX = Math.max(maxX, p.x)
    minY = Math.min(minY, p.y)
    maxY = Math.max(maxY, p.y)
  }
  const diag = Math.hypot(maxX - minX, maxY - minY)
  if (!(diag > 0) || !Number.isFinite(diag)) throw new Error('轮廓退化为一个点')

  // 闭合校验：首点必须重复于末点
  const f = dedup[0]
  const l = dedup[dedup.length - 1]
  const gap = Math.hypot(f.x - l.x, f.y - l.y)
  if (gap > Math.max(1e-9, 1e-6 * diag)) {
    throw new Error(`轮廓未闭合（首尾相距 ${gap.toPrecision(3)} mm，需重复首点）`)
  }
  const ring = dedup.slice(0, -1)
  if (ring.length < MEASUREMENT_MIN_POINTS) {
    throw new Error(`有效测点不足（去重后 ${ring.length} < ${MEASUREMENT_MIN_POINTS}）`)
  }

  // 非零面积
  const area = polygonArea(ring)
  if (Math.abs(area) <= 1e-10 * diag * diag) {
    throw new Error('轮廓面积为零（退化或共线），不是有效齿廓')
  }

  // 自交（含非相邻边相触/重叠）
  if (hasSelfIntersection(ring)) throw new Error('轮廓存在自交，不是简单闭合环')

  // 方向统一为 CCW
  let reversed = false
  let pts = ring
  if (area < 0) {
    pts = [...ring].reverse()
    reversed = true
  }

  // 起点规范化：字典序最小点（保证同一数据任意点序导入结果一致）
  let k = 0
  for (let i = 1; i < pts.length; i++) {
    if (pts[i].x < pts[k].x || (pts[i].x === pts[k].x && pts[i].y < pts[k].y)) k = i
  }
  pts = [...pts.slice(k), ...pts.slice(0, k)]

  // 归一到齿轮局部坐标：面积质心平移到原点
  const c = polygonCentroid(pts)
  const normalized = pts.map((p) => ({ x: p.x - c.x, y: p.y - c.y }))

  return { normalized, reversed, translation: c, pointCount: normalized.length }
}

/** 多边形面积质心（面积非零时调用） */
export function polygonCentroid(poly: Pt[]): Pt {
  let a = 0,
    cx = 0,
    cy = 0
  for (let i = 0; i < poly.length; i++) {
    const p = poly[i]
    const q = poly[(i + 1) % poly.length]
    const cr = p.x * q.y - q.x * p.y
    a += cr
    cx += (p.x + q.x) * cr
    cy += (p.y + q.y) * cr
  }
  return { x: cx / (3 * a), y: cy / (3 * a) }
}

function orient(a: Pt, b: Pt, c: Pt): number {
  return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x)
}

function onSegment(a: Pt, b: Pt, p: Pt): boolean {
  return (
    Math.min(a.x, b.x) <= p.x &&
    p.x <= Math.max(a.x, b.x) &&
    Math.min(a.y, b.y) <= p.y &&
    p.y <= Math.max(a.y, b.y)
  )
}

/** 两线段是否相交（含端点相触与共线重叠）；tol 为定向值的尺度容差 */
function segmentsMeet(a: Pt, b: Pt, c: Pt, d: Pt, tol: number): boolean {
  const o1 = orient(a, b, c)
  const o2 = orient(a, b, d)
  const o3 = orient(c, d, a)
  const o4 = orient(c, d, b)
  // 端点接触/共线重叠：仅认严格为零（坐标完全相同），避免径向边镜像共线的浮点误判
  if (o1 === 0 && onSegment(a, b, c)) return true
  if (o2 === 0 && onSegment(a, b, d)) return true
  if (o3 === 0 && onSegment(c, d, a)) return true
  if (o4 === 0 && onSegment(c, d, b)) return true
  // 严格交叉：符号需稳定异号（|orient| 大于容差才计入）
  const s1 = Math.abs(o1) <= tol ? 0 : Math.sign(o1)
  const s2 = Math.abs(o2) <= tol ? 0 : Math.sign(o2)
  const s3 = Math.abs(o3) <= tol ? 0 : Math.sign(o3)
  const s4 = Math.abs(o4) <= tol ? 0 : Math.sign(o4)
  return s1 !== 0 && s2 !== 0 && s3 !== 0 && s4 !== 0 && s1 !== s2 && s3 !== s4
}

/** 简单闭合环自交检查（O(n²)，测量点数量级内可接受） */
export function hasSelfIntersection(ring: Pt[]): boolean {
  const n = ring.length
  // 定向值量纲为长度²，按坐标尺度取相对容差
  let maxC = 1
  for (const p of ring) maxC = Math.max(maxC, Math.abs(p.x), Math.abs(p.y))
  const tol = 1e-9 * maxC * maxC
  for (let i = 0; i < n; i++) {
    const a = ring[i]
    const b = ring[(i + 1) % n]
    for (let j = i + 1; j < n; j++) {
      // 跳过相邻边（共享端点）
      if (j === i || (j + 1) % n === i || (i + 1) % n === j) continue
      if (segmentsMeet(a, b, ring[j], ring[(j + 1) % n], tol)) return true
    }
  }
  return false
}

// ---------------------------------------------------------------------------
// 偏差分析（相对理论轮廓）
// ---------------------------------------------------------------------------

function distToSegment(p: Pt, a: Pt, b: Pt): number {
  const vx = b.x - a.x
  const vy = b.y - a.y
  const wx = p.x - a.x
  const wy = p.y - a.y
  const len2 = vx * vx + vy * vy
  const t = len2 > 0 ? Math.max(0, Math.min(1, (wx * vx + wy * vy) / len2)) : 0
  return Math.hypot(wx - t * vx, wy - t * vy)
}

/** 点在多边形内（射线法） */
export function pointInPolygon(p: Pt, poly: Pt[]): boolean {
  let inside = false
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const a = poly[i]
    const b = poly[j]
    if (a.y > p.y !== b.y > p.y && p.x < ((b.x - a.x) * (p.y - a.y)) / (b.y - a.y) + a.x) {
      inside = !inside
    }
  }
  return inside
}

/** 测点到理论轮廓的有符号距离（mm）：轮廓之外为正（材料偏多），之内为负 */
export function signedDeviation(p: Pt, outline: Pt[]): number {
  let d = Infinity
  for (let i = 0; i < outline.length; i++) {
    d = Math.min(d, distToSegment(p, outline[i], outline[(i + 1) % outline.length]))
  }
  return pointInPolygon(p, outline) ? -d : d
}

export function deviationStats(devs: number[], bins = 12): DeviationStats {  const n = devs.length
  let max = -Infinity,
    min = Infinity,
    sum = 0,
    sq = 0,
    outside = 0
  for (const d of devs) {
    max = Math.max(max, d)
    min = Math.min(min, d)
    sum += d
    sq += d * d
    if (d > 0) outside++
  }
  const histogram: DeviationStats['histogram'] = []
  const span = max - min
  const w = span > 0 ? span / bins : 1
  for (let i = 0; i < bins; i++) histogram.push({ lo: min + i * w, hi: min + (i + 1) * w, count: 0 })
  for (const d of devs) {
    const idx = span > 0 ? Math.min(bins - 1, Math.floor((d - min) / w)) : 0
    histogram[idx].count++
  }
  return {
    max,
    min,
    mean: sum / n,
    rms: Math.sqrt(sq / n),
    outside,
    inside: n - outside,
    histogram
  }
}

/** 仅取偏差直方图（UI 实时重算用） */
export function deviationHistogram(devs: number[], bins = 12) {
  return deviationStats(devs, bins).histogram
}

// ---------------------------------------------------------------------------
// 理论轮廓指纹（绑定/失配判定的依据）
// ---------------------------------------------------------------------------

/** 稳定的 53 位字符串散列（cyrb53），跨会话确定 */
export function hashString(str: string, seed = 0): string {
  let h1 = 0xdeadbeef ^ seed
  let h2 = 0x41c6ce57 ^ seed
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i)
    h1 = Math.imul(h1 ^ ch, 2654435761)
    h2 = Math.imul(h2 ^ ch, 1597334677)
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909)
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909)
  return (h2 >>> 0).toString(16).padStart(8, '0') + (h1 >>> 0).toString(16).padStart(8, '0')
}

/**
 * 理论轮廓指纹：绑定具体齿轮参数（z/m/α/b）与轮廓几何。
 * 坐标量化到 1e-9 mm，避免无关浮点噪声；同一参数组合跨会话结果一致。
 */
export function outlineFingerprint(g: GearGeometry): string {
  const i = g.input
  const head = `z=${i.z};m=${i.module};alpha=${i.alpha};b=${i.faceWidth};n=${g.outline.length}`
  const parts: string[] = []
  for (const p of g.outline) parts.push(p.x.toFixed(9), p.y.toFixed(9))
  return `${hashString(head)}-${hashString(parts.join(','), 1)}`
}

// ---------------------------------------------------------------------------
// 绑定导入 + 状态判定
// ---------------------------------------------------------------------------

/**
 * 解析、校验、归一化并绑定到目标齿轮的当前理论轮廓。
 * 任一步失败即抛错，调用方不得把任何中间结果写入数据库。
 */
export function buildMeasurementRecord(opts: {
  id: string
  text: string
  gear: 1 | 2
  name: string
  target: GearGeometry
  alphaDeg: number
}): MeasurementRecord {
  const { unit, points } = parseMeasurementText(opts.text)
  const mm = points.map((p) => ({ x: toMm(p.x, unit), y: toMm(p.y, unit) }))
  const norm = normalizeMeasurement(mm)

  // 尺寸合理性（宽松）：防止把与目标齿轮无关的轮廓绑进来
  const rMax = maxRadius(norm.normalized)
  if (rMax < 0.3 * opts.target.dedendumR || rMax > 3 * opts.target.addendumR) {
    throw new Error(
      `轮廓尺寸与目标齿轮不符（归一化最大半径 ${rMax.toFixed(2)} mm，` +
        `理论齿顶圆半径 ${opts.target.addendumR.toFixed(2)} mm）`
    )
  }

  const devs = norm.normalized.map((p) => signedDeviation(p, opts.target.outline))
  const i = opts.target.input
  return {
    id: opts.id,
    gear: opts.gear,
    name: opts.name,
    importedAt: Date.now(),
    sourceUnit: unit,
    rawPoints: points,
    normalized: norm.normalized,
    bound: { z: i.z, module: i.module, alphaDeg: opts.alphaDeg, faceWidth: i.faceWidth },
    fingerprint: outlineFingerprint(opts.target),
    adjustments: { reversed: norm.reversed, translation: norm.translation },
    deviation: deviationStats(devs),
    checks: []
  }
}

export type MeasurementStatus = 'matched' | 'stale'

/**
 * 测量相对当前齿轮模型的状态。
 * 指纹一致 → matched（可参与暂停帧布尔对比）；
 * 否则 → stale（仅历史证据，不得参与当前案例计算），并给出失配原因。
 */
export function measurementStatus(
  rec: MeasurementRecord,
  g: GearGeometry | undefined
): { status: MeasurementStatus; reason: string } {
  if (!g) return { status: 'stale', reason: '当前齿轮参数无效，无理论模型可比对' }
  if (outlineFingerprint(g) === rec.fingerprint) {
    return { status: 'matched', reason: '指纹与当前理论轮廓一致' }
  }
  const b = rec.bound
  const i = g.input
  const diffs: string[] = []
  if (i.z !== b.z) diffs.push(`齿数 ${b.z}→${i.z}`)
  if (i.module !== b.module) diffs.push(`模数 ${b.module}→${i.module}`)
  const boundAlpha = b.alphaDeg
  const curAlpha = i.alpha / (Math.PI / 180)
  if (Math.abs(curAlpha - boundAlpha) > 1e-9) diffs.push(`压力角 ${boundAlpha}°→${curAlpha}°`)
  if (i.faceWidth !== b.faceWidth) diffs.push(`齿宽 ${b.faceWidth}→${i.faceWidth}`)
  return {
    status: 'stale',
    reason: `基准已变更（${diffs.join('，') || '理论轮廓指纹不同'}），仅作历史证据，不参与当前计算`
  }
}
