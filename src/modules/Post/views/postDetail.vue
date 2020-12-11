<template>
  <div>
    <VLoading v-if="post.isFetching" />
    <VError v-if="post.isError" />
    <VCard v-if="Object.keys(post.data).length !== 0">
      <h2 class="title">
        {{ post.data.title }}
      </h2>

      <div v-if="post.data.userId && users.data.length !== 0">
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
    <VError v-if="comments.isError" />
    <div v-if="comments.data.length !== 0">
      <VCard
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

import { SET_TITLE } from '@/stores/Common/commonTypes'
import { USERS_REQUEST } from '@/stores/Users/usersTypes'

import {
  VError,
  VLoading
} from 'atoms'
import { VCard } from 'molecules'

@Component({
  components: {
    VError,
    VLoading,
    VCard
  }
})

export default class PostAuthor extends Vue {
  id = 0
  title = 'Detail'

  @Action(SET_TITLE)
  public setTitle

  @Getter('users')
  public users

  @Action(USERS_REQUEST)
  public usersRequest

  @Getter('post')
  public post

  @Action(POST_REQUEST)
  public postRequest

  @Getter('comments')
  public comments

  @Action(COMMENTS_REQUEST)
  public commentsRequest

  public handleUser (userId: number) {
    return this.users.data.find(item => item.id === userId)
  }

  mounted () {
    this.id = parseInt(this.$route.params.id)

    this.setTitle(this.title)
    this.usersRequest()
    this.postRequest(this.id)
    this.commentsRequest({ postId: this.id })
  }
}
</script>

<style lang="scss" scoped>
  // your style
</style>
