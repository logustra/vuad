<template>
  <div class="v-error">
    Oops, something went wrong :(
  </div>
</template>

<script lang="ts">
import {
  Vue,
  Component
} from 'vue-property-decorator'

@Component
export default class VError extends Vue {}
</script>
