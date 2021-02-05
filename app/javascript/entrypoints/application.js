// This file is automatically compiled by Vite Rails, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
import 'vite/dynamic-import-polyfill'

import '~/styles/application.css'

import Vue from 'vue'
import VueMeta from 'vue-meta'
Vue.use(VueMeta)

import PortalVue from 'portal-vue'
Vue.use(PortalVue)

import MatomoTracker from '@/utils/matomo-tracker'
Vue.use(MatomoTracker)

import ConstantsMixin from '@/utils/ConstantsMixin'
Vue.mixin(ConstantsMixin)

import { app, plugin } from '@inertiajs/inertia-vue'
import { InertiaProgress as progress } from '@inertiajs/progress'
Vue.use(plugin)
progress.init()

const el = document.getElementById('app')

const pages = import.meta.glob('../Pages/**/*.vue')

new Vue({
  metaInfo: {
    titleTemplate: (title) => title ? `${title} - PingCRM` : 'PingCRM',
  },
  render: h => h(app, {
    props: {
      initialPage: JSON.parse(el.dataset.page),
      resolveComponent: name => {
        const importPage = pages[`../Pages/${name}.vue`]
        if (!importPage) throw new Error(`Unknown page ${name}. Is it located under Pages with a .vue extension?`)
        return importPage().then(module => module.default)
      },
      transformProps: props => {
        if (Vue.matomo.enabled)
          // Wait a bit to allow VueMeta to update the document.title
          setTimeout(() => {
            Vue.matomo.trackPageView()
          }, 100)

        return props
      },
    },
  }),
}).$mount(el)
