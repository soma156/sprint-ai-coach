import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const apiKey = env.DEEPSEEK_API_KEY || ''

  return {
    plugins: [react()],
    server: {
      proxy: {
        // 本地开发：前端调 /api/generate-plan，Vite 转发到 DeepSeek
        '/api/generate-plan': {
          target: 'https://api.deepseek.com',
          changeOrigin: true,
          rewrite: () => '/v1/chat/completions',
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq) => {
              if (apiKey) {
                proxyReq.setHeader('Authorization', `Bearer ${apiKey}`)
              }
            })
          },
        },
      },
    },
  }
})
