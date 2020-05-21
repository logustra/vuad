import * as types from '../../stores/Post/postTypes'
import { PostState } from '../../typings/postTypings'
import getters from '../../stores/Post/postGetters'
import mutations from '../../stores/Post/postMutations'
import actions from '../../stores/Post/postActions'
import { postService } from '../../services'

const state: PostState = {
  data: [],
  isFetching: true,
  isError: false
}

describe('Post Actions', () => {
  const commit = jest.fn()
  const id = 1
  const response = {
    data: {}
  }

  afterEach(() => {
    jest.resetAllMocks()
  })

  test(`dispatch ${types.POST_SUCCESS} properly`, async () => {
    postService.get = jest.fn().mockResolvedValue(response)

    await actions[types.POST_REQUEST]({ commit }, id)

    expect(commit.mock.calls[1][0] === types.POST_SUCCESS).toBe(true)
  })

  test(`dispatch ${types.POST_ERROR} properly`, async () => {
    postService.get = jest.fn().mockRejectedValue(response)

    await actions[types.POST_REQUEST]({ commit }, id)

    expect(commit.mock.calls[1][0] === types.POST_ERROR).toBe(true)
  })
})

describe('Post Mutations', () => {
  test(`mutate ${types.POST_REQUEST} properly`, () => {
    mutations[types.POST_REQUEST](state)

    expect(state.isFetching).toBe(true)
  })

  test(`mutate ${types.POST_SUCCESS} properly`, () => {
    const data = {
      userId: 1,
      id: 1,
      title: 'test',
      body: 'test'
    }

    mutations[types.POST_SUCCESS](state, data)

    expect(Object.keys(state.data).length !== 0).toBe(true)
  })

  test(`mutate ${types.POST_ERROR} properly`, () => {
    mutations[types.POST_ERROR](state, new Error())

    expect(state.isError).toMatchObject(new Error())
  })
})

describe('Post Getters', () => {
  test('add state to getters properly', () => {
    const post = getters.post(state)

    expect(post).toBe(state)
  })
})
