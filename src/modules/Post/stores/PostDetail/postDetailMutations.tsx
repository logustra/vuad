import * as types from './postDetailTypes'
import { PostDetailState, PostDetailModel, PostCommentModel } from '../../contracts/postDetailContracts'

export default {
  [types.POST_DETAIL_SUCCESS]: (state: PostDetailState, response: PostDetailModel[]) => {
    const { postDetail } = state

    postDetail.data = response
    postDetail.isFetching = false
  },

  [types.POST_DETAIL_ERROR]: (state: PostDetailState, error: Error) => {
    const { postDetail } = state

    postDetail.data = []
    postDetail.isFetching = false,
    postDetail.isError = error
  },

  [types.POST_COMMENT_LIST_SUCCESS]: (state: PostDetailState, response: PostCommentModel[]) => {
    const { postCommentList } = state

    postCommentList.data = response
    postCommentList.isFetching = false
  },

  [types.POST_DETAIL_ERROR]: (state: PostDetailState, error: Error) => {
    const { postCommentList } = state

    postCommentList.data = []
    postCommentList.isFetching = false,
    postCommentList.isError = error
  }
}
