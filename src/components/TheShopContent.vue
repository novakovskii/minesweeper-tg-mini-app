<template>
  <BaseCardWrapper class="the-shop-content">
    <BaseCard 
      class="the-shop-content__item"
      v-for="(item, index) in stateStore.shopItems"
      :key="index"
      @click="$emit('open', item)"
    >
      <div class="the-shop-content__item-info">
        <div class="the-shop-content__fireboom-wrapper">
          <img src="/fireboom.png" />
          <div class="the-shop-content__fireboom-badge">{{ item.quantity }}</div>
        </div>
        <div>
          <div class="the-shop-content__item-name">{{ item.name }} × {{ item.quantity }}</div>
          <div><span class="text-secondary--text">Price:</span> {{ item.price }} XP</div>
        </div>
      </div>
      <BaseIcon :svg="stateStore.icons['arrow-right']" />
    </BaseCard>
  </BaseCardWrapper>
</template>

<script>
  import BaseCardWrapper from './BaseElements/BaseCardWrapper.vue';
  import BaseCard from './BaseElements/BaseCard.vue';
  import BaseIcon from "./BaseElements/BaseIcon.vue";
  import { mapStores } from 'pinia'
  import { useStateStore } from '../stores/state'

  export default {
    name: 'TheShopContent',
    components: {
      BaseCardWrapper,
      BaseCard,
      BaseIcon
    },
    computed: {
      ...mapStores(useStateStore)
    },
  };
</script>
<style lang="scss">
  .the-shop-content {


    &__item {
      cursor: pointer;
    }

    &__item-info {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    &__fireboom-wrapper {
      width: 42px;
      height: 42px;
      border-radius: 8px;
      background-color: var(--color-accent-primary);
      padding: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid rgba(255, 255, 255, 0.4);
      box-shadow: var(--color-accent-primary) 1.5px 1.5px 0px;
      position: relative;

      img {
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
      }
    }

    &__fireboom-badge {
      width: 22px;
      height: 22px;
      background-color: var(--color-accent-tertiary);
      border-radius: 50%;
      position: absolute;
      border: 2px solid var(--color-bg-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      bottom: -7px;
      left: -5px;
    }

    &__item-name {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 4px;
    }
  }
</style>
    