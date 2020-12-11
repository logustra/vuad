import * as types from './commentsTypes'
import {
  CommentsState,
  CommentsDataModel
} from '../../typings/commentsTypings'

export default {
  [types.COMMENTS_REQUEST]: (state: CommentsState) => {
    state.isFetching = true
  },

  [types.COMMENTS_SUCCESS]: (state: CommentsState, response: CommentsDataModel[]) => {
    state.data = response
    state.isFetching = false
  },

  [types.COMMENTS_ERROR]: (state: CommentsState, response: Error) => {
    state.data = []
    state.isFetching = false
    state.isError = response
  }
}
