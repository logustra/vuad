import * as types from '../../stores/Example/exampleTypes'
import { ExampleState } from '../../typings/exampleTypings'
import getters from '../../stores/Example/exampleGetters'
import mutations from '../../stores/Example/exampleMutations'
import actions from '../../stores/Example/exampleActions'
import { exampleService } from '../../services'

const state: ExampleState = {
  data: [],
  isFetching: true,
  isError: false
}

describe('Example Actions', () => {
  const commit = jest.fn()
  const response = {
    data: {}
  }

  afterEach(() => {
    jest.resetAllMocks()
  })

  test(`dispatch ${types.EXAMPLE_SUCCESS} properly`, async () => {
    exampleService.get = jest.fn().mockResolvedValue(response)

    await actions[types.EXAMPLE_REQUEST]({ commit })

    expect(commit.mock.calls[1][0] === types.EXAMPLE_SUCCESS).toBe(true)
  })

  test(`dispatch ${types.EXAMPLE_ERROR} properly`, async () => {
    exampleService.get = jest.fn().mockRejectedValue(response)

    await actions[types.EXAMPLE_REQUEST]({ commit })

    expect(commit.mock.calls[1][0] === types.EXAMPLE_ERROR).toBe(true)
  })
})

describe('Example Mutations', () => {
  test(`mutate ${types.EXAMPLE_REQUEST} properly`, () => {
    mutations[types.EXAMPLE_REQUEST](state)

    expect(state.isFetching).toBe(true)
  })

  test(`mutate ${types.EXAMPLE_SUCCESS} properly`, () => {
    mutations[types.EXAMPLE_SUCCESS](state, [])

    expect(Array.isArray(state.data)).toBe(true)
  })

  test(`mutate ${types.EXAMPLE_ERROR} properly`, () => {
    mutations[types.EXAMPLE_ERROR](state, new Error())

    expect(state.isError).toMatchObject(new Error())
  })
})

describe('Example Getters', () => {
  test('add state to getters properly', () => {
    const example = getters.example(state)

    expect(example).toBe(state)
  })
})
