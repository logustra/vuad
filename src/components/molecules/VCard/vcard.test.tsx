import { shallowMount } from '@vue/test-utils'

import VCard from './vcard.vue'

describe('VCard', () => {
  test('render component properly', () => {
    const wrapper = shallowMount(VCard)

    expect(wrapper.findComponent(VCard).exists()).toBe(true)
  })
})
