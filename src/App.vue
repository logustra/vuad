<template>
  <Layout>
    <RouterView />
  </Layout>
</template>

<script lang="ts">
import { 
  Vue, 
  Component 
} from 'vue-property-decorator'
import { Layout } from 'templates'

@Component({
  components: {
    Layout
  }
})

export default class App extends Vue {}
</script>
