import { Store } from 'vuex'
import commonModules from './stores'

const domainModules = {}
const domainModuleFiles = require.context('./modules', true, /store.tsx/)

domainModuleFiles.keys().map((item: string) => {
  if (domainModuleFiles(item).default) {
    for (let key in domainModuleFiles(item).default) {
      domainModules[key] = domainModuleFiles(item).default[key]
    }
  } else {
    for (let key in domainModuleFiles(item)) {
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
