<template>
  <div v-if="show" class="base-modal-wrapper">
    <div class="base-modal">
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BaseModal',
    props: {
      show: {
        type: Boolean,
        default: false
      }
    }
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
  }
</style>
      