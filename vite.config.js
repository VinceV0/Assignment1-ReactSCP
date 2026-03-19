import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/React-SCP-Assignment1/', // This MUST match your repo name exactly
})