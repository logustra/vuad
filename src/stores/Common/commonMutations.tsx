import * as types from './commonTypes'

export default {
  [types.SET_HEADER_TITLE]: (state: any, title: string) => {
    document.title = title
    state.header.title = title
  }
}
