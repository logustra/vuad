<template>
  <div class="v-card">
    <slot />
  </div>
</template>

<script lang="ts">
import {
  Vue,
  Component
} from 'vue-property-decorator'

@Component
export default class VCard extends Vue {}
</script>

<style lang="scss">
.v-card {
  @apply
    p-4
    rounded
    bg-white;

  > .title {
    @apply
      mt-0
      font-bold
      text-base
      text-black
      no-underline;
  }

  // stylelint-disable-next-line
  .link {
    @apply
      text-blue-700
      no-underline;
  }

  > .description {
    @apply mt-3;
  }
}
</style>
