import { storiesOf } from '@storybook/vue'

import VCard from './vcard.vue'

const stories = storiesOf('Atoms/VCard', module)

stories.add('Default', () => ({
  components: {
    VCard
  },

  template: `
    <VCard>
      <div class="title">
        Title
      </div>

      <div>
        Writter by <a class="link">John Doe</a>
      </div>

      <div class="description">
        Enim cillum aute veniam occaecat Lorem veniam sit magna deserunt fugiat amet ex. Velit veniam consectetur proident nostrud cillum culpa ullamco consequat consequat exercitation quis. Laborum ipsum magna officia fugiat in exercitation Lorem quis fugiat. Irure eiusmod magna laboris eiusmod incididunt dolor est.
      </div>
    </VCard>
  `
}))
