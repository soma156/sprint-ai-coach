import type { UserFormData } from '../../types'
import { FATIGUE_OPTIONS, STRESS_OPTIONS, RATING_OPTIONS, RECOVERY_FEEL_OPTIONS, EQUIPMENT_ITEMS, GOAL_OPTIONS } from '../../constants'

interface Props { data: UserFormData; onChange: (u: Partial<UserFormData>) => void }

const inputC = "w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-accent transition-colors"
const labelC = "block text-sm font-medium text-gray-300 mb-1.5"
const btnC = (sel: boolean) => `px-3 py-2 rounded-lg border text-sm transition-colors ${sel ? 'bg-accent border-accent text-white' : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'}`

function n(v: string): number { return v === '' ? 0 : +v }
function s(v: number): string { return v === 0 ? '' : String(v) }

export default function Step10Recovery({ data, onChange }: Props) {
  const r = data.recoveryStatus
  const c = data.trainingConditions
  function updateR<K extends keyof typeof r>(k: K, v: typeof r[K]) { onChange({ recoveryStatus: { ...r, [k]: v } }) }
  function updateC<K extends keyof typeof c>(k: K, v: typeof c[K]) { onChange({ trainingConditions: { ...c, [k]: v } }) }
  function toggleGoal(g: typeof data.goals[number]) {
    onChange({ goals: data.goals.includes(g) ? data.goals.filter(x => x !== g) : [...data.goals, g] })
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-white font-semibold mb-3">😴 恢复能力评估</h3>
        <p className="text-gray-400 text-sm mb-3">AI 根据恢复能力动态调整训练负荷。</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><label className={labelC}>平均睡眠时间（小时）</label><input type="number" step="0.5" value={s(r.avgSleepHours)} onChange={e => updateR('avgSleepHours', n(e.target.value))} className={inputC} /></div>
          <div><label className={labelC}>睡眠质量</label><div className="flex gap-1">{RATING_OPTIONS.map(o => <button key={o.value} type="button" onClick={() => updateR('sleepQuality', o.value as typeof r.sleepQuality)} className={`w-9 h-9 rounded-lg border text-xs ${btnC(r.sleepQuality === o.value)}`}>{o.value}</button>)}</div></div>
          <div><label className={labelC}>静息心率（次/分钟）</label><input type="number" value={s(r.restingHeartRate)} onChange={e => updateR('restingHeartRate', n(e.target.value))} className={inputC} /></div>
          <div><label className={labelC}>主观疲劳</label><div className="flex gap-1">{FATIGUE_OPTIONS.map(o => <button key={o.value} type="button" onClick={() => updateR('subjectiveFatigue', o.value as typeof r.subjectiveFatigue)} className={btnC(r.subjectiveFatigue === o.value)} style={{fontSize:'11px'}}>{o.value}</button>)}</div></div>
          <div><label className={labelC}>心理压力</label><div className="flex gap-1">{STRESS_OPTIONS.map(o => <button key={o.value} type="button" onClick={() => updateR('stressLevel', o.value as typeof r.stressLevel)} className={btnC(r.stressLevel === o.value)} style={{fontSize:'11px'}}>{o.value}</button>)}</div></div>
          <div><label className={labelC}>恢复感受</label><div className="flex gap-2 flex-wrap">{RECOVERY_FEEL_OPTIONS.map(o => <button key={o.value} type="button" onClick={() => updateR('recoveryFeeling', o.value)} className={btnC(r.recoveryFeeling === o.value)}>{o.label}</button>)}</div></div>
        </div>
      </div>
      <div>
        <h3 className="text-white font-semibold mb-3">🏟️ 训练条件</h3>
        <p className="text-gray-400 text-sm mb-3">训练计划将基于你实际拥有的器材来制定。</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {EQUIPMENT_ITEMS.map(item => (
            <label key={item.key} className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer bg-white/5 rounded-lg px-3 py-2 hover:bg-white/10">
              <input type="checkbox" checked={!!c[item.key as keyof typeof c]} onChange={e => updateC(item.key as keyof typeof c, e.target.checked)} className="accent-accent" /> {item.label}
            </label>
          ))}
        </div>
        <div className="mt-3"><input value={c.hasOther} onChange={e => updateC('hasOther', e.target.value)} className={inputC} placeholder="其他器材（用逗号分隔）" /></div>
      </div>
      <div>
        <h3 className="text-white font-semibold mb-3">🎯 训练目标（多选）</h3>
        <p className="text-gray-400 text-sm mb-3">AI 根据目标动态调整训练重点比例。</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {GOAL_OPTIONS.map(g => (
            <button key={g.value} type="button" onClick={() => toggleGoal(g.value)}
              className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border text-sm text-left transition-colors ${data.goals.includes(g.value) ? 'bg-accent border-accent text-white' : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'}`}>
              <span>{g.icon}</span> {g.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
