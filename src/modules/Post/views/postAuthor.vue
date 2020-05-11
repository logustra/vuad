<template>
  <div>
    <VLoading v-if="user.isFetching" />
    <VCard v-else>
      <h2 class="title">
        {{ user.data.name }}
      </h2>

      <VDivider />

      <div>
        Email: {{ user.data.email }} <br>
        Website: {{ user.data.website }}
      </div>
    </VCard>

    <h3 class="text-base font-bold my-4">
      Posted Article
    </h3>

    <PostList 
      :with-author="false"
      :data="posts"
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

import { USER_REQUEST } from '../stores/User/userTypes'
import { POSTS_REQUEST } from '../stores/Posts/postsTypes'

import { SET_TITLE } from '@/stores/Common/commonTypes'

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
  title = 'Author'

  @Getter('user')
  public user

  @Getter('posts')
  public posts

  @Action(SET_TITLE)
  public setTitle

  @Action(USER_REQUEST)
  public userRequest

  @Action(POSTS_REQUEST)
  public postsRequest

  async mounted () {
    this.id = parseInt(this.$route.params.id)
    
    await this.userRequest(this.id)
    this.setTitle(this.title)
    this.postsRequest({ userId: this.id })
  }
}
</script>
