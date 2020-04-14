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
  padding: rem(16px);
  border-radius: rem(6px);
  background-color: $white;

  > .title {
    color: $black;
    text-decoration: none;
    margin-top: 0;
    margin-bottom: rem(2px);
    font-size: rem(16px);
    font-weight: 700;
  }

  // stylelint-disable-next-line
  .link {
    text-decoration: none;
  }

  > .description {
    margin-top: rem(12px);
  }
}
</style>
