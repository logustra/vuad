import { CommonState } from '@/contracts/commonContracts'
import * as types from './commonTypes'

export default {
  [types.SET_TITLE]: (state: CommonState, title: string) => {
    document.title = title
    state.title = title
  }
}
