<template>
  <div>
    Bismillah, Hello World!
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

import { EXAMPLE_REQUEST } from '../stores/exampleIndexTypes'

import { PostList } from '../components'

import { VLoading } from 'atoms'

@Component({
  components: {
    PostList,
    VLoading
  }
})

export default class PostIndex extends Vue {
  @Getter('exampleState')
  public exampleState

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
