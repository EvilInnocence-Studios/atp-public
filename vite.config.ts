import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'
// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@common': path.resolve(__dirname, '../common/src'),
      '@api': path.resolve(__dirname, '../api/src'),
    },
  },
  plugins: [react()],
})
