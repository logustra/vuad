import { storiesOf } from '@storybook/vue'

import store from '@/store'

import VLayout from './vlayout.vue'

const stories = storiesOf('Templates/VLayout', module)

stories.add('Default', () => ({
  store,
  
  components: {
    VLayout
  },

  template: '<VLayout>Home</VLayout>'
}))
