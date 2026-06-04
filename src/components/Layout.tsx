import { Link, useLocation, Outlet } from 'react-router-dom'

const navLinks = [
  { path: '/', label: '评估', icon: '▣' },
  { path: '/video', label: '视频分析', icon: '▶' },
  { path: '/exercises', label: '动作库', icon: '⊞' },
  { path: '/competitions', label: '赛事', icon: '▣' },
  { path: '/nutrition', label: '营养', icon: '◎' },
  { path: '/log', label: '日志', icon: '◉' },
  { path: '/stats', label: '统计', icon: '⊡' },
]

export default function Layout() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#0d0d18' }}>
      {/* 顶部导航 — 极简实验室风格 */}
      <header className="sticky top-0 z-50 border-b border-white/5" style={{ background: 'rgba(13,13,24,0.92)', backdropFilter: 'blur(12px)' }}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 no-underline group">
            <span className="text-sm tracking-[0.2em] text-gray-300 font-heading group-hover:text-accent-light transition-colors">
              SPRINT AI COACH
            </span>
          </Link>

          <nav className="flex items-center gap-0">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 text-xs tracking-wider no-underline transition-colors
                    ${isActive
                      ? 'text-accent-light border-b border-accent'
                      : 'text-gray-500 hover:text-gray-300'
                    }`}
                >
                  <span className="hidden sm:inline">{link.label}</span>
                  <span className="sm:hidden text-base">{link.icon}</span>
                </Link>
              )
            })}
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Outlet />
        </div>
      </main>

      <footer className="border-t border-white/5 py-6 text-center" style={{ background: '#0a0a14' }}>
        <p className="text-gray-600 text-xs tracking-wider">SPRINT AI COACH</p>
        <p className="text-gray-700 text-xs mt-1">运动科学实验室 · 仅供训练参考</p>
      </footer>
    </div>
  )
}
