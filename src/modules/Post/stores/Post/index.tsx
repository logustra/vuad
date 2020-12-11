import { Module } from 'vuex'

import state from './postState'
import getters from './postGetters'
import mutations from './postMutations'
import actions from './postActions'

const module: Module<any, any> = {
  state,
  getters,
  mutations,
  actions
}

export default module
