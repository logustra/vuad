import progress from 'nprogress'
import 'nprogress/nprogress.css'

export default (router: any) => {
  progress.configure({ showSpinner: false })

  router.beforeEach((to: any, from: any, next: any) => {
    progress.start()
    next()
  })

  router.afterEach(() => {
    progress.done()
  })

  return router
}
