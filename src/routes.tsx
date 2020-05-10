const domainModuleFiles = require.context('./modules', true, /router.tsx/)
const domainModules = domainModuleFiles.keys().reduce((carry: any, item: string) => {
  return [...carry, ...domainModuleFiles(item).default]
}, [])

export default [
  {
    path: '*',
    name: 'notFound',
    component: () => import('./views/notFound.vue')
  },

  ...domainModules
]
