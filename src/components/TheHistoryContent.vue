<template>
  <BaseCardWrapper class="the-history-content">
    <BaseCard
      v-for="(game, idx) in stateStore.games"
      :key="idx"
      class="the-history-content__card"
    >
      <div class="the-history-content__game-info">
        <div 
          class="the-history-content__status"
          :class="{'success--text': game.result === 'win', 'error--text': game.result === 'lose'}"
        >{{ game.result }}</div>
        <div class="the-history-content__difficulty"><span class="text-secondary--text">Difficulty:</span> {{ game.difficulty }}</div>
        <div v-if="game.result === 'win'" class="the-history-content__time"><span class="text-secondary--text">Time:</span> {{ game.time_spent.toFixed(4) }} s</div>
        <div v-if="game.result === 'win'" class="the-history-content__prize"><span class="text-secondary--text">XP:</span> +{{ game.score }}</div>
      </div>
      <div class="the-history-content__date text-secondary--text">{{ formatDateString(game.end_date) }}</div>
    </BaseCard>
  </BaseCardWrapper>
</template>

<script>
  import BaseCardWrapper from './BaseElements/BaseCardWrapper.vue';
  import BaseCard from './BaseElements/BaseCard.vue';
  import { useHotWallet } from '../components/HotWalletProvider.vue';
  import { mapStores } from 'pinia'
  import { useStateStore } from '../stores/state'

  export default {
    name: 'TheHistoryContent',
    components: {
      BaseCardWrapper,
      BaseCard
    },
    data () {
      return {
        games: [],
        user: null
      }
    },
    computed: {
      ...mapStores(useStateStore)
    },
    created() {
      const { user } = useHotWallet();
      this.user = user;
    },
    mounted() {
      fetch(`https://repredess.ru/api/get_game_history?user_id=${this.user.accounts.near}`, {
        method: 'GET'
      })
      .then(response => response.json())
      .then(data => {
        this.stateStore.games = data.games
      })
      .catch(error => console.error('Error:', error));
    },
    methods: {
      formatDateString(datetimeString) {
        const date = new Date(datetimeString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${day}/${month}/${year} - ${hours}:${minutes}`;
      }
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
      text-transform: capitalize;
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
    