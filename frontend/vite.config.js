import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // How to allow all host
  server: {
    host: true,
    allowedHosts: ['*']
  },
  plugins: [
    react(),
    tailwindcss()
  ],
})
