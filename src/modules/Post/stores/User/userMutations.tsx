import * as types from './userTypes'
import {
  UserState,
  UserDataModel
} from '../../typings/userTypings'

export default {
  [types.USER_REQUEST]: (state: UserState) => {
    state.isFetching = true
  },

  [types.USER_SUCCESS]: (state: UserState, response: UserDataModel) => {
    state.data = response
    state.isFetching = false
  },

  [types.USER_ERROR]: (state: UserState, response: Error) => {
    state.data = {}
    state.isFetching = false
    state.isError = response
  }
}
