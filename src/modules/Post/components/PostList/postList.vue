<template>
  <div class="post-list">
    <Loading v-if="postList.isFetching" />
    <div v-else>
      <div 
        v-for="item in postList.data" 
        :key="item.id" 
      >
        <Card>
          <h3 class="title">
            {{ item.title }}
          </h3>

          <div 
            v-if="item.author"
            class="author"
          >
            Written by {{ item.author.name }}
          </div>

          <div>
            {{ item.body }}
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State, Action } from 'vuex-class'

import { PostListState } from '../../contracts/postListContracts'
import { POST_LIST_REQUEST, AUTHOR_LIST_REQUEST } from '../../stores/PostList/postListTypes'

import { Loading } from 'atoms'
import { Card } from 'templates'

@Component({
  components: {
    Loading,
    Card
  }
})

export default class PostList extends Vue {
  @State(({ PostList }) => PostList.postList) 
  public postList!: PostListState

  @Action(AUTHOR_LIST_REQUEST)
  public authorListRequest

  @Action(POST_LIST_REQUEST)
  public postListRequest

  public async mounted() {
    await this.authorListRequest()
    await this.postListRequest()
  }
}
</script>

<style lang="scss">
.post-list .card {
  margin-bottom: rem(16px)
}
</style>
