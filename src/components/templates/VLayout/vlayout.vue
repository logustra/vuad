<template>
  <div class="v-layout">
    <VAlert v-if="isOffline">
      You're Offline
    </VAlert>

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
import { 
  Getter, 
  Action 
} from 'vuex-class'

import { SET_OFFLINE } from '@/stores/commonTypes'

import { VAlert } from 'molecules'

@Component({
  components: {
    VAlert
  }
})

export default class VLayout extends Vue {
  @Getter('isOffline') 
  public isOffline

  @Action(SET_OFFLINE)
  public setOffline

  public beforeMount () {
    window.addEventListener('online', this.handleOffline)
    window.addEventListener('offline', this.handleOffline)
  }

  public beforeDestroy () {
    window.removeEventListener('online', this.handleOffline)
    window.removeEventListener('offline', this.handleOffline)
  }

  public handleOffline () {
    this.setOffline(!window.navigator.onLine)
  }
}
</script>

<style lang="scss">
.v-layout {
  display: flex;
  justify-content: center;

  > .container {
    width: rem(480px);
    padding: rem(16px);
  }
}
</style>
