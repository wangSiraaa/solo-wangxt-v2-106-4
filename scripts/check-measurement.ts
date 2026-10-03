/**
 * 实测轮廓覆盖层测试：
 *  1. 合法 mm 坐标导入 → 归一化到齿轮局部坐标、偏差分布合理、可用于布尔对比；
 *  2. 同一数据反向点序 / 等价单位（cm/in）导入 → 归一化结果与统计一致；
 *  3. 自交、缺单位、未闭合、零面积、点太少、错误轮廓 → 拒绝且不产生任何记录；
 *  4. 基准参数（z/m/α）改变 → 旧测量指纹失配，仅作历史证据；
 *  5. 案例 JSON 往返 → 原始数据、绑定指纹、历史结论完整可复核；
 *  6. 覆盖层用 Clipper 在暂停位置做局部相交检查（标准安装无干涉 / 缩小中心距有干涉）。
 */
import { buildGear, DEG, transformOutline, polygonArea, maxRadius } from '../src/geometry/gear.ts'
import { analyzeMesh, mateAngle } from '../src/geometry/mesh.ts'
import { intersectOutlines } from '../src/geometry/clipper.ts'
import {
  buildMeasurementRecord,
  measurementStatus,
  newMeasurementId,
  normalizeMeasurement,
  outlineFingerprint,
  parseMeasurementText,
  polygonCentroid,
  signedDeviation,
  type MeasurementRecord
} from '../src/geometry/measurement.ts'
import { parseCase, serializeCase, SCHEMA_VERSION, type CaseData } from '../src/store.ts'

let fails = 0
const ok = (cond: boolean, msg: string) => {
  if (cond) console.log('  ok  ', msg)
  else {
    fails++
    console.log('  FAIL', msg)
  }
}
const throwsWith = (fn: () => unknown, substr: string, msg: string) => {
  try {
    fn()
    fails++
    console.log('  FAIL', `${msg}（未抛错）`)
  } catch (e) {
    const m = (e as Error).message
    if (m.includes(substr)) console.log('  ok  ', `${msg} → "${m}"`)
    else {
      fails++
      console.log('  FAIL', `${msg}（错误原因不符：${m}，应含 "${substr}"）`)
    }
  }
}

const g1 = buildGear({ z: 20, module: 2, alpha: 20 * DEG, faceWidth: 10 })
const g2 = buildGear({ z: 40, module: 2, alpha: 20 * DEG, faceWidth: 10 })

// ---- 合成"实测"数据：理论轮廓 + 微小径向扰动（确定伪随机），首尾闭合 ----
function synthMeasured(g: typeof g1, amp: number, closed = true) {
  const pts = g.outline.map((p, i) => {
    const th = Math.atan2(p.y, p.x)
    const k = 1 + amp * Math.sin(3 * th + 0.7) + amp * 0.3 * Math.sin(11 * th + i * 0.01)
    return [p.x * k, p.y * k] as [number, number]
  })
  if (closed) pts.push([...pts[0]] as [number, number])
  return pts
}
const toJson = (unit: string, pts: [number, number][]) => JSON.stringify({ unit, points: pts })

// ============ 1. 合法 mm 导入：归一化 + 偏差 + 绑定 ============
console.log('\n=== 合法 mm 坐标导入 ===')
const amp = 0.002 // 0.2% 径向扰动
const measJson = toJson('mm', synthMeasured(g1, amp))
const rec = buildMeasurementRecord({
  id: 'meas-1',
  text: measJson,
  gear: 1,
  name: '三坐标实测-轮1',
  target: g1,
  alphaDeg: 20
})

ok(rec.sourceUnit === 'mm', '源单位记录为 mm')
ok(rec.normalized.length === g1.outline.length, '归一化点数 = 理论轮廓点数（闭合点已去除）')
ok(polygonArea(rec.normalized) > 0, '归一化轮廓为逆时针（正向面积）')
const cNorm = polygonCentroid(rec.normalized)
ok(Math.hypot(cNorm.x, cNorm.y) < 1e-9, '归一化后质心在原点（齿轮局部坐标系）')
ok(Math.abs(maxRadius(rec.normalized) - g1.addendumR) < 2 * amp * g1.addendumR + 1e-6,
  `归一化最大半径 ${maxRadius(rec.normalized).toFixed(3)} ≈ 理论齿顶圆 ${g1.addendumR.toFixed(3)}（视图中对齐）`)
ok(rec.fingerprint === outlineFingerprint(g1), '指纹与当前理论轮廓一致')
ok(rec.bound.z === 20 && rec.bound.module === 2 && rec.bound.alphaDeg === 20, '绑定参数 = 导入时刻齿轮参数')
ok(rec.deviation.max > 0.01 && rec.deviation.max < 0.08, `偏差 max=${rec.deviation.max.toFixed(4)} mm 在扰动量级内`)
ok(rec.deviation.outside > 0 && rec.deviation.inside > 0, `偏差分布含轮廓外 ${rec.deviation.outside} 点 / 内 ${rec.deviation.inside} 点`)
ok(rec.deviation.histogram.length === 12 && rec.deviation.histogram.reduce((s, h) => s + h.count, 0) === rec.normalized.length,
  '偏差直方图覆盖全部测点')
// 每个归一化点到理论轮廓的距离都在扰动量级内 → 覆盖层与理论轮廓对齐
const maxDev = Math.max(...rec.normalized.map((p) => Math.abs(signedDeviation(p, g1.outline))))
ok(maxDev < 0.08, `全部测点相对理论轮廓偏差 <0.08 mm（实际 ${maxDev.toFixed(4)}）`)
const st0 = measurementStatus(rec, g1)
ok(st0.status === 'matched', `初始状态 matched：${st0.reason}`)

// ============ 2. 反向点序 / 等价单位一致 ============
console.log('\n=== 反向点序 / 等价单位一致 ===')
const rawClosed = synthMeasured(g1, amp) // 含闭合点
const reversedClosed = [...rawClosed].reverse()
const recRev = buildMeasurementRecord({
  id: 'meas-1r', text: toJson('mm', reversedClosed), gear: 1, name: '反向', target: g1, alphaDeg: 20
})
ok(recRev.adjustments.reversed !== rec.adjustments.reversed, '反向点序被识别并统一为 CCW')
ok(recRev.normalized.length === rec.normalized.length, '反向导入：归一化点数一致')
let maxDiff = 0
for (let i = 0; i < rec.normalized.length; i++) {
  maxDiff = Math.max(maxDiff,
    Math.hypot(rec.normalized[i].x - recRev.normalized[i].x, rec.normalized[i].y - recRev.normalized[i].y))
}
ok(maxDiff < 1e-9, `反向点序归一化结果逐点一致（最大差 ${maxDiff.toExponential(2)}）`)
ok(Math.abs(recRev.deviation.max - rec.deviation.max) < 1e-9 &&
   Math.abs(recRev.deviation.rms - rec.deviation.rms) < 1e-9, '反向点序偏差统计一致')
ok(recRev.fingerprint === rec.fingerprint, '反向点序绑定指纹一致')

const cmPts = rawClosed.map(([x, y]) => [x * 0.1, y * 0.1] as [number, number])
const recCm = buildMeasurementRecord({
  id: 'meas-1c', text: toJson('cm', cmPts), gear: 1, name: 'cm 单位', target: g1, alphaDeg: 20
})
let maxDiffCm = 0
for (let i = 0; i < rec.normalized.length; i++) {
  maxDiffCm = Math.max(maxDiffCm,
    Math.hypot(rec.normalized[i].x - recCm.normalized[i].x, rec.normalized[i].y - recCm.normalized[i].y))
}
ok(maxDiffCm < 1e-9, `等价单位（cm）归一化结果一致（最大差 ${maxDiffCm.toExponential(2)} mm）`)
ok(Math.abs(recCm.deviation.rms - rec.deviation.rms) < 1e-9, '等价单位偏差统计一致')

// CSV 格式 + 英寸单位
const csv = ['# unit: in', ...rawClosed.map(([x, y]) => `${x / 25.4},${y / 25.4}`)].join('\n')
const recCsv = buildMeasurementRecord({
  id: 'meas-1i', text: csv, gear: 1, name: 'CSV 英寸', target: g1, alphaDeg: 20
})
let maxDiffIn = 0
for (let i = 0; i < rec.normalized.length; i++) {
  maxDiffIn = Math.max(maxDiffIn,
    Math.hypot(rec.normalized[i].x - recCsv.normalized[i].x, rec.normalized[i].y - recCsv.normalized[i].y))
}
ok(recCsv.sourceUnit === 'in' && maxDiffIn < 1e-9, `CSV + 英寸导入一致（最大差 ${maxDiffIn.toExponential(2)} mm）`)

// ============ 3. 非法数据拒绝且数据库无残留 ============
console.log('\n=== 非法数据拒绝（无残留） ===')
const saved: MeasurementRecord[] = [] // 模拟应用侧记录列表
const tryImport = (text: string) => {
  // 与 App 相同的路径：全部校验通过才允许入列/落库
  const r = buildMeasurementRecord({ id: newMeasurementId(), text, gear: 1, name: 'x', target: g1, alphaDeg: 20 })
  saved.push(r)
}

// 自交：星形多边形（64 顶点按步长 27 连接，有向面积非零）
const star: [number, number][] = []
for (let i = 0; i < 64; i++) {
  const t = ((i * 27) % 64) / 64 * 2 * Math.PI
  star.push([20 * Math.cos(t), 20 * Math.sin(t)])
}
star.push([...star[0]] as [number, number])
throwsWith(() => tryImport(toJson('mm', star)), '自交', '自交（星形）轮廓被拒绝')
// 8 字形（有向面积为零的退化自交）同样被拒绝
const fig8: [number, number][] = []
for (let i = 0; i < 64; i++) {
  const t = (i / 64) * 2 * Math.PI
  fig8.push([20 * Math.sin(t), 10 * Math.sin(2 * t)])
}
fig8.push([...fig8[0]] as [number, number])
throwsWith(() => tryImport(toJson('mm', fig8)), '面积', '8 字形（零有向面积）被拒绝')
// 缺单位
throwsWith(() => tryImport(JSON.stringify({ points: synthMeasured(g1, amp) })), '单位', '缺单位 JSON 被拒绝')
throwsWith(() => tryImport('10,10\n20,10\n20,20\n10,10'), '单位', '缺单位 CSV 被拒绝')
throwsWith(() => tryImport(toJson('furlong', synthMeasured(g1, amp))), '单位', '未知单位被拒绝')
// 未闭合
throwsWith(() => tryImport(toJson('mm', synthMeasured(g1, amp, false))), '闭合', '未闭合轮廓被拒绝')
// 零面积（共线）
const line: [number, number][] = []
for (let i = 0; i < 20; i++) line.push([i, 2 * i])
line.push([0, 0])
throwsWith(() => tryImport(toJson('mm', line)), '面积', '零面积（共线）轮廓被拒绝')
// 点太少
throwsWith(() => tryImport(toJson('mm', [[0, 0], [10, 0], [10, 10], [0, 10], [0, 0]])), '不足', '点数不足被拒绝')
// 错误轮廓：尺寸与目标齿轮完全不符（半径 1000mm 的圆）
const big: [number, number][] = []
for (let i = 0; i < 64; i++) big.push([1000 * Math.cos(i / 64 * 2 * Math.PI), 1000 * Math.sin(i / 64 * 2 * Math.PI)])
big.push([...big[0]] as [number, number])
throwsWith(() => tryImport(toJson('mm', big)), '不符', '与齿轮尺寸不符的轮廓被拒绝')
ok(saved.length === 0, `全部被拒后记录列表为空（数据库无残留，实际 ${saved.length} 条）`)

// 损坏测量记录的案例文件同样被拒（导入即失败，不会落库）
const corruptCase = JSON.parse(serializeCase({
  schemaVersion: SCHEMA_VERSION, id: 'c-bad', name: 'bad', createdAt: 1, updatedAt: 1, note: '',
  gear1: { z: 20, module: 2, alpha: 20 * DEG, alphaDeg: 20, faceWidth: 10 },
  gear2: { z: 40, module: 2, alpha: 20 * DEG, alphaDeg: 20, faceWidth: 10 },
  centerDistance: null, unit: 'mm',
  measurements: [{ ...rec, fingerprint: '' }]
}))
throwsWith(() => parseCase(JSON.stringify(corruptCase)), '指纹', '缺指纹的测量记录案例被拒绝')

// ============ 4. 基准参数改变 → 仅历史证据 ============
console.log('\n=== 基准改变后旧测量失配 ===')
const g1z21 = buildGear({ z: 21, module: 2, alpha: 20 * DEG, faceWidth: 10 })
const stZ = measurementStatus(rec, g1z21)
ok(stZ.status === 'stale' && stZ.reason.includes('齿数 20→21'), `改齿数 → stale：${stZ.reason}`)
const g1m25 = buildGear({ z: 20, module: 2.5, alpha: 20 * DEG, faceWidth: 10 })
const stM = measurementStatus(rec, g1m25)
ok(stM.status === 'stale' && stM.reason.includes('模数 2→2.5'), `改模数 → stale：${stM.reason}`)
const g1a = buildGear({ z: 20, module: 2, alpha: 25 * DEG, faceWidth: 10 })
ok(measurementStatus(rec, g1a).status === 'stale', '改压力角 → stale')
ok(measurementStatus(rec, g1).status === 'matched', '参数恢复 → 重新 matched')
ok(outlineFingerprint(g1) !== outlineFingerprint(g1z21) && outlineFingerprint(g1) !== outlineFingerprint(g1m25),
  '不同基准参数产生不同指纹')

// ============ 5. 案例 JSON 往返：原始数据 / 指纹 / 历史结论可复核 ============
console.log('\n=== 案例 JSON 往返 ===')
const mesh0 = analyzeMesh({ g1, g2, centerDistance: g1.pitchR + g2.pitchR })
rec.checks.push({
  at: 1720000000000, phi1: 0.123, overlapArea: 0, intersects: false, fingerprint: rec.fingerprint
})
const caseData: CaseData = {
  schemaVersion: SCHEMA_VERSION, id: 'case-meas', name: '含测量案例', createdAt: 1, updatedAt: 2, note: '',
  gear1: { z: 20, module: 2, alpha: 20 * DEG, alphaDeg: 20, faceWidth: 10 },
  gear2: { z: 40, module: 2, alpha: 20 * DEG, alphaDeg: 20, faceWidth: 10 },
  centerDistance: null, unit: 'mm',
  outlines: { gear1: g1.outline, gear2: g2.outline },
  measurements: [rec]
}
const back = parseCase(serializeCase(caseData))
ok(!!back.measurements && back.measurements.length === 1, '测量记录随案例往返保留')
const bm = back.measurements![0]
ok(bm.rawPoints.length === rec.rawPoints.length && bm.rawPoints[5].x === rec.rawPoints[5].x,
  '原始导入数据（源单位、原顺序）逐点保留')
ok(bm.normalized.length === rec.normalized.length && bm.normalized[7].y === rec.normalized[7].y,
  '归一化数据逐点保留')
ok(bm.fingerprint === rec.fingerprint && bm.bound.z === 20 && bm.bound.module === 2,
  '绑定参数与理论轮廓指纹保留')
ok(bm.checks.length === 1 && bm.checks[0].phi1 === 0.123 && bm.checks[0].fingerprint === rec.fingerprint,
  '历史检查结论（含当时指纹）保留')
ok(bm.deviation.rms === rec.deviation.rms && bm.deviation.histogram.length === 12, '偏差统计与直方图保留')
ok(measurementStatus(bm, g1).status === 'matched' && measurementStatus(bm, g1z21).status === 'stale',
  '往返后的记录仍可判定匹配/失配')
// 旧版 schema 1（无测量）仍可导入
const legacy = JSON.parse(serializeCase(caseData)) as CaseData
legacy.schemaVersion = 1
delete legacy.measurements
ok(parseCase(JSON.stringify(legacy)).gear1.z === 20, 'schema 1 旧案例兼容导入')
throwsWith(() => parseCase(JSON.stringify({ ...legacy, schemaVersion: 99 })), '版本', '未知版本被拒绝')

// ============ 6. 暂停位置覆盖层布尔检查（Clipper） ============
console.log('\n=== 覆盖层局部相交检查（暂停帧） ===')
// 用无扰动理论轮廓作为覆盖层（归一化后质心在原点，与局部坐标一致）
const recExact = buildMeasurementRecord({
  id: 'meas-exact', text: toJson('mm', synthMeasured(g1, 0)), gear: 1, name: '精确', target: g1, alphaDeg: 20
})
ok(Math.max(...recExact.normalized.map((p) => Math.abs(signedDeviation(p, g1.outline)))) < 1e-9,
  '无扰动覆盖层与理论轮廓偏差为 0')
const phi1 = 0.41
const phi2 = mateAngle(g1, g2, mesh0, phi1)
const overlayWorld = [transformOutline(recExact.normalized, 0, 0, phi1)]
const otherWorld = [transformOutline(g2.outline, mesh0.a, 0, phi2)]
const resOk = await intersectOutlines(overlayWorld, otherWorld)
ok(!resOk.intersects, `标准中心距暂停帧：覆盖层 × 对方理论轮廓无相交（${resOk.area.toExponential(2)} mm²）`)
const meshBad = analyzeMesh({ g1, g2, centerDistance: g1.pitchR + g2.pitchR - 3 })
const phi2b = mateAngle(g1, g2, meshBad, phi1)
const resBad = await intersectOutlines(
  [transformOutline(recExact.normalized, 0, 0, phi1)],
  [transformOutline(g2.outline, meshBad.a, 0, phi2b)]
)
ok(resBad.intersects && resBad.area > 1, `中心距过小暂停帧：覆盖层检出局部相交（${resBad.area.toFixed(2)} mm²）`)
// 失配测量不得参与：状态门控（App 中按钮禁用 + 拒绝逻辑依赖此判定）
ok(measurementStatus(recExact, g1m25).status === 'stale', '失配测量被标记，不参与新基准下的检查')

console.log(fails ? `\n${fails} 项失败 ❌` : '\n实测轮廓覆盖层全部通过 ✅')
process.exit(fails ? 1 : 0)
