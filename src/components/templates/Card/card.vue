<template>
  <div class="card">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Card extends Vue {}
</script>

<style lang="scss">
.card {
  padding: rem(16px);
  border-radius: rem(6px);
  background-color: $white;

  .title {
    margin-top: 0;
    margin-bottom: rem(2px);
    font-weight: 700;
  }

  .author {
    margin-bottom: rem(12px);
  }
}
</style>
