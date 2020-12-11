<template>
  <VLayout>
    <RouterView />
  </VLayout>
</template>

<script lang="ts">
import {
  Vue,
  Component
} from 'vue-property-decorator'
import { VLayout } from 'templates'

@Component({
  components: {
    VLayout
  }
})

export default class App extends Vue {}
</script>
