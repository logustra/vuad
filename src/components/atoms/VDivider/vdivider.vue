<template>
  <hr class="v-divider">
</template>

<script lang="ts">
import { 
  Vue, 
  Component 
} from 'vue-property-decorator'

@Component
export default class VDivider extends Vue {}
</script>

<style lang="scss">
.v-divider {
  @apply
    border-black
    my-2
}
</style>
