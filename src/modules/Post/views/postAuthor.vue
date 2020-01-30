<template>
  <div class="post-author">
    <Card>
      <h2 class="title">
        {{ author.name }}
      </h2>

      <hr />

      <div>
        Email: {{ author.email }} <br />
        Website: {{ author.website }}
      </div>
    </Card>

    <h3>Posted Article</h3>
    <PostList 
      :withAuthor="false"
      byAuthor
      :author="parseInt($route.params.id)"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State, Action } from 'vuex-class'

import { AuthorListModel } from '../contracts/postListContracts'

import { PostList } from '../components'

import { Card } from 'templates'

@Component({
  components: {
    PostList,
    Card
  }
})

export default class PostAuthor extends Vue {
  author: {[key: string]: AuthorListModel} = {}

  mounted() {
    this.author = JSON.parse((this.$route.query.author as string))
  }
}
</script>

<style lang="scss" scoped>
.post-author .card {
  margin-bottom: rem(16px);
}
</style>
