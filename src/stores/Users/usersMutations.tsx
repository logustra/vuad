import * as types from './usersTypes'
import {
  UsersState,
  UsersDataModel
} from '@/typings/usersTypings'

export default {
  [types.USERS_REQUEST]: (state: UsersState) => {
    state.isFetching = true
  },

  [types.USERS_SUCCESS]: (state: UsersState, response: UsersDataModel[]) => {
    state.data = response
    state.isFetching = false
  },

  [types.USERS_ERROR]: (state: UsersState, response: Error) => {
    state.data = []
    state.isFetching = false
    state.isError = response
  }
}
