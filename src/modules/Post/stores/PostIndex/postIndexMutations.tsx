import * as types from './postIndexTypes'
import { PostListState, PostListModel, AuthorListModel } from '../../contracts/postListContracts'

export default {
  [types.AUTHOR_LIST_SUCCESS]: (state: PostListState) => {
    state.authorList.isFetching = true
  },

  [types.AUTHOR_LIST_SUCCESS]: (state: PostListState, response: AuthorListModel[]) => {
    const { authorList } = state

    authorList.data = response
    authorList.isFetching = false
  },

  [types.AUTHOR_LIST_ERROR]: (state: PostListState, error: Error) => {
    const { authorList } = state

    authorList.data = []
    authorList.isFetching = false,
    authorList.isError = error
  },

  [types.POST_LIST_REQUEST]: (state: PostListState) => {
    state.postList.isFetching = true
  },

  [types.POST_LIST_SUCCESS]: (state: PostListState, response: PostListModel[]) => {
    const { postList } = state
    const { authorList } = state

    postList.data = response.map(item => ({
      ...item,
      author: authorList.data.find(author => author.id === item.userId)
    }))

    postList.isFetching = false
  },

  [types.POST_LIST_ERROR]: (state: PostListState, error: Error) => {
    const { postList } = state

    postList.data = []
    postList.isFetching = false,
    postList.isError = error
  }
}
