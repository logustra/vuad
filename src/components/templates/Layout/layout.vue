<template>
  <div class="layout">
    <div class="layout-container">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { 
  Vue, 
  Component 
} from 'vue-property-decorator'

@Component
export default class Layout extends Vue {}
</script>

<style lang="scss">
.layout {
  display: flex;
  justify-content: center;

  &-container {
    width: rem(480px);
    padding: rem(16px);
  }
}
</style>
