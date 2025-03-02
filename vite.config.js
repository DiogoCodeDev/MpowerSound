import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

import path from 'path';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [vue(), tailwindcss()],
    define: {
      'lassApi': JSON.stringify(env.VITE_LASS_API_URL),
      'baseEnv': JSON.stringify(env.VITE_API_BASE_ENV),
    },
    resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
        },
    },
  } 
  
})
