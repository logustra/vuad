import * as types from './postIndexTypes'
import { 
  PostIndexState, 
  PostListModel, 
  AuthorListModel 
} from '../../typings/postIndexTypings'

export default {
  [types.AUTHOR_LIST_SUCCESS]: (state: PostIndexState) => {
    state.authorList.isFetching = true
  },

  [types.AUTHOR_LIST_SUCCESS]: (state: PostIndexState, response: AuthorListModel[]) => {
    const { authorList } = state

    authorList.data = response
    authorList.isFetching = false
  },

  [types.AUTHOR_LIST_ERROR]: (state: PostIndexState, error: Error) => {
    const { authorList } = state

    authorList.data = []
    authorList.isFetching = false,
    authorList.isError = error
  },

  [types.POST_LIST_REQUEST]: (state: PostIndexState) => {
    state.postList.isFetching = true
  },

  [types.POST_LIST_SUCCESS]: (state: PostIndexState, response: PostListModel[]) => {
    const { postList } = state
    const { authorList } = state

    postList.data = response.map(item => ({
      ...item,
      author: authorList.data.find(author => author.id === item.userId)
    }))

    postList.isFetching = false
  },

  [types.POST_LIST_ERROR]: (state: PostIndexState, error: Error) => {
    const { postList } = state

    postList.data = []
    postList.isFetching = false,
    postList.isError = error
  }
}
