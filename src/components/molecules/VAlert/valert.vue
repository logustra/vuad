<template>
  <div class="v-alert">
    <slot />
  </div>
</template>

<script lang="ts">
import { 
  Vue, 
  Component 
} from 'vue-property-decorator'

@Component
export default class VAlert extends Vue {}
</script>

<style lang="scss">
.v-alert {
  background-color: rgba($black, $opacity-50);
  @apply
    fixed
    top-0
    left-0
    w-screen
    p-2
    text-center
    text-white;
}
</style>
