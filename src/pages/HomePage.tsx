import FormStep from '../components/FormStep'
import LoadingSpinner from '../components/LoadingSpinner'
import { useAppContext } from '../context/AppContext'

export default function HomePage() {
  const { state } = useAppContext()

  // API 调用中 — 显示加载动画
  if (state.isLoading) {
    return <LoadingSpinner />
  }

  return (
    <div className="py-4">
      {/* API 错误显示 */}
      {state.error && (
        <div className="max-w-2xl mx-auto mb-6 bg-red-500/20 border border-red-500/50 rounded-lg p-4">
          <p className="text-red-300 text-sm">❌ {state.error}</p>
        </div>
      )}

      <FormStep />
    </div>
  )
}
