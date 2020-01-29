<template>
  <div>
    <Loading v-if="postIndex.isFetching" />
    <div v-else>
      <div 
        v-for="item in postIndex.data" 
        :key="item.id" 
      >
        <div>
          <h3>
            {{ item.title }}
          </h3>

          <div>
            {{ item.body }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State, Action } from 'vuex-class'

import { PostIndexState } from '../contracts/postContracts'
import { POST_REQUEST } from '../stores/PostIndex/postTypes'

import { Loading } from 'atoms'

@Component({
  components: {
    Loading
  }
})

export default class PostIndex extends Vue {
  @State(({ PostIndex }) => PostIndex) 
  public postIndex!: PostIndexState

  @Action(POST_REQUEST)
  public postRequest

  public async mounted() {
    await this.postRequest()
  }
}
</script>
