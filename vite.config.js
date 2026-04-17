import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio",
  server: {
    port: 3200,
    open: true,
    watch: {
      ignored: './node_modules/',
      ['./src/main.jsx']: true,
    }
  }
})
