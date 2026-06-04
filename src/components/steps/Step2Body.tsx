import type { UserFormData } from '../../types'

interface Props { data: UserFormData; onChange: (u: Partial<UserFormData>) => void }

const inputC = "w-full bg-white/[0.03] border border-white/5 px-4 py-2.5 text-white text-sm focus:outline-none focus:border-accent/50 transition-all"
const labelC = "block text-sm font-medium text-gray-300 mb-1.5"

const FIELDS: { key: keyof UserFormData['bodyMeasurements']; label: string; unit: string; desc: string }[] = [
  { key: 'armSpan', label: '臂展', unit: 'cm', desc: '双臂平伸，指尖到指尖的距离' },
  { key: 'sittingHeight', label: '坐高', unit: 'cm', desc: '坐姿时臀部到头顶的高度' },
  { key: 'legLength', label: '腿长', unit: 'cm', desc: '大转子（髋部外侧骨突）到地面的距离' },
  { key: 'thighLength', label: '大腿长度', unit: 'cm', desc: '大转子到膝关节外侧间隙的距离' },
  { key: 'calfLength', label: '小腿长度', unit: 'cm', desc: '膝关节外侧间隙到外踝的距离' },
  { key: 'footLength', label: '足长', unit: 'cm', desc: '脚跟到最长脚趾尖的距离' },
]

function n(v: string): number { return v === '' ? 0 : +v }
function s(v: number): string { return v === 0 ? '' : String(v) }

export default function Step2Body({ data, onChange }: Props) {
  const bm = data.bodyMeasurements
  return (
    <div>
      <p className="text-gray-400 text-sm mb-4">📐 这些数据帮助 AI 判断你是步频型还是步幅型运动员。不确定可以留空。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {FIELDS.map(f => (
          <div key={f.key}>
            <label className={labelC}>{f.label} ({f.unit})</label>
            <input type="number" step="0.1" value={s(bm[f.key])} onChange={e => onChange({ bodyMeasurements: { ...bm, [f.key]: n(e.target.value) } })} className={inputC} placeholder={f.desc} />
            <p className="text-gray-500 text-xs mt-0.5">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
