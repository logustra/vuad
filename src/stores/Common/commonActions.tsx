import * as types from './commonTypes'

export default {
  [types.SET_TITLE]: ({ commit }: any, title: string) => {
    commit(types.SET_TITLE, title)
  }
}
