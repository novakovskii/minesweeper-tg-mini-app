<template>
  <BaseCardWrapper class="the-play-content">
    <BaseCard 
      class="the-play-content__card"
      v-for="(option, index) in gameOptions"
      :key="index"
    >
      <div class="the-play-content__card-text">
        <div class="the-play-content__card-text-difficulty">{{ option.difficulty }}</div>
        <div class="the-play-content__card-text-size"><span class="text-secondary--text">Size:</span> {{ option.size }}</div>
      </div>
      <BaseButton 
        class="accent-primary--bg"
        @click="onPlayClick"
      >Play</BaseButton>
      <div class="the-play-content__card-text-prize"><span class="text-secondary--text">Prize:</span> <span class="success--text">{{ option.prize }}</span></div>
    </BaseCard>
  </BaseCardWrapper>
</template>

<script>
  import BaseCardWrapper from './BaseElements/BaseCardWrapper.vue';
  import BaseCard from './BaseElements/BaseCard.vue';
  import BaseButton from "./BaseElements/BaseButton.vue";

  export default {
    name: 'ThePlayContent',
    components: {
      BaseCardWrapper,
      BaseCard,
      BaseButton
    },
    data () {
      return {
        gameOptions: [
          {
            difficulty: 'Easy',
            size: '9x9',
            prize: '19 XP'
          },
          {
            difficulty: 'Medium',
            size: '16x16',
            prize: '57 XP'
          },
          {
            difficulty: 'Hard',
            size: '16x30',
            prize: '99 XP'
          }
        ]
      }
    },
    methods: {
      onPlayClick() {
        this.$router.push('/game')
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
    