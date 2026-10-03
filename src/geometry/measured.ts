/**
 * 实测二维轮廓覆盖层。
 *
 * 安全边界：
 *  - 实测坐标只转换成内部 mm，并平移/旋转到对应齿轮的“局部显示坐标系”；不做缩放，
 *    因此不能用归一化悄悄修补模数或制造误差；
 *  - 成功导入后，它只是覆盖在当前理论轮廓上的证据，可显示偏差、可在暂停帧做布尔求交；
 *  - 记录绑定当时的齿轮参数和理论轮廓指纹。基准齿轮变化后记录变为 mismatch，
 *    保留为历史证据，但不会自动进入新案例的干涉计算；
 *  - 实测数据不代表啮合认证，也不扩大理想渐开线模型的适用范围。
 */
import type { GearGeometry, GearInput, Pt } from './gear'
import { polygonArea } from './gear'
import { toMm, UNITS, type LengthUnit } from '../units'

export type MeasurementGearKey = 'gear1' | 'gear2'
export type MeasuredProfileStatus = 'accepted' | 'rejected' | 'mismatch'
export type MeasurementClosure = 'explicit' | 'implicit'

export interface MeasurementBinding {
  gearKey: MeasurementGearKey
  z: number
  module: number
  alpha: number
  alphaDeg: number
  faceWidth: number
  /** 成功导入时对应理论轮廓的确定性指纹 */
  theoreticalFingerprint: string
}

export interface MeasurementTransform {
  /** 质心平移量（mm），局部归一后 p' = R(angle)·(p - centroid) */
  centroidX: number
  centroidY: number
  angle: number
  /** 源单位 → mm 使用的换算因子 */
  unitFactorToMm: number
}

export interface DeviationPoint extends Pt {
  /** 有符号法向最近距离（mm）：实测在理论轮廓外为正，内部为负 */
  d: number
  inside: boolean
}

export interface DeviationStats {
  /** 有符号最小值/最大值（mm） */
  min: number
  max: number
  maxAbs: number
  meanAbs: number
  rms: number
  outsideFraction: number
  /** 从 -maxAbs 到 +maxAbs 的直方图 */
  histogram: { from: number; to: number; count: number }[]
}

export interface MeasurementCheck {
  at: number
  gearKey: MeasurementGearKey
  phiMeasured: number
  phiMate: number
  area: number
  intersects: boolean
  conclusion: string
}

export interface MeasuredProfile {
  id: string
  name: string
  createdAt: number
  gearKey: MeasurementGearKey
  status: MeasuredProfileStatus
  failureReasons: string[]
  /** 非认证声明，随案例和 JSON 一起保留 */
  scopeNotice: string

  declaredUnit: string
  sourceUnit: LengthUnit
  closure: MeasurementClosure
  /** 去重、闭合检查后的点数（方向反转前） */
  pointCount: number
  originalOrientation: 'ccw' | 'cw'
  closed: boolean

  /** 原始坐标，严格保留源文件中的数值与单位；失败时也保留可核查的输入 */
  raw: {
    unit: LengthUnit
    points: Pt[]
  }

  binding: MeasurementBinding

  /** 归一后的 mm 局部坐标；被拒绝或缺少有效几何时不生成 */
  normalizedPoints?: Pt[]
  transform?: MeasurementTransform
  alignmentScore?: {
    radialRms: number
    nearestRms: number
    maxAbs: number
  }
  deviations?: DeviationPoint[]
  deviationStats?: DeviationStats
  lastCheck?: MeasurementCheck | null
}

export const MEASUREMENT_SCOPE_NOTICE =
  '实测轮廓仅用于教学比对和暂停帧局部相交检查；它不是啮合认证，不替换理论渐开线，也不扩大当前模型适用范围。'

export interface MeasurementFile {
  name?: string
  unit?: unknown
  coordinates?: unknown
  points?: unknown
  coordinateData?: { unit?: unknown; coordinates?: unknown; points?: unknown }
}

const EPS_RANGE = 1e-9

function finiteNumber(v: unknown): v is number {
  return typeof v === 'number' && Number.isFinite(v)
}

function dedupeNearby(points: Pt[]): Pt[] {
  const out: Pt[] = []
  const scale = Math.max(1, ...points.map((p) => Math.hypot(p.x, p.y)))
  const eps = 1e-9 * scale
  for (const p of points) {
    const last = out[out.length - 1]
    if (!last || Math.hypot(p.x - last.x, p.y - last.y) > eps) out.push({ x: p.x, y: p.y })
  }
  // 去掉显式闭合的重复尾点；若去尾点后又与首点重复，继续去尾
  while (out.length > 1) {
    const f = out[0]
    const l = out[out.length - 1]
    if (Math.hypot(f.x - l.x, f.y - l.y) <= eps) out.pop()
    else break
  }
  return out
}

function cross(a: Pt, b: Pt, c: Pt) {
  return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x)
}

function onSegment(a: Pt, b: Pt, p: Pt) {
  return (
    Math.min(a.x, b.x) - EPS_RANGE <= p.x &&
    p.x <= Math.max(a.x, b.x) + EPS_RANGE &&
    Math.min(a.y, b.y) - EPS_RANGE <= p.y &&
    p.y <= Math.max(a.y, b.y) + EPS_RANGE
  )
}

function segmentsIntersect(a: Pt, b: Pt, c: Pt, d: Pt): boolean {
  const c1 = cross(a, b, c)
  const c2 = cross(a, b, d)
  const c3 = cross(c, d, a)
  const c4 = cross(c, d, b)
  const eps = 1e-10
  if ((c1 > eps && c2 < -eps) || (c1 < -eps && c2 > eps)) {
    return (c3 > eps && c4 < -eps) || (c3 < -eps && c4 > eps)
  }
  // 端点接触或共线重叠也视为非相邻边自交（齿轮外环不应出现）
  if (Math.abs(c1) <= eps && onSegment(a, b, c)) return true
  if (Math.abs(c2) <= eps && onSegment(a, b, d)) return true
  if (Math.abs(c3) <= eps && onSegment(c, d, a)) return true
  if (Math.abs(c4) <= eps && onSegment(c, d, b)) return true
  return false
}

function hasSelfIntersection(ring: Pt[]): boolean {
  const n = ring.length
  for (let i = 0; i < n; i++) {
    const a = ring[i]
    const b = ring[(i + 1) % n]
    for (let j = i + 1; j < n; j++) {
      // 相邻边共享端点是正常的；首边/末边同样跳过
      if (j === i || j === i + 1 || (i === 0 && j === n - 1)) continue
      const c = ring[j]
      const d = ring[(j + 1) % n]
      if (segmentsIntersect(a, b, c, d)) return true
    }
  }
  return false
}

function polygonCentroid(ring: Pt[]): Pt {
  let a2 = 0
  let cx = 0
  let cy = 0
  for (let i = 0; i < ring.length; i++) {
    const p = ring[i]
    const q = ring[(i + 1) % ring.length]
    const f = p.x * q.y - q.x * p.y
    a2 += f
    cx += (p.x + q.x) * f
    cy += (p.y + q.y) * f
  }
  const area = a2 / 2
  if (Math.abs(area) < 1e-14) {
    const x = ring.reduce((s, p) => s + p.x, 0) / ring.length
    const y = ring.reduce((s, p) => s + p.y, 0) / ring.length
    return { x, y }
  }
  return { x: cx / (6 * area), y: cy / (6 * area) }
}

/** 与 X 轴正方向夹角为 angle 的射线与星形多边形外环交点半径；取最近的正交点 */
function rayRadius(ring: Pt[], angle: number): number | null {
  const dx = Math.cos(angle)
  const dy = Math.sin(angle)
  let best: number | null = null
  for (let i = 0; i < ring.length; i++) {
    const p = ring[i]
    const q = ring[(i + 1) % ring.length]
    const ex = q.x - p.x
    const ey = q.y - p.y
    const den = dy * ex - dx * ey
    if (Math.abs(den) < 1e-14) continue
    // p + t d = q + u e；求解分母 cross(d,e)
    const t = (p.x * ey - p.y * ex) / den
    const u = (p.y * dx - p.x * dy) / den
    if (t >= -1e-9 && u >= -1e-9 && u <= 1 + 1e-9) {
      if (t >= 0 && (best === null || t < best)) best = t
    }
  }
  return best
}

function radialSignature(ring: Pt[], samples: number): { values: number[]; missing: number } {
  const values: number[] = new Array(samples)
  let missing = 0
  for (let i = 0; i < samples; i++) {
    const r = rayRadius(ring, (i / samples) * Math.PI * 2)
    if (r === null) {
      missing++
      values[i] = 0
    } else values[i] = r
  }
  return { values, missing }
}

function cyclicAt(values: number[], index: number): number {
  const n = values.length
  return values[((index % n) + n) % n]
}

function interpolateCyclic(values: number[], angle: number): number {
  const n = values.length
  const f = (((angle / (2 * Math.PI)) % 1) + 1) % 1 * n
  const i = Math.floor(f)
  const t = f - i
  return cyclicAt(values, i) * (1 - t) + cyclicAt(values, i + 1) * t
}

function radialRmsAtAngle(measured: number[], theory: number[], angle: number): number {
  let sum = 0
  const n = measured.length
  for (let i = 0; i < n; i++) {
    const theta = (i / n) * Math.PI * 2
    const diff = measured[i] - interpolateCyclic(theory, theta + angle)
    sum += diff * diff
  }
  return Math.sqrt(sum / n)
}

function alignAngle(measuredRing: Pt[], gear: GearGeometry): { angle: number; radialRms: number; missing: number } {
  const samples = 1024
  const measured = radialSignature(measuredRing, samples)
  const theory = radialSignature(gear.outline, samples)
  if (measured.missing > samples * 0.01) {
    return { angle: 0, radialRms: Infinity, missing: measured.missing }
  }

  const step = (2 * Math.PI) / samples
  let bestShift = 0
  let best = Infinity
  for (let shift = 0; shift < samples; shift++) {
    let sum = 0
    for (let i = 0; i < samples; i++) {
      const diff = measured.values[i] - theory.values[(i + shift) % samples]
      sum += diff * diff
    }
    const score = Math.sqrt(sum / samples)
    if (score < best) {
      best = score
      bestShift = shift
    }
  }

  let bestAngle = bestShift * step
  // 在最佳离散相位附近做连续细化
  for (let k = -16; k <= 16; k++) {
    const angle = (bestShift + k / 16) * step
    const score = radialRmsAtAngle(measured.values, theory.values, angle)
    if (score < best) {
      best = score
      bestAngle = angle
    }
  }
  return { angle: bestAngle, radialRms: best, missing: measured.missing }
}

function rotateAndTranslate(points: Pt[], c: Pt, angle: number): Pt[] {
  const cs = Math.cos(angle)
  const sn = Math.sin(angle)
  return points.map((p) => {
    const x = p.x - c.x
    const y = p.y - c.y
    return { x: x * cs - y * sn, y: x * sn + y * cs }
  })
}

function pointInPolygon(p: Pt, ring: Pt[]): boolean {
  let inside = false
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const a = ring[j]
    const b = ring[i]
    const intersects =
      b.y > p.y !== a.y > p.y &&
      p.x < ((a.x - b.x) * (p.y - b.y)) / (a.y - b.y) + b.x
    if (intersects) inside = !inside
  }
  return inside
}

function distanceToRing(p: Pt, ring: Pt[]): number {
  let best = Infinity
  for (let i = 0; i < ring.length; i++) {
    const a = ring[i]
    const b = ring[(i + 1) % ring.length]
    const vx = b.x - a.x
    const vy = b.y - a.y
    const len2 = vx * vx + vy * vy
    let t = len2 ? ((p.x - a.x) * vx + (p.y - a.y) * vy) / len2 : 0
    t = Math.max(0, Math.min(1, t))
    const x = a.x + vx * t
    const y = a.y + vy * t
    best = Math.min(best, Math.hypot(p.x - x, p.y - y))
  }
  return best
}

function computeDeviations(points: Pt[], gear: GearGeometry): { points: DeviationPoint[]; stats: DeviationStats } {
  const out: DeviationPoint[] = points.map((p) => {
    const dist = distanceToRing(p, gear.outline)
    const inside = pointInPolygon(p, gear.outline)
    return { x: p.x, y: p.y, d: inside ? -dist : dist, inside }
  })
  let min = Infinity
  let max = -Infinity
  let sumAbs = 0
  let sumSq = 0
  let outside = 0
  for (const p of out) {
    min = Math.min(min, p.d)
    max = Math.max(max, p.d)
    sumAbs += Math.abs(p.d)
    sumSq += p.d * p.d
    if (!p.inside) outside++
  }
  const maxAbs = Math.max(Math.abs(min), Math.abs(max))
  const bins = 11
  const histogram = Array.from({ length: bins }, (_, i) => ({
    from: -maxAbs + (2 * maxAbs * i) / bins,
    to: -maxAbs + (2 * maxAbs * (i + 1)) / bins,
    count: 0
  }))
  for (const p of out) {
    let idx = Math.floor(((p.d + maxAbs) / (2 * maxAbs || 1)) * bins)
    idx = Math.max(0, Math.min(bins - 1, idx))
    histogram[idx].count++
  }
  return {
    points: out,
    stats: {
      min,
      max,
      maxAbs,
      meanAbs: sumAbs / out.length,
      rms: Math.sqrt(sumSq / out.length),
      outsideFraction: outside / out.length,
      histogram
    }
  }
}

/** FNV-1a 64 位指纹；坐标用固定精度序列化，避免 V8 数字字符串偶然差异 */
export function theoreticalFingerprint(gear: GearGeometry): string {
  const input: GearInput = gear.input
  const coords = gear.outline.map((p) => `${p.x.toPrecision(10)},${p.y.toPrecision(10)}`).join(';')
  const canonical = JSON.stringify({
    kind: 'spur-gear-lab/theoretical-outline/v1',
    z: input.z,
    module: Number(input.module.toPrecision(12)),
    alpha: Number(input.alpha.toPrecision(12)),
    faceWidth: Number(input.faceWidth.toPrecision(12)),
    pointCount: gear.outline.length,
    coords
  })
  let h = 0xcbf29ce484222325n
  for (let i = 0; i < canonical.length; i++) {
    h ^= BigInt(canonical.charCodeAt(i))
    h = BigInt.asUintN(64, h * 0x100000001b3n)
  }
  return `theoretical-v1-${h.toString(16).padStart(16, '0')}`
}

export function makeBinding(gear: GearGeometry, gearKey: MeasurementGearKey): MeasurementBinding {
  return {
    gearKey,
    z: gear.input.z,
    module: gear.input.module,
    alpha: gear.input.alpha,
    alphaDeg: gear.input.alpha / (Math.PI / 180),
    faceWidth: gear.input.faceWidth,
    theoreticalFingerprint: theoreticalFingerprint(gear)
  }
}

function extractRaw(file: MeasurementFile): { unit: unknown; coords: unknown } {
  return {
    unit: file.unit ?? file.coordinateData?.unit,
    coords: file.coordinates ?? file.points ?? file.coordinateData?.coordinates ?? file.coordinateData?.points
  }
}

function toPoints(coords: unknown): Pt[] {
  if (!Array.isArray(coords)) throw new Error('坐标必须是二维数组，例如 [[x,y], ...]')
  return coords.map((row) => {
    if (!Array.isArray(row) || row.length < 2 || !finiteNumber(row[0]) || !finiteNumber(row[1])) {
      throw new Error('每个坐标点必须是两个有限数字 [x, y]')
    }
    return { x: row[0], y: row[1] }
  })
}

function newId(): string {
  return `meas-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
}

function baseRecord(
  gear: GearGeometry,
  gearKey: MeasurementGearKey,
  name: string,
  declaredUnit: string,
  sourceUnit: LengthUnit,
  rawPoints: Pt[]
): MeasuredProfile {
  return {
    id: newId(),
    name,
    createdAt: Date.now(),
    gearKey,
    status: 'rejected',
    failureReasons: [],
    scopeNotice: MEASUREMENT_SCOPE_NOTICE,
    declaredUnit,
    sourceUnit,
    closure: 'implicit',
    pointCount: rawPoints.length,
    originalOrientation: 'ccw',
    closed: false,
    raw: { unit: sourceUnit, points: rawPoints },
    binding: makeBinding(gear, gearKey),
    lastCheck: null
  }
}

/**
 * 解析并校验实测文件。合法时返回 accepted；任何几何/单位错误返回 rejected（含原因），
 * 调用方不得把 rejected 记录放入案例历史或 IndexedDB。
 */
export function parseMeasuredProfile(
  text: string,
  gear: GearGeometry,
  gearKey: MeasurementGearKey,
  fallbackName = '实测轮廓'
): MeasuredProfile {
  let file: MeasurementFile
  let rawSource: Pt[]
  let declaredUnit = ''
  try {
    file = JSON.parse(text) as MeasurementFile
  } catch (e) {
    throw new Error(`实测文件不是合法 JSON：${(e as Error).message}`)
  }
  const extracted = extractRaw(file)
  declaredUnit = extracted.unit == null ? '' : String(extracted.unit).trim()
  try {
    rawSource = toPoints(extracted.coords)
  } catch (e) {
    throw e as Error
  }

  const unit = UNITS[declaredUnit as LengthUnit]  // 即使单位无效，也构造 rejected 记录展示源数据；不会持久化
  const safeUnit: LengthUnit = unit ? (declaredUnit as LengthUnit) : 'mm'
  const rec = baseRecord(gear, gearKey, file.name || fallbackName, declaredUnit, safeUnit, rawSource)

  if (!unit) rec.failureReasons.push(`缺失或无法识别长度单位“${declaredUnit}”；支持 ${Object.keys(UNITS).join('、')}`)
  if (rawSource.length < 3) rec.failureReasons.push('至少需要 3 个二维点才能构成闭合轮廓')

  const distinct = dedupeNearby(rawSource)
  rec.pointCount = distinct.length
  if (distinct.length < 3) rec.failureReasons.push('去除重复点后少于 3 个点，无法构成有效面域')

  const explicitClosed =
    rawSource.length > 1 &&
    Math.hypot(rawSource[0].x - rawSource[rawSource.length - 1].x, rawSource[0].y - rawSource[rawSource.length - 1].y) <=
      1e-9 * Math.max(1, ...rawSource.map((p) => Math.hypot(p.x, p.y)))
  rec.closure = explicitClosed ? 'explicit' : 'implicit'

  if (distinct.length >= 3) {
    let maxStep = 0
    let sumStep = 0
    for (let i = 0; i < distinct.length - 1; i++) {
      const p = distinct[i]
      const q = distinct[i + 1]
      const d = Math.hypot(q.x - p.x, q.y - p.y)
      maxStep = Math.max(maxStep, d)
      sumStep += d
    }
    const closeGap = Math.hypot(distinct[0].x - distinct[distinct.length - 1].x, distinct[0].y - distinct[distinct.length - 1].y)
    const closeTolerance = Math.max(maxStep * 1.1, 1e-7 * Math.max(1, sumStep))
    rec.closed = closeGap <= closeTolerance
    if (!rec.closed) rec.failureReasons.push(`轮廓未闭合：首尾间距 ${closeGap.toPrecision(3)} 超过相邻点步长容差 ${closeTolerance.toPrecision(3)}`)

    const signedArea = polygonArea(distinct)
    const scale = Math.max(1, ...distinct.map((p) => Math.hypot(p.x, p.y)))
    if (Math.abs(signedArea) < 1e-9 * scale * scale) rec.failureReasons.push('轮廓面积接近零，不能表示实测实体断面')
    rec.originalOrientation = signedArea >= 0 ? 'ccw' : 'cw'

    if (rec.closed && Math.abs(signedArea) >= 1e-9 * scale * scale && hasSelfIntersection(distinct)) {
      rec.failureReasons.push('轮廓存在非相邻边自交，无法作为单一实体外环')
    }
  }

  if (rec.failureReasons.length || !unit) return rec

  // 只做单位换算；CW 统一反转成理论轮廓一致的 CCW，不改变几何结果
  let mm = distinct.map((p) => ({ x: toMm(p.x, unit.id), y: toMm(p.y, unit.id) }))
  if (rec.originalOrientation === 'cw') mm = mm.reverse()

  const centroid = polygonCentroid(mm)
  let centered = mm.map((p) => ({ x: p.x - centroid.x, y: p.y - centroid.y }))
  const alignment = alignAngle(centered, gear)

  if (alignment.missing > 0) {
    rec.failureReasons.push('轮廓不是以齿轮中心为内部点的星形外环，无法按齿距可靠对齐')
  }

  const normalized = rotateAndTranslate(centered, { x: 0, y: 0 }, alignment.angle)
  centered = normalized
  const radii = normalized.map((p) => Math.hypot(p.x, p.y))
  const minR = Math.min(...radii)
  const maxR = Math.max(...radii)
  const deviation = computeDeviations(normalized, gear)
  const m = gear.input.module
  const r = gear.pitchR
  const boundTol = Math.max(0.5 * m, 0.02 * r)
  const rmsTol = Math.max(0.12 * m, 0.01 * r)
  const maxTol = Math.max(0.4 * m, 0.025 * r)

  if (minR < gear.dedendumR - boundTol || minR > gear.dedendumR + boundTol) {
    rec.failureReasons.push(
      `错误轮廓：齿根半径 ${minR.toFixed(3)} mm 与理论值 ${gear.dedendumR.toFixed(3)} mm 差异超过 ${boundTol.toFixed(3)} mm`
    )
  }
  if (maxR < gear.addendumR - boundTol || maxR > gear.addendumR + boundTol) {
    rec.failureReasons.push(
      `错误轮廓：齿顶半径 ${maxR.toFixed(3)} mm 与理论值 ${gear.addendumR.toFixed(3)} mm 差异超过 ${boundTol.toFixed(3)} mm`
    )
  }
  if (deviation.stats.rms > rmsTol) {
    rec.failureReasons.push(
      `错误轮廓：最佳齿距对齐后 RMS 偏差 ${deviation.stats.rms.toFixed(3)} mm 仍超过 ${rmsTol.toFixed(3)} mm`
    )
  }
  if (deviation.stats.maxAbs > maxTol) {
    rec.failureReasons.push(
      `错误轮廓：最大局部偏差 ${deviation.stats.maxAbs.toFixed(3)} mm 超过 ${maxTol.toFixed(3)} mm`
    )
  }

  if (!rec.failureReasons.length) {
    rec.normalizedPoints = normalized
    rec.transform = {
      centroidX: centroid.x,
      centroidY: centroid.y,
      angle: alignment.angle,
      unitFactorToMm: 1 / UNITS[unit.id].factor
    }
    rec.alignmentScore = {
      radialRms: alignment.radialRms,
      nearestRms: deviation.stats.rms,
      maxAbs: deviation.stats.maxAbs
    }
    rec.deviations = deviation.points
    rec.deviationStats = deviation.stats
  }

  if (rec.failureReasons.length) {
    rec.status = 'rejected'
  } else {
    rec.status = 'accepted'
  }
  return rec
}

/** 基准齿轮改变后调用：旧记录转为历史 mismatch，且即使参数改回也保持 sticky。 */
export function reconcileMeasurements(
  items: MeasuredProfile[],
  gears: Record<MeasurementGearKey, GearGeometry>
): MeasuredProfile[] {
  return items.map((item) => {
    if (item.status === 'rejected') return item
    const gear = gears[item.gearKey]
    const current = gear ? theoreticalFingerprint(gear) : null
    if (current && item.binding.theoreticalFingerprint === current && item.status === 'accepted') return item

    if (item.status === 'accepted') {
      const reason = current
        ? `基准齿轮参数或理论轮廓已改变（绑定指纹 ${item.binding.theoreticalFingerprint.slice(-10)} → 当前 ${current.slice(-10)}），旧测量仅作历史证据`
        : '找不到对应基准齿轮，旧测量仅作历史证据'
      return {
        ...item,
        status: 'mismatch',
        failureReasons: [reason],
        lastCheck: item.lastCheck ?? null
      }
    }
    return item
  })
}

export function isMeasurementUsable(item: MeasuredProfile, gear: GearGeometry): boolean {
  return item.status === 'accepted' && item.binding.theoreticalFingerprint === theoreticalFingerprint(gear)
}
