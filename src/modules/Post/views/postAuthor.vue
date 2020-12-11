<template>
  <div>
    <VLoading v-if="user.isFetching" />
    <VError v-if="user.isError" />
    <VCard v-if="Object.keys(user.data).length !== 0">
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
  VError,
  VLoading
} from 'atoms'
import { VCard } from 'molecules'

@Component({
  components: {
    PostList,
    VDivider,
    VError,
    VLoading,
    VCard
  }
})

export default class PostAuthor extends Vue {
  id = 0
  title = 'Author'

  @Action(SET_TITLE)
  public setTitle

  @Getter('user')
  public user

  @Action(USER_REQUEST)
  public userRequest

  @Getter('posts')
  public posts

  @Action(POSTS_REQUEST)
  public postsRequest

  mounted () {
    this.id = parseInt(this.$route.params.id)

    this.setTitle(this.title)
    this.userRequest(this.id)
    this.postsRequest({ userId: this.id })
  }
}
</script>

<style lang="scss" scoped>
  // your style
</style>
