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
  }
</style>
      