// This file is automatically compiled by Vite Rails, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import '~/styles/application.css'

import { createApp, h } from 'vue'
import { App, plugin } from '@inertiajs/inertia-vue3'

const el = document.getElementById('app')

const pages = import.meta.glob('../Pages/**/*.vue')

createApp({
  render: () =>
    h(App, {
      initialPage: JSON.parse(el.dataset.page),
      resolveComponent: (name) => {
        const importPage = pages[`../Pages/${name}.vue`]
        if (!importPage) throw new Error(`Unknown page ${name}. Is it located under Pages with a .vue extension?`)
        return importPage().then((module) => module.default)
      },
    }),
})
  .use(plugin)
  .mount(el)
