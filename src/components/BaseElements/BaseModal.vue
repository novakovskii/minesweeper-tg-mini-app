<template>
  <div 
    v-if="show" 
    class="base-modal-wrapper"
  >
    <div 
      class="base-modal" 
      :class="{'base-modal--closable': closable}"
    >
      <div 
        v-if="closable" 
        class="base-modal__close"
        @click="$emit('close')"
      >
        <BaseIcon :svg="stateStore.icons.cross" />
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
  import BaseIcon from './BaseIcon.vue'
  import { mapStores } from 'pinia'
  import { useStateStore } from '../../stores/state'

  export default {
    name: 'BaseModal',
    props: {
      show: {
        type: Boolean,
        default: false
      },
      closable: {
        type: Boolean,
        default: false
      }
    },
    components: {
      BaseIcon
    },
    computed: {
      ...mapStores(useStateStore)
    },
  };
</script>
<style lang="scss">
  .base-modal-wrapper {
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 2;
    background-color: var(--color-overlay);
    backdrop-filter: blur(2px);
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    box-sizing: border-box;
  }

  .base-modal {
    width: 100%;
    background-color: var(--color-bg-primary);
    border-radius: 16px;
    padding: 16px;
    position: relative;

    &--closable {
      padding-top: 40px;
    }

    &__close {
      position: absolute;
      right: 0;
      top: 0;
      cursor: pointer;
    }
  }
</style>
      