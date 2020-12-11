import * as types from './postTypes'
import {
  PostState,
  PostDataModel
} from '../../typings/postTypings'

export default {
  [types.POST_REQUEST]: (state: PostState) => {
    state.isFetching = true
  },

  [types.POST_SUCCESS]: (state: PostState, response: PostDataModel) => {
    state.data = response
    state.isFetching = false
  },

  [types.POST_ERROR]: (state: PostState, response: Error) => {
    state.data = {}
    state.isFetching = false
    state.isError = response
  }
}
