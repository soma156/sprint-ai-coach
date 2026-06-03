import type { UserFormData } from '../../types'

interface Props { data: UserFormData; onChange: (u: Partial<UserFormData>) => void }

const inputC = "w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-accent transition-colors"
const labelC = "block text-sm font-medium text-gray-300 mb-1.5"

const FIELDS: { key: keyof UserFormData['strengthTests']; label: string; desc: string }[] = [
  { key: 'squat1RM', label: '深蹲 1RM (kg)', desc: '全幅度深蹲最大重量，评估下肢基础力量' },
  { key: 'halfSquat1RM', label: '半蹲 1RM (kg)', desc: '半蹲最大重量，评估短跑专项力量' },
  { key: 'deadlift1RM', label: '硬拉 1RM (kg)', desc: '评估后链力量（臀部和腘绳肌）' },
  { key: 'benchPress1RM', label: '卧推 1RM (kg)', desc: '评估上肢推的力量' },
]

function n(v: string): number | undefined { return v === '' ? undefined : +v }
function s(v: number | undefined): string { return v === undefined ? '' : String(v) }

export default function Step5Strength({ data, onChange }: Props) {
  const st = data.strengthTests
  return (
    <div>
      <p className="text-gray-400 text-sm mb-4">🏋️ 1RM = 只能完成一次的最大重量。AI 会分析相对力量水平。选填。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {FIELDS.map(f => (
          <div key={f.key}>
            <label className={labelC}>{f.label}</label>
            <input type="number" step="0.5" value={s(st[f.key])} onChange={e => onChange({ strengthTests: { ...st, [f.key]: n(e.target.value) } })} className={inputC} placeholder="选填" />
            <p className="text-gray-500 text-xs mt-0.5">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
