<template>
  <div>
    <h2 class="text-xl font-bold mb-5">
      Vuad
    </h2>

    <PostList
      :with-author="true"
      :users="users"
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

import { POSTS_REQUEST } from '../stores/Posts/postsTypes'

import { USERS_REQUEST } from '@/stores/Users/usersTypes'

import { PostList } from '../components'

import { VLoading } from 'atoms'

@Component({
  components: {
    PostList,
    VLoading
  }
})

export default class PostIndex extends Vue {
  @Getter('users')
  public users

  @Action(USERS_REQUEST)
  public usersRequest

  @Getter('posts')
  public posts

  @Action(POSTS_REQUEST)
  public postsRequest

  mounted () {
    this.usersRequest()
    this.postsRequest()
  }
}
</script>

<style lang="scss" scoped>
  // your style
</style>
