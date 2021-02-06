import { resolve, join } from 'path'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import RubyPlugin, { projectRoot } from 'vite-plugin-ruby'

export default defineConfig({
  alias: {
    '@': resolve(join(projectRoot, 'app/javascript')),
  },
  plugins: [
    RubyPlugin(),
    vue(),
  ],
})
