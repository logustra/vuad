import { shallowMount } from '@vue/test-utils'

import store from '@/store'

import VLayout from './vlayout.vue'

describe('VLayout', () => {
  const wrapper: any = shallowMount(VLayout, { store })

  test('render component properly', () => {
    wrapper.vm.handleOffline()

    expect(wrapper.findComponent(VLayout).exists()).toBe(true)
  })

  test('destroy component properly', () => {
    wrapper.destroy()

    expect(wrapper.findComponent(VLayout).exists()).toBe(false)
  })
})
