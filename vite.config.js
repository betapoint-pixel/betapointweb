import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        silenceDeprecations: [
          'global-builtin',                 // map-get 경고
          'import',                         // @import 경고
          'legacy-js-api'                   // Sass JS API
        ],
        additionalData: `
        @import "@/styles/_variables.scss";
        @import "@/styles/_tools.scss";
        `
      },
      sassOptions: {
        quietDeps: true,
        silenceDeprecations: ['global-builtin']
      }
    }
  },
  resolve: {
    alias: {
      "@": "/src"  // @src 경로 단축 (선택)
    }
  }
})
