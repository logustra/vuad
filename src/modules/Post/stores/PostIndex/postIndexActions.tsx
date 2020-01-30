import { postService } from '../../services'
import { API_POST_LIST, API_AUTHOR_LIST } from '../../constants/postEndpoints'
import * as types from './postIndexTypes'

export default {
  [types.AUTHOR_LIST_REQUEST]: async ({ commit }: any) => {
    try {
      const { data } = await postService.get(API_AUTHOR_LIST)

      commit(types.AUTHOR_LIST_SUCCESS, data)
    } catch (error) {
      commit(types.AUTHOR_LIST_ERROR, error)
    }
  },
  
  [types.POST_LIST_REQUEST]: async ({ commit }: any, params: {}) => {
    try {
      const { data } = await postService.get(API_POST_LIST, params)

      commit(types.POST_LIST_SUCCESS, data)
    } catch (error) {
      commit(types.POST_LIST_ERROR, error)
    }
  }
}
