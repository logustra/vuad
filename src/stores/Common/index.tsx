import { Module } from 'vuex'

import state from './commonState'
import getters from './commonGetters'
import mutations from './commonMutations'
import actions from './commonActions'

const module: Module<any, any> = {
  state,
  getters,
  mutations,
  actions
}

export default module
