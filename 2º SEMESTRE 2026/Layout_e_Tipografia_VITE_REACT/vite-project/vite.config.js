import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' //importando bibilioteca do tailwind

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],  // plugins - chamando o tailwindcss
})
