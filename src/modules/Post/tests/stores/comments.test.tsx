import * as types from '../../stores/Comments/commentsTypes'
import { CommentsState } from '../../typings/commentsTypings'
import getters from '../../stores/Comments/commentsGetters'
import mutations from '../../stores/Comments/commentsMutations'
import actions from '../../stores/Comments/commentsActions'
import { postService } from '../../services'

const state: CommentsState = {
  data: [],
  isFetching: true,
  isError: false
}

describe('Comments Actions', () => {
  const commit = jest.fn()
  const params = {
    postId: 1
  }

  const response = {
    data: {}
  }

  afterEach(() => {
    jest.resetAllMocks()
  })

  test(`dispatch ${types.COMMENTS_SUCCESS} properly`, async () => {
    postService.get = jest.fn().mockResolvedValue(response)

    await actions[types.COMMENTS_REQUEST]({ commit }, params)

    expect(commit.mock.calls[1][0] === types.COMMENTS_SUCCESS).toBe(true)
  })

  test(`dispatch ${types.COMMENTS_ERROR} properly`, async () => {
    postService.get = jest.fn().mockRejectedValue(response)

    await actions[types.COMMENTS_REQUEST]({ commit }, params)

    expect(commit.mock.calls[1][0] === types.COMMENTS_ERROR).toBe(true)
  })
})

describe('Comments Mutations', () => {
  test(`mutate ${types.COMMENTS_REQUEST} properly`, () => {
    mutations[types.COMMENTS_REQUEST](state)

    expect(state.isFetching).toBe(true)
  })

  test(`mutate ${types.COMMENTS_SUCCESS} properly`, () => {
    mutations[types.COMMENTS_SUCCESS](state, [])

    expect(Array.isArray(state.data)).toBe(true)
  })

  test(`mutate ${types.COMMENTS_ERROR} properly`, () => {
    mutations[types.COMMENTS_ERROR](state, new Error())

    expect(state.isError).toMatchObject(new Error())
  })
})

describe('Comments Getters', () => {
  test('add state to getters properly', () => {
    const comments = getters.comments(state)

    expect(comments).toBe(state)
  })
})
