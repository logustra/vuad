<template>
  <div>
    <VLoading v-if="post.isFetching" />
    <VCard v-else>
      <h2 class="title">
        {{ post.data.title }}
      </h2>

      <div v-if="post.data.userId && users.data.length">
        Written by 
        <RouterLink 
          class="link"
          :to="{ 
            name: 'post.author', 
            params: { 
              id: post.data.userId 
            }
          }"
        >
          {{ handleUser(post.data.userId).name }}
        </RouterLink>
      </div>

      <div class="description">
        {{ post.data.body }}
      </div>
    </VCard>

    <h3 class="text-base font-bold my-4">
      Comments
    </h3>

    <VLoading v-if="comments.isFetching" />
    <VCard
      v-else
      v-for="item in comments.data"
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

import { POST_REQUEST } from '../stores/Post/postTypes'
import { COMMENTS_REQUEST } from '../stores/Comments/commentsTypes'

import { SET_TITLE } from 'stores/Common/commonTypes'
import { USERS_REQUEST } from 'stores/Users/usersTypes'

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
  title = 'Detail'

  @Getter('users') 
  public users

  @Getter('post') 
  public post

  @Getter('comments') 
  public comments

  @Action(SET_TITLE)
  public setTitle

  @Action(USERS_REQUEST)
  public usersRequest

  @Action(POST_REQUEST)
  public postRequest

  @Action(COMMENTS_REQUEST)
  public commentsRequest

  public handleUser (userId: number) {
    return this.users.data.find(item => item.id === userId)
  }

  async mounted () {
    this.id = parseInt(this.$route.params.id)
    
    this.usersRequest()
    await this.postRequest(this.id)
    this.setTitle(this.title)
    this.commentsRequest({ postId: this.id })
  }
}
</script>
