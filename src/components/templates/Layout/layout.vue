<template>
  <div class="layout">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Layout extends Vue {}
</script>

<style lang="scss">
.layout {
  width: rem(480px);
  padding: rem(16px);
}
</style>
