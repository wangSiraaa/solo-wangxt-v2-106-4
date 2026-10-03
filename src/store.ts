/**
 * 案例（一对齿轮的参数 + 视图设置）的持久化。
 *  - 使用 IndexedDB，纯浏览器本地，无后台；
 *  - 导出/导入为自描述 JSON，包含轮廓几何，导入的轮廓可被重新载入并用于 Clipper 求交；
 *  - JSON 带 schema 版本号，便于以后兼容。
 */
import type { LengthUnit } from './units'
import type { GearInput, Pt } from './geometry/gear'
import type { MeasuredProfile, MeasurementGearKey } from './geometry/measured'

export const SCHEMA_VERSION = 1
export const DB_NAME = 'spur-gear-lab'
export const STORE = 'cases'

export interface CaseData {
  schemaVersion: number
  id: string
  name: string
  createdAt: number
  updatedAt: number
  note: string
  gear1: GearInput & { alphaDeg: number }
  gear2: GearInput & { alphaDeg: number }
  /** 中心距（mm）；null 表示用标准中心距 */
  centerDistance: number | null
  unit: LengthUnit
  /** 导出时附带的轮廓（世界/局部 + 相位），供重新载入与核对，可选 */
  outlines?: {
    gear1: Pt[]
    gear2: Pt[]
  }
  /** 实测覆盖层历史；mismatch 是历史证据，accepted 才可用于当前案例 */
  measurements?: MeasuredProfile[]
  activeMeasurementId?: string | null
}

export function gearFingerprintInput(c: CaseData['gear1']) {
  return {
    z: c.z,
    module: c.module,
    alpha: c.alpha,
    faceWidth: c.faceWidth
  }
}

export function storedGearKey(value: unknown): value is MeasurementGearKey {
  return value === 'gear1' || value === 'gear2'
}

let dbPromise: Promise<IDBDatabase> | null = null

function openDb(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise
  dbPromise = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1)
    req.onupgradeneeded = () => {
      const db = req.result
      if (!db.objectStoreNames.contains(STORE)) {
        const store = db.createObjectStore(STORE, { keyPath: 'id' })
        store.createIndex('updatedAt', 'updatedAt')
      }
    }
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
  return dbPromise
}

function tx<T>(mode: IDBTransactionMode, fn: (store: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  return openDb().then(
    (db) =>
      new Promise<T>((resolve, reject) => {
        const t = db.transaction(STORE, mode)
        const req = fn(t.objectStore(STORE))
        req.onsuccess = () => resolve(req.result)
        req.onerror = () => reject(req.error)
      })
  )
}

export function sanitizeCaseForStorage(data: CaseData): CaseData {
  return {
    ...data,
    measurements: (data.measurements ?? []).filter((m) => m.status !== 'rejected')
  }
}

export async function saveCase(data: CaseData): Promise<void> {
  const safe = sanitizeCaseForStorage(data)
  await tx('readwrite', (s) => s.put({ ...safe, updatedAt: Date.now() }))
}

export async function deleteCase(id: string): Promise<void> {
  await tx('readwrite', (s) => s.delete(id))
}

export async function getCase(id: string): Promise<CaseData | undefined> {
  return tx<CaseData | undefined>('readonly', (s) => s.get(id))
}

export async function listCases(): Promise<CaseData[]> {
  const all = await tx<CaseData[]>('readonly', (s) => s.getAll() as IDBRequest<CaseData[]>)
  return [...all].sort((a, b) => b.updatedAt - a.updatedAt)
}

export function newCaseId(): string {
  return `case-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
}

/** 序列化为可下载的 JSON 字符串（导出的轮廓可重新载入） */
export function serializeCase(data: CaseData): string {
  return JSON.stringify(data, null, 2)
}

/** 解析并基本校验导入文件；不通过则抛错 */
export function parseCase(text: string): CaseData {
  const obj = JSON.parse(text) as CaseData
  if (!obj || obj.schemaVersion !== SCHEMA_VERSION) {
    throw new Error(`不支持的案例版本（需要 schemaVersion=${SCHEMA_VERSION}）`)
  }
  if (!obj.gear1 || !obj.gear2) throw new Error('案例缺少齿轮参数')
  for (const g of [obj.gear1, obj.gear2]) {
    if (!(g.z >= 4) || !(g.module > 0) || !(g.alphaDeg > 0)) {
      throw new Error('案例参数不合法（z≥4, m>0, α>0）')
    }
  }
  if (obj.measurements) {
    if (!Array.isArray(obj.measurements)) throw new Error('实测覆盖层历史必须为数组')
    for (const m of obj.measurements) {
      if (!m || typeof m !== 'object') throw new Error('实测记录格式不合法')
      if (!storedGearKey(m.gearKey)) throw new Error('实测记录缺少 gear1/gear2 绑定')
      if (!['accepted', 'rejected', 'mismatch'].includes(m.status)) throw new Error('实测记录状态不合法')
      if (m.status === 'rejected') throw new Error('被拒绝的测量不得写入案例；缺少失败原因或存在数据库残留')
      if (!m.binding || typeof m.binding.theoreticalFingerprint !== 'string') {
        throw new Error('实测记录缺少理论轮廓指纹绑定')
      }
      if (!m.raw || !Array.isArray(m.raw.points) || typeof m.raw.unit !== 'string') {
        throw new Error('实测记录缺少可复核的原始坐标或单位')
      }
      if (m.raw.points.some((p: Pt) => !p || !Number.isFinite(p.x) || !Number.isFinite(p.y))) {
        throw new Error('实测记录包含非有限坐标')
      }
      if (!m.scopeNotice) throw new Error('实测记录缺少非认证适用范围声明')
    }
  }
  return obj
}

/** 触发浏览器下载 */
export function downloadJson(data: CaseData) {
  const blob = new Blob([serializeCase(data)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  const safe = (data.name || 'gear-case').replace(/[^\w一-龥-]+/g, '_')
  a.download = `${safe}.json`
  a.click()
  URL.revokeObjectURL(url)
}
