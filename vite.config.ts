import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/CyberPunk-2077-Page/',
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, 
    },
  },
})
