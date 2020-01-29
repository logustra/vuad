import Router from 'vue-router'
import { RouterGuard } from 'loader'

const LOADING_COLOR = process.env.LOADING_COLOR || ''

const domainModuleFiles = require.context('./modules', true, /router.tsx/)
const domainModules = domainModuleFiles.keys().reduce((carry: any, item: string) => {
  return [...carry, ...domainModuleFiles(item).default]
}, [])

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,

  routes: [
    {
      path: '*',
      name: 'notFound',
      component: () => import('./views/NotFound.vue')
    },

    ...domainModules
  ]
})

export default RouterGuard(router, LOADING_COLOR)
