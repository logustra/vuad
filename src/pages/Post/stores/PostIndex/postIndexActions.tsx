import * as types from './postIndexTypes'
import { 
  API_POST_LIST, 
  API_AUTHOR_LIST 
} from '../../constants/postConstants'
import { postService } from '../../services'

export default {
  [types.AUTHOR_LIST_REQUEST]: async ({ commit }: { commit: Function }) => {
    commit(types.AUTHOR_LIST_REQUEST)

    try {
      const { data } = await postService.get(API_AUTHOR_LIST)

      commit(types.AUTHOR_LIST_SUCCESS, data)
    } catch (error) {
      commit(types.AUTHOR_LIST_ERROR, error)
    }
  },
  
  [types.POST_LIST_REQUEST]: async ({ commit }: { commit: Function }) => {
    commit(types.POST_LIST_REQUEST)

    try {
      const { data } = await postService.get(API_POST_LIST)

      commit(types.POST_LIST_SUCCESS, data)
    } catch (error) {
      commit(types.POST_LIST_ERROR, error)
    }
  }
}
