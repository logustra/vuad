import { Module } from 'vuex'

import state from './postsState'
import getters from './postsGetters'
import mutations from './postsMutations'
import actions from './postsActions'

const module: Module<any, any> = {
  state,
  getters,
  mutations,
  actions
}

export default module
