import { useState, useMemo } from 'react'
import { scienceTopics, CATEGORY_TABS } from '../data/literature'

export default function LitPage() {
  const [cat, setCat] = useState('全部')
  const [expanded, setExpanded] = useState<string | null>(null)

  const filtered = useMemo(() => {
    return scienceTopics.filter(t => cat === '全部' || t.category === cat)
  }, [cat])

  return (
    <div className="max-w-4xl mx-auto py-4 space-y-6">
      <h1 className="text-2xl font-bold">🔬 运动科学文献</h1>
      <p className="text-gray-400 text-sm">短跑相关运动科学研究摘要 + 学术数据库搜索入口</p>

      {/* 分类筛选 */}
      <div className="flex gap-1 flex-wrap">
        {CATEGORY_TABS.map(c => (
          <button key={c.key} onClick={() => setCat(c.key)}
            className={`px-3 py-1.5 text-xs tracking-wider transition-colors ${cat === c.key ? 'bg-accent/20 text-accent-light border border-accent/30' : 'bg-white/[0.02] border border-white/5 text-gray-500 hover:border-white/10'}`}>
            {c.icon} {c.label}
          </button>
        ))}
      </div>

      <p className="text-xs text-gray-600">{filtered.length} 篇</p>

      <div className="space-y-4">
        {filtered.map(t => {
          const open = expanded === t.id
          return (
            <div key={t.id}
              onClick={() => setExpanded(open ? null : t.id)}
              className="bg-white/[0.02] border border-white/5 hover:border-white/10 cursor-pointer transition-colors p-5">
              <div className="flex justify-between items-start gap-3">
                <div>
                  <h3 className="text-white font-semibold text-sm">{t.title}</h3>
                  <span className="text-xs text-gray-600 mt-1">{t.category}</span>
                </div>
                <span className="text-xs text-gray-500">{open ? '▲' : '▼'}</span>
              </div>

              {open && (
                <div className="mt-4 pt-4 border-t border-white/5 space-y-4">
                  <div>
                    <h4 className="text-xs tracking-wider text-gray-500 mb-2">📖 摘要</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{t.summary}</p>
                  </div>

                  <div>
                    <h4 className="text-xs tracking-wider text-gray-500 mb-2">🔑 关键发现</h4>
                    <ul className="space-y-1">
                      {t.keyFindings.map((f,i) => (
                        <li key={i} className="text-gray-400 text-sm flex gap-2">
                          <span className="text-accent">•</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                    <h4 className="text-xs tracking-wider text-accent-light mb-2">💡 实践应用</h4>
                    <p className="text-gray-300 text-sm">{t.practicalApplication}</p>
                  </div>

                  {t.references.length > 0 && (
                    <div>
                      <h4 className="text-xs tracking-wider text-gray-500 mb-2">📚 参考文献</h4>
                      {t.references.map((r,i) => (
                        <p key={i} className="text-gray-500 text-xs italic">{r}</p>
                      ))}
                    </div>
                  )}

                  <div>
                    <h4 className="text-xs tracking-wider text-gray-500 mb-2">🔍 学术搜索</h4>
                    <div className="flex flex-wrap gap-2">
                      {t.searchLinks.map((s,i) => (
                        <a key={i} href={s.url} target="_blank" rel="noopener noreferrer"
                          className="text-xs bg-white/[0.02] border border-white/5 px-3 py-1.5 text-gray-400 hover:text-accent-light no-underline transition-colors">
                          {s.label}
                        </a>
                      ))}
                      <a href={`https://www.semanticscholar.org/search?q=${encodeURIComponent(t.title)}`} target="_blank" rel="noopener noreferrer"
                        className="text-xs bg-white/[0.02] border border-white/5 px-3 py-1.5 text-green-400/70 hover:text-green-400 no-underline transition-colors">
                        Semantic Scholar: {t.title}
                      </a>
                      <a href={`https://sci-hub.ru/${encodeURIComponent(t.title)}`} target="_blank" rel="noopener noreferrer"
                        className="text-xs bg-white/[0.02] border border-white/5 px-3 py-1.5 text-red-400/70 hover:text-red-400 no-underline transition-colors">
                        📄 Sci-Hub: {t.title}
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
