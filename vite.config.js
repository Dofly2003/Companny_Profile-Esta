import { VitePWA } from 'vite-plugin-pwa';

export default {
  plugins: [
    // plugin lain
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        short_name: 'ESTA',
        name: 'Employment Start Tracking App',
        icons: [
          {
            src: './assets/profile/icon.png',
            type: 'image/png',
            sizes: '512x512'
          },
          {
            src: './assets/profile.icon.png',
            type: 'image/png',
            sizes: '512x512'
          }
        ],
        start_url: '.',
        display: 'standalone',
        theme_color: '#1976d2',
        background_color: '#ffffff'
      }
    })
  ]
}