import type { UserFormData } from '../../types'

interface Props { data: UserFormData; onChange: (u: Partial<UserFormData>) => void }

const inputC = "w-full bg-white/[0.03] border border-white/5 px-4 py-2.5 text-white text-sm focus:outline-none focus:border-accent/50 transition-all"
const labelC = "block text-sm font-medium text-gray-300 mb-1.5"

const FIELDS: { key: keyof UserFormData['powerTests']; label: string; unit: string; desc: string }[] = [
  { key: 'standingLongJump', label: '立定跳远', unit: '米', desc: '评估下肢水平爆发力' },
  { key: 'standingTripleJump', label: '立定三级跳', unit: '米', desc: '评估连续爆发力和协调性' },
  { key: 'verticalReach', label: '原地摸高', unit: 'cm', desc: '站立时单手摸到的最高点' },
  { key: 'cmj', label: '反向纵跳 (CMJ)', unit: 'cm', desc: '下蹲后全力跳起的高度，评估弹性能力' },
]

function n(v: string): number | undefined { return v === '' ? undefined : +v }
function s(v: number | undefined): string { return v === undefined ? '' : String(v) }

export default function Step4Power({ data, onChange }: Props) {
  const pt = data.powerTests
  return (
    <div>
      <p className="text-gray-400 text-sm mb-4">💥 评估下肢爆发力和弹性能力。选填项，填入已知数据即可。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {FIELDS.map(f => (
          <div key={f.key}>
            <label className={labelC}>{f.label}（{f.unit}）</label>
            <input type="number" step="0.01" value={s(pt[f.key])} onChange={e => onChange({ powerTests: { ...pt, [f.key]: n(e.target.value) } })} className={inputC} placeholder="选填" />
            <p className="text-gray-500 text-xs mt-0.5">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
