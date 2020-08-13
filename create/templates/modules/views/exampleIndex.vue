<template>
  <div>
    Bismillah, Hello World!
    
    <Fa 
      :icon="icons.fasEnvelope" 
      class="ml-1"
    />
    <Fa 
      :icon="icons.farEnvelope" 
      class="ml-1"
    />
  </div>
</template>

<script lang="ts">
import { 
  Vue, 
  Component 
} from 'vue-property-decorator'
import { 
  Getter, 
  Action 
} from 'vuex-class'

import { EXAMPLE_REQUEST } from '../stores/Example/exampleTypes'

import { faEnvelope as fasEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope as farEnvelope } from '@fortawesome/free-regular-svg-icons'

import { VLoading } from 'atoms'

@Component({
  components: {
    VLoading
  }
})

export default class ExampleIndex extends Vue {
  icons = {
    fasEnvelope,
    farEnvelope
  }

  @Getter('example')
  public example

  @Action(EXAMPLE_REQUEST)
  public exampleRequest

  async mounted () {
    await this.exampleRequest()
  }
}
</script>

<style lang="scss" scoped>
  // your style
</style>
