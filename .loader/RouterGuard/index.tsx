import Loader from './loader'

export default (router: any, color: string) => {
  const loading = new Loader(color)

  router.beforeEach((to: any, from: any, next: any) => {
    loading.start()
    next()
  })

  router.afterEach((to: any, from: any) => {
    loading.stop()
  })

  return router
}
