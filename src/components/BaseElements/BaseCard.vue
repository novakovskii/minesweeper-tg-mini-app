<template>
  <div class="base-card">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'BaseCard'
  };
</script>
<style lang="scss">
  .base-card {
    gap: 12px;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    border-radius: 16px;
  }
</style>
      