import { Module } from 'vuex'

import state from './usersState'
import getters from './usersGetters'
import mutations from './usersMutations'
import actions from './usersActions'

const users: Module<any, any> = {
  state,
  getters,
  mutations,
  actions
}

export default users
