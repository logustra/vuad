<template>
  <div>
    <h2>Vuad</h2>
    <VLoading v-if="postList.isFetching" />
    <PostList 
      v-else
      :with-author="true"
      :data="postList"
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

import { 
  AUTHOR_LIST_REQUEST, 
  POST_LIST_REQUEST 
} from '../stores/PostIndex/postIndexTypes'

import { PostList } from '../components'

import { VLoading } from 'atoms'

@Component({
  components: {
    PostList,
    VLoading
  }
})

export default class PostIndex extends Vue {
  @Getter('authorList')
  public authorList

  @Getter('postList')
  public postList

  @Action(AUTHOR_LIST_REQUEST)
  public authorListRequest

  @Action(POST_LIST_REQUEST)
  public postListRequest

  async mounted () {
    await this.authorListRequest()
    await this.postListRequest()
  }
}
</script>
