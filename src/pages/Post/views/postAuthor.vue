<template>
  <div class="post-author">
    <VLoading v-if="authorDetail.isFetching" />
    <VCard v-else>
      <h2 class="title">
        {{ authorDetail.data.name }}
      </h2>

      <VDivider />

      <div>
        Email: {{ authorDetail.data.email }} <br>
        Website: {{ authorDetail.data.website }}
      </div>
    </VCard>

    <h3 class="text-base font-bold my-4">
      Posted Article
    </h3>

    <PostList 
      :with-author="false"
      :data="postAuthor"
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
  POST_AUTHOR_REQUEST, 
  AUTHOR_DETAIL_REQUEST 
} from '../stores/PostAuthor/postAuthorTypes'

import { SET_TITLE } from '@/stores/commonTypes'

import { PostList } from '../components'

import { 
  VDivider,
  VLoading 
} from 'atoms'
import { VCard } from 'molecules'

@Component({
  components: {
    PostList,
    VLoading,
    VDivider,
    VCard
  }
})

export default class PostAuthor extends Vue {
  id = 0

  @Getter('authorDetail')
  public authorDetail

  @Getter('postAuthor')
  public postAuthor

  @Action(AUTHOR_DETAIL_REQUEST)
  public authorDetailRequest
  
  @Action(SET_TITLE)
  public setTitle

  @Action(POST_AUTHOR_REQUEST)
  public postAuthorRequest

  async mounted () {
    this.id = parseInt((this.$route.params.id as string))
    
    await this.authorDetailRequest(this.id)
    this.setTitle(this.authorDetail.data.name)
    this.postAuthorRequest({ userId: this.id })
  }
}
</script>
