import * as types from '../../stores/Posts/postsTypes'
import { PostsState } from '../../typings/postsTypings'
import getters from '../../stores/Posts/postsGetters'
import mutations from '../../stores/Posts/postsMutations'
import actions from '../../stores/Posts/postsActions'
import { postService } from '../../services'

const state: PostsState = {
  data: [],
  isFetching: true,
  isError: false
}

describe('Posts Actions', () => {
  const commit = jest.fn()
  const response = {
    data: {}
  }

  afterEach(() => {
    jest.resetAllMocks()
  })

  test(`dispatch ${types.POSTS_SUCCESS} properly`, async () => {
    postService.get = jest.fn().mockResolvedValue(response)

    await actions[types.POSTS_REQUEST]({ commit })

    expect(commit.mock.calls[1][0] === types.POSTS_SUCCESS).toBe(true)
  })

  test(`dispatch ${types.POSTS_ERROR} properly`, async () => {
    postService.get = jest.fn().mockRejectedValue(response)

    await actions[types.POSTS_REQUEST]({ commit })

    expect(commit.mock.calls[1][0] === types.POSTS_ERROR).toBe(true)
  })
})

describe('Posts Mutations', () => {
  test(`mutate ${types.POSTS_REQUEST} properly`, () => {
    mutations[types.POSTS_REQUEST](state)

    expect(state.isFetching).toBe(true)
  })

  test(`mutate ${types.POSTS_SUCCESS} properly`, () => {
    mutations[types.POSTS_SUCCESS](state, [])

    expect(Array.isArray(state.data)).toBe(true)
  })

  test(`mutate ${types.POSTS_ERROR} properly`, () => {
    mutations[types.POSTS_ERROR](state, new Error())

    expect(state.isError).toMatchObject(new Error())
  })
})

describe('Posts Getters', () => {
  test('add state to getters properly', () => {
    const posts = getters.posts(state)

    expect(posts).toBe(state)
  })
})
