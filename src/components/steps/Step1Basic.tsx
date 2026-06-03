import type { UserFormData } from '../../types'
import { GENDER_OPTIONS, EVENT_OPTIONS, EXPERIENCE_OPTIONS, STRENGTH_OPTIONS, INJURY_OPTIONS, TRAINING_DAYS_OPTIONS } from '../../constants'
import type { InjuryType } from '../../types'

interface Props { data: UserFormData; onChange: (u: Partial<UserFormData>) => void }

const inputC = "w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-accent transition-colors"
const labelC = "block text-sm font-medium text-gray-300 mb-1.5"
const btnC = (sel: boolean) => `px-3 py-2 rounded-lg border text-sm font-medium transition-colors ${sel ? 'bg-accent border-accent text-white' : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'}`

function numVal(v: string): number { return v === '' ? 0 : +v }
function showVal(n: number): string { return n === 0 ? '' : String(n) }

export default function Step1Basic({ data, onChange }: Props) {
  function toggleInjury(inj: InjuryType) {
    if (inj === 'none') { onChange({ injuries: ['none'] }); return }
    const without = data.injuries.filter(i => i !== 'none')
    onChange({ injuries: without.includes(inj) ? without.filter(i => i !== inj) : [...without, inj] })
    if (data.injuries.includes(inj) && without.filter(i => i !== inj).length === 0) onChange({ injuries: ['none'] })
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div><label className={labelC}>年龄</label><input type="number" value={showVal(data.age)} onChange={e => onChange({ age: numVal(e.target.value) })} className={inputC} /></div>
        <div><label className={labelC}>性别</label><div className="flex gap-3">{GENDER_OPTIONS.map(g => <button key={g.value} type="button" onClick={() => onChange({ gender: g.value })} className={btnC(data.gender === g.value)}>{g.label}</button>)}</div></div>
        <div><label className={labelC}>身高 (cm)</label><input type="number" value={showVal(data.height)} onChange={e => onChange({ height: numVal(e.target.value) })} className={inputC} /></div>
        <div><label className={labelC}>体重 (kg)</label><input type="number" value={showVal(data.weight)} onChange={e => onChange({ weight: numVal(e.target.value) })} className={inputC} /></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div><label className={labelC}>项目</label><div className="flex gap-2 flex-wrap">{EVENT_OPTIONS.map(ev => <button key={ev.value} type="button" onClick={() => onChange({ event: ev.value })} className={btnC(data.event === ev.value)}>{ev.label}</button>)}</div></div>
        <div><label className={labelC}>训练年限</label><select value={data.experience} onChange={e => onChange({ experience: e.target.value as UserFormData['experience'] })} className={inputC}>{EXPERIENCE_OPTIONS.map(ex => <option key={ex.value} value={ex.value}>{ex.label}</option>)}</select></div>
        <div><label className={labelC}>当前最好成绩 (秒)</label><input type="number" step="0.01" value={showVal(data.currentBest)} onChange={e => onChange({ currentBest: numVal(e.target.value) })} className={inputC} /></div>
        <div><label className={labelC}>目标成绩 (秒)</label><input type="number" step="0.01" value={showVal(data.targetTime)} onChange={e => onChange({ targetTime: numVal(e.target.value) })} className={inputC} /></div>
        <div><label className={labelC}>计划周期 (周)</label><input type="number" value={showVal(data.planWeeks)} onChange={e => onChange({ planWeeks: numVal(e.target.value) })} className={inputC} /></div>
        <div><label className={labelC}>每周训练天数</label><div className="flex gap-2">{TRAINING_DAYS_OPTIONS.map(d => <button key={d} type="button" onClick={() => onChange({ trainingDaysPerWeek: d })} className={`w-10 h-10 rounded-lg border text-sm ${btnC(data.trainingDaysPerWeek === d)}`}>{d}</button>)}</div></div>
        <div className="sm:col-span-2"><label className={labelC}>力量条件</label><div className="flex gap-3">{STRENGTH_OPTIONS.map(s => <button key={s.value} type="button" onClick={() => onChange({ strengthCondition: s.value })} className={`flex-1 py-2.5 rounded-lg border text-sm ${btnC(data.strengthCondition === s.value)}`}>{s.label}</button>)}</div></div>
      </div>
      <div>
        <label className={labelC}>🏥 伤病情况（可多选）</label>
        <div className="flex gap-2 flex-wrap">{INJURY_OPTIONS.map(inj => <button key={inj.value} type="button" onClick={() => toggleInjury(inj.value)} className={btnC(data.injuries.includes(inj.value))}>{inj.label}</button>)}</div>
      </div>
    </div>
  )
}
