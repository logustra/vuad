import { Store } from 'vuex'
import globalStores from './stores'

const domainStores = {}
const domainStoreFiles = require.context('./modules', true, /store.tsx/)

domainStoreFiles.keys().map((item: string) => {
  for (const key in domainStoreFiles(item)) {
    globalStores[key] = domainStoreFiles(item)[key]
  }
})

export default new Store({
  modules: {
    ...globalStores,
    ...domainStores
  }
})
