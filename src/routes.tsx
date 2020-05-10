const domainRouterFiles = require.context('./modules', true, /router.tsx/)
const domainRouter = domainRouterFiles.keys().reduce((carry: any, item: string) => {
  return [...carry, ...domainRouterFiles(item).default]
}, [])

export default [
  {
    path: '*',
    name: 'notFound',
    component: () => import('./views/notFound.vue')
  },

  ...domainRouter
]
