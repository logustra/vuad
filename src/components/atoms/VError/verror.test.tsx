import { shallowMount } from '@vue/test-utils'

import VError from './verror.vue'

describe('VError', () => {
  test('render component properly', () => {
    const wrapper = shallowMount(VError)

    expect(wrapper.findComponent(VError).exists()).toBe(true)
  })
})
