import * as types from './postTypes'
import { PostIndexState, PostIndexModel } from '../../contracts/postContracts'

export default {
  [types.POST_SUCCESS]: (state: PostIndexState, response: PostIndexModel[]) => {
    state.data = response
    state.isFetching = false
  },

  [types.POST_ERROR]: (state: PostIndexState, error: Error) => {
    state.data = []
    state.isFetching = false,
    state.isError = error
  }
}
