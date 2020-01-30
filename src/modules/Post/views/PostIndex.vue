<template>
  <div>
    <h2>Vuad</h2>
    <PostList 
      :withAuthor="true"
      :data="postList"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'

import { AUTHOR_LIST_REQUEST, POST_LIST_REQUEST } from '../stores/PostIndex/postIndexTypes'

import { PostList } from '../components'

@Component({
  components: {
    PostList
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

  async mounted() {
    await this.authorListRequest()
    await this.postListRequest()
  }
}
</script>
