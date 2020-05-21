import * as types from '../../stores/User/userTypes'
import { UserState } from '../../typings/userTypings'
import getters from '../../stores/User/userGetters'
import mutations from '../../stores/User/userMutations'
import actions from '../../stores/User/userActions'
import { postService } from '../../services'

const state: UserState = {
  data: [],
  isFetching: true,
  isError: false
}

describe('User Actions', () => {
  const commit = jest.fn()
  const id = 1
  const response = {
    data: {}
  }

  afterEach(() => {
    jest.resetAllMocks()
  })

  test(`dispatch ${types.USER_SUCCESS} properly`, async () => {
    postService.get = jest.fn().mockResolvedValue(response)

    await actions[types.USER_REQUEST]({ commit }, id)

    expect(commit.mock.calls[1][0] === types.USER_SUCCESS).toBe(true)
  })

  test(`dispatch ${types.USER_ERROR} properly`, async () => {
    postService.get = jest.fn().mockRejectedValue(response)

    await actions[types.USER_REQUEST]({ commit }, id)

    expect(commit.mock.calls[1][0] === types.USER_ERROR).toBe(true)
  })
})

describe('User Mutations', () => {
  test(`mutate ${types.USER_REQUEST} properly`, () => {
    mutations[types.USER_REQUEST](state)

    expect(state.isFetching).toBe(true)
  })

  test(`mutate ${types.USER_SUCCESS} properly`, () => {
    const data = {
      name: 'test',
      email: 'test@gmail.com',
      website: 'https://test.com'
    }

    mutations[types.USER_SUCCESS](state, data)

    expect(Object.keys(state.data).length !== 0).toBe(true)
  })

  test(`mutate ${types.USER_ERROR} properly`, () => {
    mutations[types.USER_ERROR](state, new Error())

    expect(state.isError).toMatchObject(new Error())
  })
})

describe('User Getters', () => {
  test('add state to getters properly', () => {
    const user = getters.user(state)

    expect(user).toBe(state)
  })
})
