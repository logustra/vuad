<template>
  <div class="post-list">
    <Loading v-if="data.isFetching" />
    <div v-else>
      <div 
        v-for="item in data.data" 
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

import { Loading } from 'atoms'
import { Card } from 'templates'

const Props = Vue.extend({
  props: {
    withAuthor: {
      type: Boolean,
      required: false,
      default: false
    },

    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
})

@Component({
  components: {
    Loading,
    Card
  }
})

export default class PostList extends Props {}
</script>

<style lang="scss">
.post-list .card {
  margin-bottom: rem(16px)
}
</style>
