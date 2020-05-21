import * as types from '@/stores/Common/commonTypes'
import { CommonState } from '@/typings/commonTypings'
import getters from '@/stores/Common/commonGetters'
import mutations from '@/stores/Common/commonMutations'
import actions from '@/stores/Common/commonActions'

const state: CommonState = {
  title: 'Vuad',
  isOffline: false
}

describe('Common Actions', () => {
  const commit = jest.fn()

  test(`dispatch ${types.SET_TITLE} properly`, () => {
    const response = 'Home'

    actions[types.SET_TITLE]({ commit }, response)

    expect(commit).toHaveBeenCalledWith(types.SET_TITLE, response)
  })

  test(`dispatch ${types.SET_OFFLINE} properly`, () => {
    const response = true

    actions[types.SET_OFFLINE]({ commit }, response)

    expect(commit).toHaveBeenCalledWith(types.SET_OFFLINE, response)
  })
})

describe('Common Mutations', () => {
  test(`mutate ${types.SET_TITLE} properly`, () => {
    const response = 'Vuad'

    mutations[types.SET_TITLE](state, response)

    expect(state.title).toBe(response)
  })

  test(`mutate ${types.SET_OFFLINE} properly`, () => {
    const response = true

    mutations[types.SET_OFFLINE](state, response)

    expect(state.isOffline).toBe(response)
  })
})

describe('Common Getters', () => {
  test('add state to getters properly', () => {
    const common = getters.common(state)

    expect(common).toBe(state)
  })
})
