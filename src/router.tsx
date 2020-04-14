import Router from 'vue-router'

import { VPreloader } from 'templates'

const domainModuleFiles = require.context('./pages', true, /router.tsx/)
const domainModules = domainModuleFiles.keys().reduce((carry: any, item: string) => {
  return [...carry, ...domainModuleFiles(item).default]
}, [])

const routes = new Router({
  mode: 'history',
  base: process.env.BASE_URL,

  routes: [
    {
      path: '*',
      name: 'notFound',
      component: () => import('./views/notFound.vue')
    },

    ...domainModules
  ]
})

export default VPreloader(routes)
