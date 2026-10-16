// =====================================================================
// vite.config.js — CONFIGURAÇÃO DO VITE
// O Vite é a ferramenta que roda o projeto no navegador (npm run dev).
// Aqui dizemos a ele quais "extensões" (plugins) usar.
// Mexe-se neste arquivo só uma vez, no começo do projeto.
// =====================================================================

// Plugin que ensina o Vite a entender React (os arquivos .jsx).
import react from '@vitejs/plugin-react'
// Função que monta a configuração.
import { defineConfig } from 'vite'
// Plugin que faz o Tailwind (as classes de estilo) funcionar.
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// plugins = lista de extensões ligadas: React e Tailwind.
export default defineConfig({
  plugins: [react(),tailwindcss()],
})
