/**
 * 实测覆盖层验收：
 *  - 带单位合法 mm / 等价 cm、反向点序得到一致结果并生成偏差；
 *  - 自交、缺失单位、零面积、开口、错误轮廓拒绝，拒绝记录不能进入 JSON/存储；
 *  - 齿数或模数变化后旧测量变 mismatch，不参与当前布尔检查；
 *  - 案例 JSON 往返保留原始坐标、绑定指纹、偏差和历史结论；
 *  - 暂停帧可使用现有 Clipper 布尔能力比较实测覆盖层与对方理论轮廓。
 */
import { buildGear, DEG, transformOutline, type Pt } from '../src/geometry/gear.ts'
import { analyzeMesh, mateAngle } from '../src/geometry/mesh.ts'
import { intersectOutlines } from '../src/geometry/clipper.ts'
import {
  isMeasurementUsable,
  parseMeasuredProfile,
  reconcileMeasurements,
  type MeasuredProfile
} from '../src/geometry/measured.ts'
import {
  parseCase,
  sanitizeCaseForStorage,
  serializeCase,
  SCHEMA_VERSION,
  type CaseData
} from '../src/store.ts'

let fails = 0
const ok = (cond: boolean, msg: string) => {
  if (cond) console.log('  ok  ', msg)
  else {
    fails++
    console.log('  FAIL', msg)
  }
}

function file(unit: string, points: Pt[], name = 'scan.json') {
  return JSON.stringify({ name, unit, coordinates: points.map((p) => [p.x, p.y]) })
}

function nearest(a: Pt, b: Pt): number {
  return Math.hypot(a.x - b.x, a.y - b.y)
}

function ringSetDistance(a: Pt[], b: Pt[]): number {
  let max = 0
  for (const p of a) max = Math.max(max, Math.min(...b.map((q) => nearest(p, q))))
  return max
}

const gear = buildGear({ z: 20, module: 2, alpha: 20 * DEG, faceWidth: 10 })
const gearPair2 = buildGear({ z: 40, module: 2, alpha: 20 * DEG, faceWidth: 10 })

const exactMm = gear.outline.map((p) => ({ x: p.x, y: p.y }))
const measuredMm = gear.outline.map((p) => ({ x: p.x * 1.003, y: p.y * 1.003 }))
const measuredCm = measuredMm.map((p) => ({ x: p.x * 0.1, y: p.y * 0.1 }))
const measuredReversed = [...measuredMm].reverse()

console.log('\n=== 合法导入、单位等价与反向点序 ===')
const m1 = parseMeasuredProfile(file('mm', measuredMm, 'mm-scan.json'), gear, 'gear1', 'mm-scan.json')
const m2 = parseMeasuredProfile(file('cm', measuredCm, 'cm-scan.json'), gear, 'gear1', 'cm-scan.json')
const m3 = parseMeasuredProfile(file('mm', measuredReversed, 'cw-scan.json'), gear, 'gear1', 'cw-scan.json')
ok(m1.status === 'accepted', `合法毫米坐标导入通过（RMS=${m1.deviationStats?.rms.toFixed(4)} mm）`)
ok(m2.status === 'accepted', '等价显示单位 cm 导入通过')
ok(m3.status === 'accepted', '反向 CW 点序导入后自动统一为 CCW 且通过')
ok((m1.raw.points[5].x === measuredMm[5].x && m1.raw.unit === 'mm'), '原始毫米坐标与单位原样保留')
ok((m2.raw.points[5].x === measuredCm[5].x && m2.raw.unit === 'cm'), 'cm 原始坐标未在保存前被替换')
ok(!!m1.binding.theoreticalFingerprint && m1.binding.z === 20 && m1.binding.module === 2, '成功记录绑定具体齿轮参数和理论指纹')
ok(!!m1.transform && m1.normalizedPoints?.length === measuredMm.length, '坐标被归一到齿轮局部坐标系')
ok(ringSetDistance(m1.normalizedPoints!, m2.normalizedPoints!) < 1e-9, 'mm 与 cm 导入得到一致归一几何')
ok(Math.abs((m1.deviationStats?.rms ?? NaN) - (m2.deviationStats?.rms ?? NaN)) < 1e-9, 'mm 与 cm 的偏差分布一致')
ok(ringSetDistance(m1.normalizedPoints!, m3.normalizedPoints!) < 1e-9, '反向点序不改变归一几何')
ok(Math.abs((m1.deviationStats?.rms ?? NaN) - (m3.deviationStats?.rms ?? NaN)) < 1e-9, '反向点序不改变偏差统计')
ok((m1.deviationStats?.max ?? 0) > 0 && (m1.deviationStats?.outsideFraction ?? 0) > 0.9, '外扩测量显示正偏差/理论外分布')
ok(m1.scopeNotice.includes('不是啮合认证'), '记录明确声明不是啮合认证且不扩大适用范围')

console.log('\n=== 拒绝：闭合/自交/零面积/单位/错误轮廓 ===')
const square: Pt[] = [{x:0,y:0},{x:35,y:0},{x:35,y:35},{x:0,y:35}]
const bowtie: Pt[] = [{x:0,y:0},{x:20,y:20},{x:0,y:20},{x:20,y:0},{x:20,y:20}]
const collinear: Pt[] = [{x:0,y:0},{x:5,y:0},{x:10,y:0}]
const open: Pt[] = [{x:0,y:0},{x:20,y:0},{x:20,y:20},{x:0,y:120}]
const missingUnit = parseMeasuredProfile(file('', measuredMm), gear, 'gear1')
const wrongShape = parseMeasuredProfile(file('mm', square), gear, 'gear1')
const selfCross = parseMeasuredProfile(file('mm', bowtie), gear, 'gear1')
const zeroArea = parseMeasuredProfile(file('mm', collinear), gear, 'gear1')
const openShape = parseMeasuredProfile(file('mm', open), gear, 'gear1')
const badUnit = parseMeasuredProfile(file('furlong', measuredMm), gear, 'gear1')
ok(missingUnit.status === 'rejected' && missingUnit.failureReasons.join('').includes('单位'), '缺失单位被拒绝')
ok(badUnit.status === 'rejected' && badUnit.failureReasons.join('').includes('单位'), '未知单位被拒绝')
ok(wrongShape.status === 'rejected' && wrongShape.failureReasons.join('').includes('错误轮廓'), '正方形错误轮廓被拒绝')
ok(selfCross.status === 'rejected' && selfCross.failureReasons.join('').includes('自交'), '自交 Bowtie 被拒绝')
ok(zeroArea.status === 'rejected' && zeroArea.failureReasons.join('').includes('零'), '零面积折线被拒绝')
ok(openShape.status === 'rejected' && openShape.failureReasons.join('').includes('未闭合'), '首尾明显开口被拒绝')
for (const r of [missingUnit, wrongShape, selfCross, zeroArea, openShape, badUnit]) {
  ok(!r.normalizedPoints, `拒绝记录不生成可用归一几何：${r.failureReasons[0] ?? '失败'}`)
}

console.log('\n=== 基准参数变化：旧测量只作历史证据 ===')
const zChanged = buildGear({ z: 21, module: 2, alpha: 20 * DEG, faceWidth: 10 })
const afterZ = reconcileMeasurements([m1], { gear1: zChanged, gear2: gearPair2 })[0]
ok(afterZ.status === 'mismatch' && afterZ.failureReasons.join('').includes('历史证据'), '齿数改变后旧测量标为 mismatch')
ok(!isMeasurementUsable(afterZ, zChanged), 'mismatch 记录不能参与新齿轮检查')
const sticky = reconcileMeasurements([afterZ], { gear1: gear, gear2: gearPair2 })[0]
ok(sticky.status === 'mismatch', '参数改回后旧 mismatch 仍保持历史状态，不会自动复活')

const moduleChanged = buildGear({ z: 20, module: 2.5, alpha: 20 * DEG, faceWidth: 10 })
const afterM = reconcileMeasurements([m2], { gear1: moduleChanged, gear2: gearPair2 })[0]
ok(afterM.status === 'mismatch', '模数改变后旧测量标为 mismatch')
ok(!isMeasurementUsable(afterM, moduleChanged), '模数改变后旧测量不继续参与布尔检查')

console.log('\n=== 案例 JSON 往返与存储卫生 ===')
const checked: MeasuredProfile = {
  ...m1,
  lastCheck: {
    at: 123,
    gearKey: 'gear1',
    phiMeasured: 0.37,
    phiMate: -0.185,
    area: 0,
    intersects: false,
    conclusion: '历史结论：当前帧未相交；非啮合认证'
  }
}
const c: CaseData = {
  schemaVersion: SCHEMA_VERSION,
  id: 'measured-case',
  name: '测量往返',
  createdAt: 1,
  updatedAt: 1,
  note: '',
  gear1: { z: 20, module: 2, alpha: 20 * DEG, alphaDeg: 20, faceWidth: 10 },
  gear2: { z: 40, module: 2, alpha: 20 * DEG, alphaDeg: 20, faceWidth: 10 },
  centerDistance: null,
  unit: 'mm',
  measurements: [checked, afterZ],
  activeMeasurementId: checked.id
}
const round = parseCase(serializeCase(c))
const [rm, rhm] = round.measurements!
ok(rm.raw.points[5].x === checked.raw.points[5].x && rm.raw.unit === 'mm', '往返后原始测量数据仍可复核')
ok(rm.binding.theoreticalFingerprint === checked.binding.theoreticalFingerprint, '往返后理论轮廓指纹仍绑定')
ok(rm.deviationStats?.rms === checked.deviationStats?.rms, '偏差统计随 JSON 保留')
ok(rm.lastCheck?.conclusion === checked.lastCheck.conclusion && rhm.status === 'mismatch', '历史布尔结论和 mismatch 原因保留')
ok(round.activeMeasurementId === checked.id, '当前选择的测量 ID 保留')

const sanitized = sanitizeCaseForStorage({ ...c, measurements: [checked, selfCross] })
ok(sanitized.measurements?.length === 1 && !sanitized.measurements.some((x) => x.status === 'rejected'), '保存前剥离 rejected，数据库不残留失败导入')
let parseRejected = false
try {
  parseCase(serializeCase({ ...c, measurements: [selfCross] }))
} catch {
  parseRejected = true
}
ok(parseRejected, '包含 rejected 测量的 JSON 被拒绝，无法伪装成历史证据')

console.log('\n=== 暂停帧实测覆盖层布尔求交 ===')
const exact = parseMeasuredProfile(file('mm', exactMm), gear, 'gear1')
const mesh = analyzeMesh({ g1: gear, g2: gearPair2, centerDistance: gear.pitchR + gearPair2.pitchR })
const phi1 = 0.37
const phi2 = mateAngle(gear, gearPair2, mesh, phi1)
const clean = await intersectOutlines(
  [transformOutline(exact.normalizedPoints!, 0, 0, phi1)],
  [transformOutline(gearPair2.outline, mesh.a, 0, phi2)]
)
ok(!clean.intersects, `严格啮合相位的实测覆盖层与对方理论轮廓不相交（${clean.area.toExponential(2)} mm²）`)

const badMesh = analyzeMesh({ g1: gear, g2: gearPair2, centerDistance: mesh.a - 3 })
const badPhi2 = mateAngle(gear, gearPair2, badMesh, phi1)
const collide = await intersectOutlines(
  [transformOutline(exact.normalizedPoints!, 0, 0, phi1)],
  [transformOutline(gearPair2.outline, badMesh.a, 0, badPhi2)]
)
ok(collide.intersects && collide.area > 1, `现有 Clipper 能力可检出实测覆盖层局部相交（${collide.area.toFixed(2)} mm²）`)

console.log(fails ? `\n${fails} 项失败 ❌` : '\n实测覆盖层验收全部通过 ✅')
process.exit(fails ? 1 : 0)
