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
      '@public': path.resolve(__dirname, 'src/public'),
      '@core': path.resolve(__dirname, 'src/core'),
      '@common': path.resolve(__dirname, 'src/common'),
      '@uac': path.resolve(__dirname, 'src/uac'),
      '@uac-shared': path.resolve(__dirname, 'src/uac-shared'),
      '@core-shared': path.resolve(__dirname, 'src/core-shared'),
      '@common-shared': path.resolve(__dirname, 'src/common-shared'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@store-shared': path.resolve(__dirname, 'src/store-shared'),
      '@subscription': path.resolve(__dirname, 'src/subscription'),
      '@subscription-shared': path.resolve(__dirname, 'src/subscription-shared'),
      '@styles': path.resolve(__dirname, 'styles'),
      '@config': path.resolve(__dirname, 'src/config'),
    },
  },
  plugins: [react()],
})
