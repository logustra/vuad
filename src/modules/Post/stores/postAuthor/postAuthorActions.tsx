import { postService } from '../../services'
import { API_POST_LIST, API_AUTHOR_DETAIL } from '../../constants/postEndpoints'
import * as types from './postAuthorTypes'

export default {
  [types.AUTHOR_DETAIL_REQUEST]: async ({ commit }: any, id: number) => {
    commit(types.AUTHOR_DETAIL_REQUEST)

    try {
      const { data } = await postService.get(API_AUTHOR_DETAIL + id)

      commit(types.AUTHOR_DETAIL_SUCCESS, data)
    } catch (error) {
      commit(types.AUTHOR_DETAIL_ERROR, error)
    }
  },

  [types.POST_AUTHOR_REQUEST]: async ({ commit }: any, params: {}) => {
    commit(types.POST_AUTHOR_REQUEST)

    try {
      const { data } = await postService.get(API_POST_LIST, params)

      commit(types.POST_AUTHOR_SUCCESS, data)
    } catch (error) {
      commit(types.POST_AUTHOR_ERROR, error)
    }
  }
}
