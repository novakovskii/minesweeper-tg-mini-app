<template>
  <BaseCardWrapper class="the-history-content">
    <BaseCard
      v-for="(item, index) in stateStore.history"
    >
      <div class="the-history-content__game-info">
        <div 
          class="the-history-content__status"
          :class="{'success--text': item.status === 'win', 'error--text': item.status === 'loss'}"
        >{{ item.status }}</div>
        <div class="the-history-content__difficulty"><span class="text-secondary--text">Difficulty:</span> {{ item.difficulty }}</div>
        <div v-if="item.status === 'win'" class="the-history-content__time"><span class="text-secondary--text">Time:</span> {{ item.time }}</div>
        <div v-if="item.status === 'win'" class="the-history-content__prize"><span class="text-secondary--text">XP:</span> +{{ item.prize }}</div>
      </div>
      <div class="the-history-content__date text-secondary--text">{{ item.date }}</div>
    </BaseCard>
  </BaseCardWrapper>
</template>

<script>
  import BaseCardWrapper from './BaseElements/BaseCardWrapper.vue';
  import BaseCard from './BaseElements/BaseCard.vue';
  import { mapStores } from 'pinia'
  import { useStateStore } from '../stores/state'

  export default {
    name: 'TheHistoryContent',
    components: {
      BaseCardWrapper,
      BaseCard
    },
    computed: {
      ...mapStores(useStateStore)
    }
  };
</script>
<style lang="scss">
  .the-history-content {
   

    &__game-info {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    &__status {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 4px;
      text-transform: capitalize
    }

    &__difficulty {
      
    }

    &__time {
      
    }

    &__prize {
      
    }

    &__date {
      align-self: flex-start;
    }
  }
</style>
    