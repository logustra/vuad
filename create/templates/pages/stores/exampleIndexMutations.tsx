import * as types from './exampleIndexTypes'

import { 
  ExampleIndexState,
  ExampleIndexModel
} from '../typings/exampleIndexTypings'

export default {
  [types.EXAMPLE_REQUEST]: (state: ExampleIndexState) => {
    state.isFetching = true
  },

  [types.EXAMPLE_SUCCESS]: (state: ExampleIndexState, response: ExampleIndexModel[]) => {
    state.data = response
  },

  [types.EXAMPLE_ERROR]: (state: ExampleIndexState, response: boolean) => {
    state.data = []
    state.isFetching = false
    state.isError = response
  }
}
