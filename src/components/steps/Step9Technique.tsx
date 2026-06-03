import type { UserFormData, SelfRating } from '../../types'
import { RATING_OPTIONS } from '../../constants'

interface Props { data: UserFormData; onChange: (u: Partial<UserFormData>) => void }

const labelC = "block text-sm font-medium text-gray-300 mb-1.5"
const btnC = (sel: boolean) => `w-10 h-10 rounded-lg border text-xs transition-colors ${sel ? 'bg-accent border-accent text-white' : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'}`

const FIELDS: { key: keyof UserFormData['technicalSkills']; label: string; desc: string }[] = [
  { key: 'startAbility', label: '起跑能力', desc: '反应速度和起跑前几步的爆发力' },
  { key: 'accelerationAbility', label: '加速能力', desc: '起跑后过渡到最高速度的能力' },
  { key: 'maxSpeedAbility', label: '最高速度能力', desc: '达到并维持最高速度的能力' },
  { key: 'lateRaceAbility', label: '后程能力', desc: '最后阶段的保持速度能力' },
]

export default function Step9Technique({ data, onChange }: Props) {
  const t = data.technicalSkills
  function update(k: keyof typeof t, v: SelfRating | boolean) { onChange({ technicalSkills: { ...t, [k]: v } }) }
  return (
    <div>
      <p className="text-gray-400 text-sm mb-4">🔧 对自己各项能力进行自评（1=很差，5=优秀），AI 据此判断你的运动员类型。</p>
      {FIELDS.map(f => (
        <div key={f.key as string} className="mb-4">
          <label className={labelC}>{f.label}</label>
          <div className="flex gap-2">{RATING_OPTIONS.map(r => <button key={r.value} type="button" onClick={() => update(f.key as keyof typeof t, r.value as SelfRating)} className={btnC(t[f.key as keyof typeof t] === r.value)}>{r.value}</button>)}</div>
          <p className="text-gray-500 text-xs mt-1">{f.desc}</p>
        </div>
      ))}
      <label className="flex items-center gap-2 text-sm text-gray-300 mt-3">
        <input type="checkbox" checked={t.videoAnalysis} onChange={e => update('videoAnalysis', e.target.checked)} className="accent-accent" /> 希望未来上传跑步视频进行动作分析
      </label>
    </div>
  )
}
