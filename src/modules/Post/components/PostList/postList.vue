<template>
  <div class="post-list">
    <Loading v-if="postList.isFetching" />
    <div v-else>
      <div 
        v-for="item in postList.data" 
        :key="`post-${item.id}`" 
      >
        <Card>
          <RouterLink 
            :to="{
              name: 'post.detail',
              params: {
                id: item.id
              }
            }"
          >
            <h3 class="title">
              {{ item.title }}
            </h3>
          </RouterLink>

          <div v-if="withAuthor && item.author">
            Written by 
            <RouterLink 
              :to="{ 
                name: 'post.author', 
                params: { 
                  id: item.userId 
                },
                query: {
                  author: JSON.stringify(item.author)
                }
              }"
            >
              {{ item.author.name }}
            </RouterLink>
          </div>

          <div class="description">
            {{ item.body }}
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'

import { PostListState } from '../../contracts/postListContracts'
import { POST_LIST_REQUEST, AUTHOR_LIST_REQUEST } from '../../stores/PostList/postListTypes'

import { Loading } from 'atoms'
import { Card } from 'templates'

const Props = Vue.extend({
  props: {
    withAuthor: {
      type: Boolean,
      required: false,
      default: true
    },

    byAuthor: {
      type: Boolean,
      required: false,
      default: false
    },

    author: {
      type: Number,
      required: false,
      default: 0
    }
  }
})

@Component({
  components: {
    Loading,
    Card
  }
})

export default class PostList extends Props {
  @Getter('authorList') 
  public authorList

  @Getter('postList') 
  public postList

  @Action(AUTHOR_LIST_REQUEST)
  public authorListRequest

  @Action(POST_LIST_REQUEST)
  public postListRequest

  public async mounted() {
    await this.authorListRequest()
    
    if (this.byAuthor) {
      await this.postListRequest({ userId: this.author })
    } else {
      await this.postListRequest()
    }
  }
}
</script>

<style lang="scss">
.post-list .card {
  margin-bottom: rem(16px)
}
</style>
