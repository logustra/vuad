import * as types from './postTypes'
import { API_POST } from '../../constants'
import { postService } from '../../services'

export default {  
  [types.POST_REQUEST]: async ({ commit }: { commit: Function }, id: number) => {
    commit(types.POST_REQUEST)

    try {
      const { data } = await postService.get(API_POST + id)

      commit(types.POST_SUCCESS, data)
    } catch (error) {
      commit(types.POST_ERROR, error)
    }
  }
}
