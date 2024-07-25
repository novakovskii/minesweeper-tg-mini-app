<template>
  <div class="base-card-wrapper">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'BaseCard'
  };
</script>
<style lang="scss">
  .base-card-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0 16px;
    overflow: auto;
    max-height: 100%;

    .base-card {

      &:last-child {
        margin-bottom: 16px;
      }
    }
  }
</style>
      