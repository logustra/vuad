import { Module } from 'vuex'

import state from './postsState'
import getters from './postsGetters'
import mutations from './postsMutations'
import actions from './postsActions'

const posts: Module<any, any> = {
  state,
  getters,
  mutations,
  actions
}

export default posts
