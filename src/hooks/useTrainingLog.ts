import { useCallback } from 'react'
import type { TrainingLogEntry } from '../types'
import { useLocalStorage } from './useLocalStorage'

const STORAGE_KEY = 'sprint-training-logs'

export function useTrainingLog() {
  const [logs, setLogs] = useLocalStorage<TrainingLogEntry[]>(STORAGE_KEY, [])

  // 添加日志
  const addLog = useCallback((entry: Omit<TrainingLogEntry, 'id' | 'createdAt'>) => {
    const newEntry: TrainingLogEntry = {
      ...entry,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    }
    setLogs((prev) => [newEntry, ...prev])
  }, [setLogs])

  // 更新日志
  const updateLog = useCallback((id: string, updates: Partial<TrainingLogEntry>) => {
    setLogs((prev) =>
      prev.map((log) => (log.id === id ? { ...log, ...updates } : log))
    )
  }, [setLogs])

  // 删除日志
  const deleteLog = useCallback((id: string) => {
    setLogs((prev) => prev.filter((log) => log.id !== id))
  }, [setLogs])

  // 按日期查找
  const getLogByDate = useCallback((date: string) => {
    return logs.find((log) => log.date === date)
  }, [logs])

  return { logs, addLog, updateLog, deleteLog, getLogByDate }
}
