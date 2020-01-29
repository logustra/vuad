import * as types from './commonTypes'

export default {
  [types.SET_HEADER_TITLE]: ({ commit }: any, context: any) => {
    commit(types.SET_HEADER_TITLE, context)
  }
}
