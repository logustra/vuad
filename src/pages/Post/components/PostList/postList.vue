<template>
  <div class="post-list">
    <VLoading v-if="data.isFetching" />
    <div v-else>
      <div 
        v-for="item in data.data" 
        :key="`post-${item.id}`" 
      >
        <VCard>
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
        </VCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { 
  Vue, 
  Component 
} from 'vue-property-decorator'

import { VLoading } from 'atoms'
import { VCard } from 'molecules'

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
    VLoading,
    VCard
  }
})

export default class PostList extends Props {}
</script>

<style lang="scss">
.post-list .v-card {
  margin-bottom: rem(16px)
}
</style>
