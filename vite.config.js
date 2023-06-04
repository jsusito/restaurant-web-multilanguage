import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  https: 'https://jsusito.github.io/restaurant-web-multilanguage/',
  base: 'https://jsusito.github.io/restaurant-web-multilanguage/restaurante'
})
