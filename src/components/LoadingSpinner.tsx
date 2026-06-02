interface Props {
  message?: string
}

export default function LoadingSpinner({ message = 'AI 教练正在为你生成训练计划...' }: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      {/* 动画区域 */}
      <div className="relative mb-8">
        {/* 外圈旋转 */}
        <div className="w-20 h-20 border-4 border-white/10 border-t-accent rounded-full animate-spin" />
        {/* 内圈反向旋转 */}
        <div className="absolute inset-2 border-4 border-white/5 border-b-accent-light rounded-full animate-spin"
          style={{ animationDirection: 'reverse', animationDuration: '0.8s' }} />
        {/* 中心图标 */}
        <div className="absolute inset-0 flex items-center justify-center text-2xl">
          🏃
        </div>
      </div>

      {/* 文字提示 */}
      <p className="text-white text-lg font-medium mb-2">{message}</p>
      <p className="text-gray-500 text-sm">这可能需要 10-20 秒，请耐心等待</p>

      {/* 进度提示 */}
      <div className="mt-8 flex gap-2">
        <span className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
        <span className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
        <span className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
      </div>
    </div>
  )
}
