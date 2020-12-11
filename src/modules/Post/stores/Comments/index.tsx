import { Module } from 'vuex'

import state from './commentsState'
import getters from './commentsGetters'
import mutations from './commentsMutations'
import actions from './commentsActions'

const module: Module<any, any> = {
  state,
  getters,
  mutations,
  actions
}

export default module
