import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/reactJs/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        short_name: 'ESTA',
        name: 'Employment Start Tracking App',
        start_url: '/reactJs/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#1976d2',
        icons: [
          {
            src: 'assets/profile/icon.png', // pastikan path dan penamaan benar!
            type: 'image/png',
            sizes: '512x512'
          },
          // Jika ingin menambah ukuran lain, duplikat dan sesuaikan
          // {
          //   src: 'assets/profile/icon-192.png',
          //   type: 'image/png',
          //   sizes: '192x192'
          // }
        ]
      }
    })
  ]
})