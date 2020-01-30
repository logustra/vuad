<template>
  <div>
    <h2>Vuad</h2>
    <PostList />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State, Action } from 'vuex-class'

import { PostList } from '../components'

@Component({
  components: {
    PostList
  }
})

export default class PostIndex extends Vue {}
</script>
