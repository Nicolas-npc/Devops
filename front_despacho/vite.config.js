import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "")
  const ventasProxyTarget = env.VITE_VENTAS_PROXY_TARGET || "http://localhost:8080"
  const despachosProxyTarget = env.VITE_DESPACHOS_PROXY_TARGET || "http://localhost:8081"

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api/v1/ventas': {
          target: ventasProxyTarget,
          changeOrigin: true
        },
        '/api/v1/despachos': {
          target: despachosProxyTarget,
          changeOrigin: true
        }
      }
    }
  }
})
