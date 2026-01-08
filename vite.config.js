import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 獲取 base path，支援 GitHub Pages 部署
// 如果是 GitHub Pages，且倉庫名稱不是 username.github.io，則使用倉庫名稱作為 base path
const getBasePath = () => {
  // 在 GitHub Actions 中，可以通過環境變數設置
  if (process.env.VITE_BASE_PATH) {
    return process.env.VITE_BASE_PATH
  }
  // 預設使用倉庫名稱作為 base path（請根據您的倉庫名稱修改）
  // 如果倉庫名稱是 'burger-oclock'，則使用 '/burger-oclock/'
  // 如果倉庫名稱是 'username.github.io'，則改為 '/'
  return '/burger-oclock/'
}

export default defineConfig({
  plugins: [react()],
  base: getBasePath(),
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
