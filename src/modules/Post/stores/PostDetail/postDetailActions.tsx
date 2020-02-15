import { postService } from '../../services'
import { API_POST_DETAIL, API_COMMENT_LIST } from '../../constants/postEndpoints'
import * as types from './postDetailTypes'

export default {  
  [types.POST_DETAIL_REQUEST]: async ({ commit }: any, id: number) => {
    commit(types.POST_DETAIL_REQUEST)

    try {
      const { data } = await postService.get(API_POST_DETAIL + id)

      commit(types.POST_DETAIL_SUCCESS, data)
    } catch (error) {
      commit(types.POST_DETAIL_ERROR, error)
    }
  },

  [types.POST_COMMENT_LIST_REQUEST]: async ({ commit }: any, params: {}) => {
    commit(types.POST_COMMENT_LIST_REQUEST)

    try {
      const { data } = await postService.get(API_COMMENT_LIST, params)

      commit(types.POST_COMMENT_LIST_SUCCESS, data)
    } catch (error) {
      commit(types.POST_COMMENT_LIST_ERROR, error)
    }
  }
}
