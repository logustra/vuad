import { storiesOf } from '@storybook/vue'

import VExample from './vexample.vue'

const stories = storiesOf('Atoms/VExample', module)

stories.add('Default', () => ({
  components: {
    VExample
  },

  template: '<VExample />'
}))
