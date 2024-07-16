<template>
  <HotWalletProvider>
    <Child />
  </HotWalletProvider>
</template>

<script>
import HotWalletProvider from './components/HotWalletProvider.vue';
import Child from './components/Child.vue'

export default {
  components: {
    HotWalletProvider,
    Child
  }
};

</script>

<style lang="scss">

  body {
    background-color: var(--color-bg-primary);
    font-family: var(--font-family-primary);
  }
</style>