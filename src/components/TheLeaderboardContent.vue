<template>
  <BaseCardWrapper class="the-leaderboard-content">
    <BaseCard
      v-for="(period, pIdx) in stateStore.leaderboard"
      :key="pIdx"
      class="the-leaderboard-content__card"
    >
      <div class="the-leaderboard-content__card-title">{{ periods[period[0]] }}</div>
      <div class="the-leaderboard-content__grid">
        <div class="the-leaderboard-content__grid-header">Difficulty</div>
        <div class="the-leaderboard-content__grid-header">User name</div>
        <div class="the-leaderboard-content__grid-header">Score</div>
        <template
          v-for="(difficulty, dIdx) in period[1]"
          :key="dIdx"
        >
          <div class="the-leaderboard-content__grid-difficulty">{{ dIdx }}</div>
          <div>{{ difficulty.username }}</div>
          <div>{{ Math.floor(difficulty.time_spent) }}</div>
        </template>
      </div>
    </BaseCard>
  </BaseCardWrapper>
</template>

<script>
  import BaseCardWrapper from './BaseElements/BaseCardWrapper.vue';
  import BaseCard from './BaseElements/BaseCard.vue';
  import { mapStores } from 'pinia'
  import { useStateStore } from '../stores/state'

  export default {
    name: 'TheLeaderboardContent',
    components: {
      BaseCardWrapper,
      BaseCard
    },
    data () {
      return {
        periods: {
          all_time: 'All time',
          daily: 'Today',
          weekly: 'This week'
        }
      }
    },
    computed: {
      ...mapStores(useStateStore)
    },
    mounted() {
      fetch(`https://repredess.ru/api/get_leaderboard`, {
        method: 'GET'
      })
      .then(response => response.json())
      .then(data => {
        const sortingArray = ['daily', 'weekly', 'all_time']
        const resultArray = Object.entries(data.leaderboard).sort((a, b)=>{
          return sortingArray.indexOf(a[0]) - sortingArray.indexOf(b[0]); 
        })
        this.stateStore.setLeaderboard(resultArray)
      })
      .catch(error => console.error('Error:', error));
    }
  };
</script>
<style lang="scss">
  .the-leaderboard-content {

    &__card {
      flex-direction: column;
      align-items: flex-start;
    }    

    &__card-title {
      font-weight: 600;
    }

    &__grid {
      display: grid;
      grid-template-columns: 100px 1fr 80px;
      width: 100%;
      border-radius: 8px;
      border: 1px solid var(--color-border);
      overflow: hidden;

      div {
        border-right: 1px solid var(--color-border);
        padding: 8px 12px;
        overflow: hidden;
        text-overflow: ellipsis;

        &:nth-child(3n) {
          border-right: none;
        }
      }
    }

    &__grid-header {
      border-bottom: 1px solid var(--color-border);
      background-color: var(--color-bg-primary);
      font-weight: 600;
    }

    &__grid-difficulty {
      text-transform: capitalize;
    }
  }
</style>
    