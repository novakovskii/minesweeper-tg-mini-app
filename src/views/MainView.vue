<template>
  <TheHeader />
  <BaseTabs 
    :tabs="tabs"
  >
    <template #tab-content-0>
      <ThePlayContent />
    </template>
    <template #tab-content-1>
      <TheShopContent />
    </template>
    <template #tab-content-2>
      <TheHistoryContent />
    </template>
  </BaseTabs>
</template>

<script>
  import TheHeader from '../components/TheHeader.vue';
  import BaseTabs from '../components/BaseElements/BaseTabs.vue';
  import ThePlayContent from '../components/ThePlayContent.vue';
  import TheShopContent from '../components/TheShopContent.vue';
  import TheHistoryContent from '../components/TheHistoryContent.vue';

  export default {
    name: 'MainView',
    components: {
      TheHeader,
      BaseTabs,
      ThePlayContent,
      TheShopContent,
      TheHistoryContent
    },
    data() {
      return {
        tabs: [
          'Play',
          'Shop',
          'History'
        ]
      }
    }
  }
</script>

<style lang="scss">
  
</style>