import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/personal-whiteboard-app/dist/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html',
        sidepanel: './sidepanel.html',
        stage: './stage.html',
        config: './config.html',
      }
    }
  },
  server: {
    port: 3000
  }
})
