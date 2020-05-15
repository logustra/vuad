import { storiesOf } from '@storybook/vue'

import VDivider from './vdivider.vue'

const stories = storiesOf('Atoms/VDivider', module)

stories.add('Default', () => ({
  components: {
    VDivider
  },

  template: '<VDivider />'
}))
