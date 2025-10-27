import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Todas las rutas que comiencen con @ serán redirigidas a /src
    alias: {
      '@': '/src'
    }
  }
})