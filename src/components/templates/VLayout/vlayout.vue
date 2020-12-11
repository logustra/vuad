<template>
  <div class="v-layout">
    <div
      v-if="common.isOffline"
      class="offline"
    >
      You're Offline
    </div>

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

import { SET_OFFLINE } from '@/stores/Common/commonTypes'

@Component
export default class VLayout extends Vue {
  @Getter('common')
  public common

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
@import '@/styles/utils/functions.scss';

.v-layout {
  @apply
    flex
    justify-center;

  > .offline {
    @apply
      fixed
      bg-red-500
      text-white
      text-center
      p-1
      w-full
      left-0
      z-20;
  }

  > .container {
    @apply p-4;

    width: rem(480px);
  }
}
</style>
