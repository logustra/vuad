import { shallowMount } from '@vue/test-utils'

import VLoading from './vloading.vue'

describe('VLoading', () => {
  test('render component properly', () => {
    const wrapper = shallowMount(VLoading)

    expect(wrapper.findComponent(VLoading).exists()).toBe(true)
  })
})
