<template>
  <div 
    class="base-icon"
    v-html="svg"
  />
</template>

<script>
  export default {
    name: 'BaseIcon',
    props: {
      svg: {
        type: String,
        default: null
      }
    },
  };
</script>
<style lang="scss">
  .base-icon {
    width: 38px;
    min-width: 38px;
    height: 38px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
    