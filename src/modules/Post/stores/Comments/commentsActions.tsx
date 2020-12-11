import * as types from './commentsTypes'
import { API_COMMENTS } from '../../constants'
import { postService } from '../../services'

export default {
  [types.COMMENTS_REQUEST]: async ({ commit }: { commit: Function }, params: {}) => {
    commit(types.COMMENTS_REQUEST)

    try {
      const { data } = await postService.get(API_COMMENTS, params)

      commit(types.COMMENTS_SUCCESS, data)
    } catch (error) {
      commit(types.COMMENTS_ERROR, error)
    }
  }
}
