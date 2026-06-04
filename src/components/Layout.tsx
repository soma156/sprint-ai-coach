import { Link, useLocation, Outlet } from 'react-router-dom'

// 导航链接数据
const navLinks = [
  { path: '/', label: '🏠 首页', icon: '🏠' },
  { path: '/video', label: '🎥 动作分析', icon: '🎥' },
  { path: '/exercises', label: '📚 动作库', icon: '📚' },
  { path: '/nutrition', label: '🍽️ 营养', icon: '🍽️' },
  { path: '/log', label: '📝 训练日志', icon: '📝' },
  { path: '/stats', label: '📊 数据统计', icon: '📊' },
]

export default function Layout() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-primary-900 flex flex-col">
      {/* 顶部导航栏 */}
      <header className="bg-black/50 border-b border-white/10 sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 no-underline">
            <span className="text-2xl">🏃</span>
            <span className="text-white font-bold text-lg hidden sm:inline">
              Sprint AI Coach
            </span>
          </Link>

          {/* 导航链接 */}
          <nav className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors no-underline
                    ${isActive
                      ? 'bg-accent text-white'
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                >
                  <span className="sm:hidden">{link.icon}</span>
                  <span className="hidden sm:inline">{link.label}</span>
                </Link>
              )
            })}
          </nav>
        </div>
      </header>

      {/* 页面内容区域 */}
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Outlet />
        </div>
      </main>

      {/* 底部 */}
      <footer className="bg-black/30 border-t border-white/10 py-4 text-center text-gray-500 text-sm">
        <p>🏃 Sprint AI Coach — AI短跑训练计划生成器</p>
        <p className="text-xs mt-1">基于运动训练学原理 · 仅供训练参考</p>
      </footer>
    </div>
  )
}
