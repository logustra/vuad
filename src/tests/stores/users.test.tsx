import * as types from '@/stores/Users/usersTypes'
import { UsersState } from '@/typings/usersTypings'
import getters from '@/stores/Users/usersGetters'
import mutations from '@/stores/Users/usersMutations'
import actions from '@/stores/Users/usersActions'
import { httpService } from '@/services'

const state: UsersState = {
  data: [],
  isFetching: true,
  isError: false
}

describe('Users Actions', () => {
  const commit = jest.fn()
  const response = {
    data: {}
  }

  afterEach(() => {
    jest.resetAllMocks()
  })

  test(`dispatch ${types.USERS_SUCCESS} properly`, async () => {
    httpService.get = jest.fn().mockResolvedValue(response)

    await actions[types.USERS_REQUEST]({ commit })

    expect(commit.mock.calls[1][0] === types.USERS_SUCCESS).toBe(true)
  })

  test(`dispatch ${types.USERS_ERROR} properly`, async () => {
    httpService.get = jest.fn().mockRejectedValue(response)

    await actions[types.USERS_REQUEST]({ commit })

    expect(commit.mock.calls[1][0] === types.USERS_ERROR).toBe(true)
  })
})

describe('Posts Mutations', () => {
  test(`mutate ${types.USERS_REQUEST} properly`, () => {
    mutations[types.USERS_REQUEST](state)

    expect(state.isFetching).toBe(true)
  })

  test(`mutate ${types.USERS_SUCCESS} properly`, () => {
    mutations[types.USERS_SUCCESS](state, [])

    expect(Array.isArray(state.data)).toBe(true)
  })

  test(`mutate ${types.USERS_ERROR} properly`, () => {
    mutations[types.USERS_ERROR](state, new Error())

    expect(state.isError).toMatchObject(new Error())
  })
})

describe('Users Getters', () => {
  test('add state to getters properly', () => {
    const users = getters.users(state)

    expect(users).toBe(state)
  })
})
