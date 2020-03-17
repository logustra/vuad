import * as types from './postAuthorTypes'
import { 
  PostAuthorState, 
  PostListModel, 
  AuthorDetailModel 
} from '../../contracts/postAuthorContracts'

export default {
  [types.AUTHOR_DETAIL_REQUEST]: (state: PostAuthorState) => {
    state.authorDetail.isFetching = true
  },

  [types.AUTHOR_DETAIL_SUCCESS]: (state: PostAuthorState, response: AuthorDetailModel) => {
    const { authorDetail } = state

    authorDetail.data = response
    authorDetail.isFetching = false
  },

  [types.AUTHOR_DETAIL_ERROR]: (state: PostAuthorState, error: Error) => {
    const { authorDetail } = state

    authorDetail.data = {
      id: 0,
      name: '',
      email: '',
      website: ''
    }
    authorDetail.isFetching = false,
    authorDetail.isError = error
  },

  [types.POST_AUTHOR_REQUEST]: (state: PostAuthorState) => {
    state.postAuthor.isFetching = true
  },

  [types.POST_AUTHOR_SUCCESS]: (state: PostAuthorState, response: PostListModel[]) => {
    const { postAuthor } = state

    postAuthor.data = response
    postAuthor.isFetching = false
  },

  [types.POST_AUTHOR_ERROR]: (state: PostAuthorState, error: Error) => {
    const { postAuthor } = state

    postAuthor.data = []
    postAuthor.isFetching = false,
    postAuthor.isError = error
  }
}
