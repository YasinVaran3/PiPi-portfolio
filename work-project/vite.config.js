import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // don't inherit the old site's Tailwind/PostCSS config from the parent folder
  css: { postcss: {} },
  // Bind to IPv4 explicitly: on Windows "localhost" can resolve to ::1 only,
  // which VS Code's built-in browser (and some others) can't reach.
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
  preview: {
    host: '127.0.0.1',
    port: 4173,
  },
})
