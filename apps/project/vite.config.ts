import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'

const base = process.env.BASEPATH || '/'
const contentSecurityPolicy_connectLinks = process.env.CSP_CONNECT_LINKS || '*'

// https://vitejs.dev/config/
export default defineConfig({
  base: base,
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          CSP_Supabase: `<meta http-equiv="Content-Security-Policy" content="connect-src 'self' ${contentSecurityPolicy_connectLinks}">`,
        },
      },
    }),
  ],
})
