<template>
  <div class="v-post-detail">
    <VLoading v-if="postDetail.isFetching" />
    <VCard v-else>
      <h2 class="title">
        {{ postDetail.data.title }}
      </h2>

      <div>
        Written by 
        <RouterLink 
          class="link"
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
    </VCard>

    <h3 class="text-base font-bold my-4">
      Comments
    </h3>

    <VLoading v-if="postCommentList.isFetching" />
    <VCard
      v-else
      v-for="item in postCommentList.data"
      :key="`comment-${item.id}`"
      class="mb-4"
    >
      <h3 class="title">
        {{ item.name }}
      </h3>

      <div class="description">
        {{ item.body }}
      </div>
    </VCard>
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
  POST_DETAIL_REQUEST, 
  POST_COMMENT_LIST_REQUEST 
} from '../stores/PostDetail/postDetailTypes'
import { AUTHOR_DETAIL_REQUEST } from '../stores/PostAuthor/postAuthorTypes'

import { SET_TITLE } from '@/stores/commonTypes'

import { VLoading } from 'atoms'
import { VCard } from 'molecules'

@Component({
  components: {
    VLoading,
    VCard
  }
})

export default class PostAuthor extends Vue {
  id = 0

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

  async mounted () {
    this.id = parseInt((this.$route.params.id as string))
    
    await this.postDetailRequest(this.id)
    this.authorDetailRequest(this.postDetail.data.userId)
    this.setTitle(this.postDetail.data.title)
    this.postCommentListRequest({ postId: this.id })
  }
}
</script>
