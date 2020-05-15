import { storiesOf } from '@storybook/vue'

import VLoading from './vloading.vue'

const stories = storiesOf('Atoms/VLoading', module)

stories.add('Default', () => ({
  components: {
    VLoading
  },

  template: '<VLoading />'
}))
