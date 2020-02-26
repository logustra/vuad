import { Store } from 'vuex'
import commonModules from './stores'

const domainModules = {}
const domainModuleFiles = require.context('./modules', true, /store.tsx/)

domainModuleFiles.keys().map((item: string) => {
  if (domainModuleFiles(item).default) {
    for (const key in domainModuleFiles(item).default) {
      domainModules[key] = domainModuleFiles(item).default[key]
    }
  } else {
    for (const key in domainModuleFiles(item)) {
      domainModules[key] = domainModuleFiles(item)[key]
    }
  }
})

export default new Store({
  modules: {
    ...commonModules,
    ...domainModules
  },

  state: {},
  mutations: {},
  actions: {}
})
