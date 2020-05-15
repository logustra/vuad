import { storiesOf } from '@storybook/vue'

import VError from './verror.vue'

const stories = storiesOf('Atoms/VError', module)

stories.add('Default', () => ({
  components: {
    VError
  },

  template: '<VError />'
}))
