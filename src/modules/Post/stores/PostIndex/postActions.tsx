import { postService } from '../../services'
import * as types from './postTypes'

export default {
  [types.POST_REQUEST]: async ({ commit }: any) => {
    try {
      const { data } = await postService.get()

      commit(types.POST_SUCCESS, data)
    } catch (error) {
      commit(types.POST_ERROR, error)
    }
  }
}
