import * as types from './usersTypes'
import { API_USERS } from '@/constants'
import { httpService } from '@/services'

export default {
  [types.USERS_REQUEST]: async ({ commit }: { commit: Function }) => {
    commit(types.USERS_REQUEST)

    try {
      const { data } = await httpService.get(API_USERS)

      commit(types.USERS_SUCCESS, data)
    } catch (error) {
      commit(types.USERS_ERROR, error)
    }
  }
}
