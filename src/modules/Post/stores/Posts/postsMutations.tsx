import * as types from './postsTypes'
import {
  PostsState,
  PostsDataModel
} from '../../typings/postsTypings'

export default {
  [types.POSTS_REQUEST]: (state: PostsState) => {
    state.isFetching = true
  },

  [types.POSTS_SUCCESS]: (state: PostsState, response: PostsDataModel[]) => {
    state.data = response
    state.isFetching = false
  },

  [types.POSTS_ERROR]: (state: PostsState, response: Error) => {
    state.data = []
    state.isFetching = false
    state.isError = response
  }
}
