import { shallowMount } from '@vue/test-utils'

import VDivider from './vdivider.vue'

describe('VDivider', () => {
  test('render component properly', () => {
    const wrapper = shallowMount(VDivider)

    expect(wrapper.findComponent(VDivider).exists()).toBe(true)
  })
})
