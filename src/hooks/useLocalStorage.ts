import { useState, useEffect } from 'react'

/**
 * 将状态自动同步到 localStorage 的自定义 Hook
 * @param key — localStorage 的键名
 * @param initialValue — 默认初始值
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  // 初始化：从 localStorage 读取，没有则用默认值
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : initialValue
    } catch {
      return initialValue
    }
  })

  // 当值变化时，自动写入 localStorage
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue))
    } catch {
      // 存储满了或无法写入时静默失败
    }
  }, [key, storedValue])

  return [storedValue, setStoredValue] as const
}
