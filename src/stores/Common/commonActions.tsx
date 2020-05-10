import * as types from './commonTypes'

export default {
  [types.SET_TITLE]: ({ commit }: { commit: Function }, response: string) => {
    commit(types.SET_TITLE, response)
  },

  [types.SET_OFFLINE]: ({ commit }: { commit: Function }, response: boolean) => {
    commit(types.SET_OFFLINE, response)
  }
}
