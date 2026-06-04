import type { UserFormData } from '../../types'
import { PHASE_OPTIONS, COMPETITION_OPTIONS } from '../../constants'

interface Props { data: UserFormData; onChange: (u: Partial<UserFormData>) => void }

const inputC = "w-full bg-white/[0.03] border border-white/5 px-4 py-2.5 text-white text-sm focus:outline-none focus:border-accent/50 transition-all"
const labelC = "block text-sm font-medium text-gray-300 mb-1.5"
const btnC = (sel: boolean) => `px-3 py-2 rounded-lg border text-sm transition-colors ${sel ? 'bg-accent border-accent text-white' : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'}`

function n(v: string): number { return v === '' ? 0 : +v }
function s(v: number): string { return v === 0 ? '' : String(v) }

export default function Step8Background({ data, onChange }: Props) {
  const bg = data.trainingBackground
  return (
    <div>
      <p className="text-gray-400 text-sm mb-4">📊 训练背景帮助 AI 判断是否存在训练量过快增长或过度训练风险。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div><label className={labelC}>训练年龄（年）</label><input type="number" value={s(bg.trainingAge)} onChange={e => onChange({ trainingBackground: { ...bg, trainingAge: n(e.target.value) } })} className={inputC} /></div>
        <div><label className={labelC}>近4周平均每周训练量（小时）</label><input type="number" value={s(bg.recent4WeekVolume)} onChange={e => onChange({ trainingBackground: { ...bg, recent4WeekVolume: n(e.target.value) } })} className={inputC} /></div>
        <div><label className={labelC}>每周专项训练次数</label><input type="number" value={s(bg.weeklySpecificSessions)} onChange={e => onChange({ trainingBackground: { ...bg, weeklySpecificSessions: n(e.target.value) } })} className={inputC} /></div>
        <div><label className={labelC}>每周力量训练次数</label><input type="number" value={s(bg.weeklyStrengthSessions)} onChange={e => onChange({ trainingBackground: { ...bg, weeklyStrengthSessions: n(e.target.value) } })} className={inputC} /></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <div>
          <label className={labelC}>比赛经验</label>
          <div className="flex gap-2 flex-wrap">{COMPETITION_OPTIONS.map(c => <button key={c.value} type="button" onClick={() => onChange({ trainingBackground: { ...bg, competitionExperience: c.value } })} className={btnC(bg.competitionExperience === c.value)}>{c.label}</button>)}</div>
        </div>
        <div>
          <label className={labelC}>当前训练阶段</label>
          <div className="flex gap-2 flex-wrap">{PHASE_OPTIONS.map(p => <button key={p.value} type="button" onClick={() => onChange({ trainingBackground: { ...bg, currentPhase: p.value } })} className={btnC(bg.currentPhase === p.value)}>{p.label}</button>)}</div>
        </div>
      </div>
    </div>
  )
}
