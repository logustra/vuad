import { shallowMount } from '@vue/test-utils'

import VExample from './vexample.vue'

describe('VExample', () => {
  test('render component properly', () => {
    const wrapper = shallowMount(VExample)

    expect(wrapper.findComponent(VExample).exists()).toBe(true)
  })
})
