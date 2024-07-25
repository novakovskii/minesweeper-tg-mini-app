<template>
  <HotWalletProvider>
    <RouterView />
  </HotWalletProvider>
</template>

<script>
  import HotWalletProvider from './components/HotWalletProvider.vue';

  export default {
    components: {
      HotWalletProvider
    },
    name: 'App'
  };

</script>

<style lang="scss">
  body {
    background-color: var(--color-bg-primary);
  }
  
  #app {
    background-color: var(--color-bg-primary);
    font-family: var(--font-family-primary);
    color: var(--color-text-primary);
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
  }
</style>