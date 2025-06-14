import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/Companny_Profile-Esta/',
  plugins: [
    react(),
    VitePWA({
  registerType: 'autoUpdate',
  manifest: {
    short_name: 'ESTA',
    name: 'ESTA Profile',
    start_url: '/Companny_Profile-Esta/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1976d2',
    icons: [
      {
        src: 'assets/profile/icon.png', // pastikan path dan file benar
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: 'assets/profile/icon.png', // direkomendasikan juga punya 192x192
        sizes: '192x192',
        type: 'image/png'
      }
    ]
  }
})
  ]
})