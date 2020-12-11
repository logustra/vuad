import { Module } from 'vuex'

import state from './userState'
import getters from './userGetters'
import mutations from './userMutations'
import actions from './userActions'

const module: Module<any, any> = {
  state,
  getters,
  mutations,
  actions
}

export default module
