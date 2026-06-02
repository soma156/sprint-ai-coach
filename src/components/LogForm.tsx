import { useState } from 'react'
import type { DayPlan } from '../types'

interface Props {
  days: DayPlan[]
  onSubmit: (data: {
    date: string
    dayOfWeek: string
    completed: boolean
    completionRate: number
    notes: string
  }) => void
  onCancel: () => void
}

export default function LogForm({ days, onSubmit, onCancel }: Props) {
  const today = new Date().toISOString().slice(0, 10)
  const [date, setDate] = useState(today)
  const [dayOfWeek, setDayOfWeek] = useState('')
  const [completed, setCompleted] = useState(true)
  const [completionRate, setCompletionRate] = useState(100)
  const [notes, setNotes] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!date || !dayOfWeek) return
    onSubmit({ date, dayOfWeek, completed, completionRate, notes })
    // 重置表单
    setDate(today)
    setDayOfWeek('')
    setCompleted(true)
    setCompletionRate(100)
    setNotes('')
  }

  const inputClass = "w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"

  return (
    <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-4">
      <h3 className="text-lg font-semibold text-white">📝 记录训练</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* 日期 */}
        <div>
          <label className="block text-sm text-gray-400 mb-1">日期</label>
          <input type="date" value={date}
            onChange={(e) => setDate(e.target.value)}
            className={inputClass} required />
        </div>

        {/* 对应训练日 */}
        <div>
          <label className="block text-sm text-gray-400 mb-1">训练日</label>
          <select value={dayOfWeek}
            onChange={(e) => setDayOfWeek(e.target.value)}
            className={inputClass} required>
            <option value="">请选择</option>
            {days.map((d) => (
              <option key={d.dayOfWeek} value={d.dayOfWeek}>
                {d.dayOfWeek}
              </option>
            ))}
          </select>
        </div>

        {/* 完成状态 */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">完成状态</label>
          <div className="flex gap-2">
            <button type="button"
              onClick={() => { setCompleted(true); setCompletionRate(100) }}
              className={`flex-1 py-2 rounded-lg border text-sm font-medium transition-colors
                ${completed ? 'bg-green-500/20 border-green-500 text-green-400' : 'bg-white/10 border-white/20 text-gray-400'}`}>
              ✅ 已完成
            </button>
            <button type="button"
              onClick={() => { setCompleted(false); setCompletionRate(0) }}
              className={`flex-1 py-2 rounded-lg border text-sm font-medium transition-colors
                ${!completed ? 'bg-red-500/20 border-red-500 text-red-400' : 'bg-white/10 border-white/20 text-gray-400'}`}>
              ❌ 未完成
            </button>
          </div>
        </div>

        {/* 完成度 */}
        <div>
          <label className="block text-sm text-gray-400 mb-1">
            完成度：<span className="text-accent font-bold">{completionRate}%</span>
          </label>
          <input type="range" min={0} max={100} step={10} value={completionRate}
            onChange={(e) => {
              const val = Number(e.target.value)
              setCompletionRate(val)
              setCompleted(val > 0)
            }}
            className="w-full accent-accent" />
        </div>
      </div>

      {/* 备注 */}
      <div>
        <label className="block text-sm text-gray-400 mb-1">备注（感受、问题等）</label>
        <textarea value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className={inputClass} rows={3}
          placeholder="例如：今天状态不错，起跑反应有进步..." />
      </div>

      {/* 按钮 */}
      <div className="flex gap-3">
        <button type="submit"
          className="flex-1 py-2.5 bg-accent text-white rounded-lg font-medium hover:bg-accent-dark transition-colors">
          💾 保存记录
        </button>
        <button type="button" onClick={onCancel}
          className="px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-gray-400 hover:text-white transition-colors">
          取消
        </button>
      </div>
    </form>
  )
}
