import { resolve, join } from 'path'
import { defineConfig } from 'vite'

import { createVuePlugin as Vue2Plugin } from 'vite-plugin-vue2'
import RubyPlugin, { projectRoot } from 'vite-plugin-ruby'

export default defineConfig({
  alias: {
    '@': resolve(join(projectRoot, 'app/javascript')),
  },
  plugins: [
    RubyPlugin(),
    Vue2Plugin(),
  ],
})
