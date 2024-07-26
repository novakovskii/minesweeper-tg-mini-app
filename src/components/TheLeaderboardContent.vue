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
        <div class="the-leaderboard-content__grid-header">Username</div>
        <div class="the-leaderboard-content__grid-header">Time</div>
        <template
          v-for="(difficulty, dIdx) in period[1]"
          :key="dIdx"
        >
          <template v-if="difficulty[1]">
            <div class="the-leaderboard-content__grid-difficulty">{{ difficulty[0] }}</div>
            <div>{{ difficulty[1].username }}</div>
            <div>{{ difficulty[1].time_spent.toFixed(4) }} s</div>
          </template>
          <template v-else>
            <div class="the-leaderboard-content__grid-difficulty">{{ difficulty[0] }}</div>
            <div>-</div>
            <div>-</div>
          </template>
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
      fetch(`${import.meta.env.VITE_API_URL}/api/get_leaderboard`, {
        method: 'GET'
      })
      .then(response => response.json())
      .then(data => {
        const periodSortingArray = ['daily', 'weekly', 'all_time']
        const difficultySortingArray = ['easy', 'medium', 'hard']
        const resultArray = Object.entries(data.leaderboard).map(period => {
          period[1] = Object.entries(period[1]).sort((a, b) => {
            return difficultySortingArray.indexOf(a[0]) - difficultySortingArray.indexOf(b[0]); 
          })
                    return period
        }).sort((a, b)=>{
          return periodSortingArray.indexOf(a[0]) - periodSortingArray.indexOf(b[0]); 
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
      grid-template-columns: 90px 1fr 105px;
      width: 100%;
      border-radius: 8px;
      border: 1px solid var(--color-border);
      overflow: hidden;

      div {
        border-right: 1px solid var(--color-border);
        padding: 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

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
    