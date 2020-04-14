<template>
  <div class="post-author">
    <Loading v-if="authorDetail.isFetching" />
    <Card v-else>
      <h2 class="title">
        {{ authorDetail.data.name }}
      </h2>
      <hr>
      <div>
        Email: {{ authorDetail.data.email }} <br>
        Website: {{ authorDetail.data.website }}
      </div>
    </Card>

    <h3>Posted Article</h3>
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

import { SET_TITLE } from '@/stores/Common/commonTypes'

import { PostList } from '../components'

import { Loading } from 'atoms'
import { Card } from 'molecules'

@Component({
  components: {
    PostList,
    Loading,
    Card
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
    await this.setTitle(this.authorDetail.data.name)
    await this.postAuthorRequest({ userId: this.id })
  }
}
</script>

<style lang="scss" scoped>
.post-author .card {
  margin-bottom: rem(16px);
}
</style>
