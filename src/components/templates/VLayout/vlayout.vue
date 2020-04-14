<template>
  <div class="v-layout">
    <div class="container">
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
export default class VLayout extends Vue {}
</script>

<style lang="scss">
.layout {
  display: flex;
  justify-content: center;

  > .container {
    width: rem(480px);
    padding: rem(16px);
  }
}
</style>
