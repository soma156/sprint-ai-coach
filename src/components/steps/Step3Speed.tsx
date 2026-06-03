import type { UserFormData } from '../../types'

interface Props { data: UserFormData; onChange: (u: Partial<UserFormData>) => void }

const inputC = "w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-accent transition-colors"
const labelC = "block text-sm font-medium text-gray-300 mb-1.5"

const FIELDS: { key: keyof UserFormData['speedTests']; label: string; analyze: string }[] = [
  { key: 'time30m', label: '30米成绩', analyze: '评估起跑能力' },
  { key: 'time60m', label: '60米成绩', analyze: '评估加速能力' },
  { key: 'time100m', label: '100米成绩', analyze: '评估最高速度能力' },
  { key: 'time150m', label: '150米成绩', analyze: '评估速度保持能力' },
  { key: 'time200m', label: '200米成绩', analyze: '评估速度耐力' },
]

function n(v: string): number | undefined { return v === '' ? undefined : +v }
function s(v: number | undefined): string { return v === undefined ? '' : String(v) }

export default function Step3Speed({ data, onChange }: Props) {
  const st = data.speedTests
  return (
    <div>
      <p className="text-gray-400 text-sm mb-4">🏃 填入你已知的成绩，AI 会分析各阶段能力。留空表示跳过该项。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {FIELDS.map(f => (
          <div key={f.key}>
            <label className={labelC}>{f.label}（秒）</label>
            <input type="number" step="0.01" value={s(st[f.key])} onChange={e => onChange({ speedTests: { ...st, [f.key]: n(e.target.value) } })} className={inputC} placeholder="选填" />
            <p className="text-gray-500 text-xs mt-0.5">🎯 {f.analyze}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
