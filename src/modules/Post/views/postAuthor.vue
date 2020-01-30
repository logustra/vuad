<template>
  <div>
    <h2>{{ $route.query.name }}</h2>
    <PostList 
      :withAuthor="false"
      byAuthor
      :author="$route.params.id"
    />
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

export default class PostAuthor extends Vue {}
</script>
