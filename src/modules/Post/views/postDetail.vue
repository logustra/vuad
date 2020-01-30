<template>
  <div class="post-detail">
    <Loading v-if="postDetail.isFetching" />
    <Card v-else>
      <h2 class="title">
        {{ postDetail.data.title }}
      </h2>

      <div class="description">
        {{ postDetail.data.body }}
      </div>
    </Card>

    <div class="comment">
      <h3>Comments</h3>

      <Loading v-if="postCommentList.isFetching" />
      <Card
        v-else
        v-for="item in postCommentList.data"
        :key="`comment-${item.id}`"
      >
        <h3 class="title">
          {{ item.name }}
        </h3>

        <div class="description">
          {{ item.body }}
        </div>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'

import { PostDetailState } from '../contracts/postDetailContracts'
import { POST_DETAIL_REQUEST, POST_COMMENT_LIST_REQUEST } from '../stores/PostDetail/postDetailTypes'

import { Loading } from 'atoms'
import { Card } from 'templates'

@Component({
  components: {
    Loading,
    Card
  }
})

export default class PostAuthor extends Vue {
  id: number = 0

  @Getter('postDetail') 
  public postDetail

  @Getter('postCommentList') 
  public postCommentList

  @Action(POST_DETAIL_REQUEST)
  public postDetailRequest

  @Action(POST_COMMENT_LIST_REQUEST)
  public postCommentListRequest

  async mounted() {
    this.id = parseInt((this.$route.params.id as string))
    await this.postDetailRequest(this.id)
    await this.postCommentListRequest({ postId: this.id })
  }
}
</script>

<style lang="scss" scoped>
.post-detail .card {
  margin-bottom: rem(16px);
}
</style>
