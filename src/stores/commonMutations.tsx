import * as types from './commonTypes'
import { CommonState } from '@/typings/commonTypings'

export default {
  [types.SET_TITLE]: (state: CommonState, title: string) => {
    document.title = title
    state.title = title
  }
}
