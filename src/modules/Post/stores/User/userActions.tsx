import * as types from './userTypes'
import { API_USER } from '../../constants'
import { postService } from '../../services'

export default {  
  [types.USER_REQUEST]: async ({ commit }: { commit: Function }, id: number) => {
    commit(types.USER_REQUEST)

    try {
      const { data } = await postService.get(API_USER + id)

      commit(types.USER_SUCCESS, data)
    } catch (error) {
      commit(types.USER_ERROR, error)
    }
  }
}
