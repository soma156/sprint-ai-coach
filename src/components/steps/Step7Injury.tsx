import { useState } from 'react'
import type { UserFormData, InjuryRecord } from '../../types'
import { INJURY_BODY_PARTS, SEVERITY_OPTIONS } from '../../constants'

interface Props { data: UserFormData; onChange: (u: Partial<UserFormData>) => void }

const inputC = "w-full bg-white/[0.03] border border-white/5 px-4 py-2.5 text-white text-sm focus:outline-none focus:border-accent/50 transition-all"
const labelC = "block text-sm font-medium text-gray-300 mb-1"
const btnC = "px-3 py-1.5 rounded-lg border text-xs transition-colors bg-white/10 border-white/20 text-gray-300 hover:bg-white/20"

export default function Step7Injury({ data, onChange }: Props) {
  const [bodyPart, setBodyPart] = useState('')
  const [occurredDate, setOccurredDate] = useState('')
  const [severity, setSeverity] = useState<InjuryRecord['severity']>('mild')
  const [isRecurring, setIsRecurring] = useState(false)
  const [fullyRecovered, setFullyRecovered] = useState(true)
  const [notes, setNotes] = useState('')

  function addRecord() {
    if (!bodyPart) return
    const record: InjuryRecord = { id: crypto.randomUUID(), bodyPart, occurredDate, severity, isRecurring, fullyRecovered, notes }
    onChange({ injuryRecords: [...data.injuryRecords, record] })
    setBodyPart(''); setOccurredDate(''); setSeverity('mild'); setIsRecurring(false); setFullyRecovered(true); setNotes('')
  }

  function removeRecord(id: string) {
    onChange({ injuryRecords: data.injuryRecords.filter(r => r.id !== id) })
  }

  return (
    <div>
      <p className="text-gray-400 text-sm mb-4">🏥 详细记录每处伤病，AI 会针对性地调整训练计划。无伤病可跳过。</p>

      {/* 添加伤病 */}
      <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-3 mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className={labelC}>受伤部位</label>
            <select value={bodyPart} onChange={e => setBodyPart(e.target.value)} className={inputC}>
              <option value="">选择部位</option>
              {INJURY_BODY_PARTS.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
          <div>
            <label className={labelC}>受伤时间</label>
            <input type="month" value={occurredDate} onChange={e => setOccurredDate(e.target.value)} className={inputC} />
          </div>
          <div>
            <label className={labelC}>严重程度</label>
            <div className="flex gap-2">{SEVERITY_OPTIONS.map(s => <button key={s.value} type="button" onClick={() => setSeverity(s.value)} className={`${btnC} ${severity === s.value ? '!bg-accent !border-accent !text-white' : ''}`}>{s.label}</button>)}</div>
          </div>
        </div>
        <div className="flex gap-4 flex-wrap">
          <label className="flex items-center gap-2 text-sm text-gray-300"><input type="checkbox" checked={isRecurring} onChange={e => setIsRecurring(e.target.checked)} className="accent-accent" /> 曾复发</label>
          <label className="flex items-center gap-2 text-sm text-gray-300"><input type="checkbox" checked={fullyRecovered} onChange={e => setFullyRecovered(e.target.checked)} className="accent-accent" /> 已完全恢复</label>
        </div>
        <div className="flex gap-3">
          <input value={notes} onChange={e => setNotes(e.target.value)} className={inputC} placeholder="备注（可选）" />
          <button type="button" onClick={addRecord} className="px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium shrink-0">+ 添加</button>
        </div>
      </div>

      {/* 已添加的伤病列表 */}
      {data.injuryRecords.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm text-gray-400">已记录的伤病：</p>
          {data.injuryRecords.map(r => (
            <div key={r.id} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm">
              <span className="text-white">{r.bodyPart}</span>
              <span className="text-gray-400 text-xs">{r.occurredDate} · {SEVERITY_OPTIONS.find(s => s.value === r.severity)?.label}{r.isRecurring ? ' · 复发' : ''}{r.fullyRecovered ? ' · ✅已恢复' : ' · ⚠️未恢复'}</span>
              <button onClick={() => removeRecord(r.id)} className="text-red-400 text-xs hover:text-red-300">删除</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
