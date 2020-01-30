<template>
  <div class="post-detail">
    <Loading v-if="postDetail.isFetching" />
    <Card v-else>
      <h2 class="title">
        {{ postDetail.data.title }}
      </h2>
      <div>
        Written by 
        <RouterLink 
          :to="{ 
            name: 'post.author', 
            params: { 
              id: postDetail.data.userId 
            }
          }"
        >
          {{ authorDetail.data.name }}
        </RouterLink>
      </div>

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
import { AUTHOR_DETAIL_REQUEST } from '../stores/postAuthor/postAuthorTypes'

import { SET_TITLE } from '@/stores/Common/commonTypes'

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

  @Getter('authorDetail') 
  public authorDetail

  @Getter('postCommentList') 
  public postCommentList

  @Action(POST_DETAIL_REQUEST)
  public postDetailRequest

  @Action(SET_TITLE)
  public setTitle

  @Action(AUTHOR_DETAIL_REQUEST)
  public authorDetailRequest

  @Action(POST_COMMENT_LIST_REQUEST)
  public postCommentListRequest

  async mounted() {
    this.id = parseInt((this.$route.params.id as string))
    await this.postDetailRequest(this.id)
    await this.authorDetailRequest(this.postDetail.data.userId)
    await this.setTitle(this.postDetail.data.title)
    await this.postCommentListRequest({ postId: this.id })
  }
}
</script>

<style lang="scss" scoped>
.post-detail .card {
  margin-bottom: rem(16px);

  a {
    text-decoration: none;
  }
}
</style>
