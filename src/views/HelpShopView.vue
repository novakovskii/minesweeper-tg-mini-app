<template>
  <TheHeader>
    <div class="help-shop-view__header-title">How to buy items in the shop?</div>
  </TheHeader>
  <div class="help-view__paragraph">
    <div class="help-view__title">Purchasing Items</div>
    <div class="help-view__text">
      <ul>
        <li>Go to shop</li>
        <li>Select an item</li>
        <li>Make sure you have enough XP and click "Buy"</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import TheHeader from '../components/TheHeader.vue';

  export default {
    name: 'HelpShopView',
    components: {
      TheHeader
    }
  }
</script>

<style lang="scss">
  .help-shop-view {


    &__header-title {
      text-align: center;
      width: 100%;
      font-size: 16px;
      font-weight: 600
    }
  }
</style>