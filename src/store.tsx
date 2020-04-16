import { Store } from 'vuex'

import Common from './stores'

const domainModuleFiles = require.context('./modules', true, /store.tsx/)
const domainModules = {}

domainModuleFiles.keys().map((item: string) => {
  for (const key in domainModuleFiles(item)) {
    domainModules[key] = domainModuleFiles(item)[key]
  }
})

export default new Store({
  modules: {
    Common,
    ...domainModules
  }
})
