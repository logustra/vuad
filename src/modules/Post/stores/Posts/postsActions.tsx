import * as types from './postsTypes'
import { API_POSTS } from '../../constants'
import { postService } from '../../services'

export default {
  [types.POSTS_REQUEST]: async ({ commit }: { commit: Function }, params?: {}) => {
    commit(types.POSTS_REQUEST)

    try {
      const { data } = await postService.get(API_POSTS, params)

      commit(types.POSTS_SUCCESS, data)
    } catch (error) {
      commit(types.POSTS_ERROR, error)
    }
  }
}
