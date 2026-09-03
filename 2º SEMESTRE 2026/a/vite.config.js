import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// importando tailwind
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})

