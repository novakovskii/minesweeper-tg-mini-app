<template>
  <BaseCardWrapper class="the-play-content">
    <BaseCard 
      class="the-play-content__card"
      v-for="(option, index) in stateStore.gameOptions"
      :key="index"
      @click="onPlayClick(option)"
    >
      <div class="the-play-content__card-text">
        <div class="the-play-content__card-text-difficulty">{{ option.difficulty }}</div>
        <div class="the-play-content__card-text-size"><span class="text-secondary--text">Size:</span> {{ option.cols }}×{{ option.rows }}</div>
      </div>
      <BaseButton 
        class="accent-primary--bg"
      >Play</BaseButton>
      <div class="the-play-content__card-text-prize"><span class="text-secondary--text">Prize:</span> <span class="success--text">{{ option.prize }} XP</span></div>
    </BaseCard>
  </BaseCardWrapper>
</template>

<script>
  import BaseCardWrapper from './BaseElements/BaseCardWrapper.vue';
  import BaseCard from './BaseElements/BaseCard.vue';
  import BaseButton from "./BaseElements/BaseButton.vue";
  import { mapStores } from 'pinia'
  import { useStateStore } from '../stores/state'

  export default {
    name: 'ThePlayContent',
    components: {
      BaseCardWrapper,
      BaseCard,
      BaseButton
    },
    computed: {
      ...mapStores(useStateStore)
    },
    methods: {
      onPlayClick(option) {
        this.$router.push({path: '/game', query: { difficulty: option.difficulty }})
      }
    }
  };
</script>
<style lang="scss">
  .the-play-content {
   

    &__card {
      position: relative;
      padding-bottom: calc(16px + 25px);
      overflow: hidden;
      cursor: pointer;
    }

    &__card-text {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    &__card-text-difficulty {
      font-size: 16px;
      font-weight: 600;
    }

    &__card-text-size {
      
    }

    &__card-text-prize {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      background-color: var(--color-success-10);
      padding: 4px 12px;
      box-sizing: border-box;
      text-align: center;
      border-top: 1px solid var(--color-border);
    }
  }
</style>
    