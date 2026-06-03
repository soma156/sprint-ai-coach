import type { UserFormData } from '../../types'
import { MOBILITY_OPTIONS, PELVIC_OPTIONS } from '../../constants'

interface Props { data: UserFormData; onChange: (u: Partial<UserFormData>) => void }

const labelC = "block text-sm font-medium text-gray-300 mb-1.5"
const btnC = (sel: boolean) => `px-3 py-2 rounded-lg border text-sm transition-colors ${sel ? 'bg-accent border-accent text-white' : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'}`

const FIELDS: { key: keyof UserFormData['flexibility']; label: string; desc: string }[] = [
  { key: 'ankleMobility', label: '踝关节活动度', desc: '膝盖触墙测试：脚尖距墙一拳，膝盖能否触墙？' },
  { key: 'hipMobility', label: '髋关节活动度', desc: '髋关节屈伸和旋转的范围是否足够？' },
  { key: 'squatAbility', label: '深蹲能力', desc: '能否完成标准的全幅度深蹲？' },
  { key: 'sitAndReach', label: '坐位体前屈', desc: '坐姿前屈手指能超出脚尖多少？' },
  { key: 'hamstringFlexibility', label: '腘绳肌柔韧性', desc: '仰卧直腿抬高的角度范围？' },
]

export default function Step6Flexibility({ data, onChange }: Props) {
  const f = data.flexibility
  function update<K extends keyof typeof f>(k: K, v: typeof f[K]) { onChange({ flexibility: { ...f, [k]: v } }) }
  return (
    <div>
      <p className="text-gray-400 text-sm mb-4">🤸 活动度限制会影响步幅和技术动作。AI 会根据结果调整训练内容。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {FIELDS.map(fi => (
          <div key={fi.key}>
            <label className={labelC}>{fi.label}</label>
            <div className="flex gap-2 flex-wrap mt-1">
              {MOBILITY_OPTIONS.map(m => (
                <button key={m.value} type="button" onClick={() => update(fi.key as keyof typeof f, m.value)}
                  className={btnC(f[fi.key as keyof typeof f] === m.value)}>{m.label}</button>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-1">{fi.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <label className={labelC}>骨盆姿态</label>
        <div className="flex gap-2">{PELVIC_OPTIONS.map(p => <button key={p.value} type="button" onClick={() => update('pelvicPosture', p.value)} className={btnC(f.pelvicPosture === p.value)}>{p.label}</button>)}</div>
        <p className="text-gray-500 text-xs mt-1">骨盆前倾或后倾会影响发力效率和伤病风险</p>
      </div>
    </div>
  )
}
