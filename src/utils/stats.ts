import type { TrainingLogEntry } from '../types'

/** 每日训练统计 */
export interface DailyStats {
  dayOfWeek: string
  completed: number
  incomplete: number
  avgCompletion: number
}

/** 总统计 */
export interface TotalStats {
  totalLogs: number
  completedCount: number
  incompleteCount: number
  completionRate: number
  avgCompletionRate: number
  totalNotes: number
}

/** 按训练日分组统计 */
export function computeDailyStats(logs: TrainingLogEntry[]): DailyStats[] {
  const dayOrder = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  const map = new Map<string, { completed: number; incomplete: number; totalRate: number; count: number }>()

  logs.forEach((log) => {
    const entry = map.get(log.dayOfWeek) || { completed: 0, incomplete: 0, totalRate: 0, count: 0 }
    if (log.completed) {
      entry.completed++
    } else {
      entry.incomplete++
    }
    entry.totalRate += log.completionRate
    entry.count++
    map.set(log.dayOfWeek, entry)
  })

  return dayOrder.map((day) => {
    const entry = map.get(day)
    return {
      dayOfWeek: day,
      completed: entry?.completed || 0,
      incomplete: entry?.incomplete || 0,
      avgCompletion: entry && entry.count > 0 ? Math.round(entry.totalRate / entry.count) : 0,
    }
  })
}

/** 计算总体统计 */
export function computeTotalStats(logs: TrainingLogEntry[]): TotalStats {
  const completedCount = logs.filter((l) => l.completed).length
  const totalRate = logs.reduce((sum, l) => sum + l.completionRate, 0)

  return {
    totalLogs: logs.length,
    completedCount,
    incompleteCount: logs.length - completedCount,
    completionRate: logs.length > 0 ? Math.round((completedCount / logs.length) * 100) : 0,
    avgCompletionRate: logs.length > 0 ? Math.round(totalRate / logs.length) : 0,
    totalNotes: logs.filter((l) => l.notes.trim()).length,
  }
}

/** 按周分组统计 */
export function computeWeeklyStats(logs: TrainingLogEntry[]): { week: string; completed: number; total: number }[] {
  const map = new Map<string, { completed: number; total: number }>()

  logs.forEach((log) => {
    const date = new Date(log.date)
    // 计算该日期所在周的周一
    const day = date.getDay()
    const monday = new Date(date)
    monday.setDate(date.getDate() - (day === 0 ? 6 : day - 1))
    const weekKey = monday.toISOString().slice(0, 10)

    const entry = map.get(weekKey) || { completed: 0, total: 0 }
    entry.total++
    if (log.completed) entry.completed++
    map.set(weekKey, entry)
  })

  return Array.from(map.entries())
    .map(([week, data]) => ({ week, ...data }))
    .sort((a, b) => a.week.localeCompare(b.week))
}
