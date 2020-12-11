<template>
  <div class="v-post-list">
    <VLoading v-if="data.isFetching" />
    <VError v-if="data.isError" />
    <div v-if="data.data.length !== 0">
      <div
        v-for="item in data.data"
        :key="`post-${item.id}`"
      >
        <VCard class="mb-4">
          <RouterLink
            class="title"
            :to="{
              name: 'post.detail',
              params: {
                id: item.id
              }
            }"
          >
            {{ item.title }}
          </RouterLink>

          <div v-if="withAuthor && users && users.data.length !== 0">
            Written by
            <RouterLink
              class="link"
              :to="{
                name: 'post.author',
                params: {
                  id: item.userId
                }
              }"
            >
              {{ handleUser(item.userId).name }}
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

import {
  VError,
  VLoading
} from 'atoms'
import { VCard } from 'molecules'

const Props = Vue.extend({
  props: {
    withAuthor: {
      type: Boolean,
      required: false,
      default: false
    },

    users: {
      type: Object,
      required: false,
      default: () => ({})
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
    VError,
    VLoading,
    VCard
  }
})

export default class PostList extends Props {
  public handleUser (userId: number) {
    if (this.users) return this.users.data.find(item => item.id === userId)
  }
}
</script>
