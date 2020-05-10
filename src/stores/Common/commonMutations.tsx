import * as types from './commonTypes'
import { CommonState } from '@/typings/commonTypings'

export default {
  [types.SET_TITLE]: (state: CommonState, response: string) => {
    document.title = response
  },

  [types.SET_OFFLINE]: (state: CommonState, response: boolean) => {
    state.isOffline = response
  }
}
