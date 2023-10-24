import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  server: {
    port: '3000',
    host: 'http://10.0.50.39',
  }
  
})
