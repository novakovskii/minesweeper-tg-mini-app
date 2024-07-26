<template>
  <BaseCardWrapper v-if="stateStore.games.length" class="the-history-content">
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
  <div v-else class="the-history-content__preview">
    <svg width="734" height="311" viewBox="0 0 734 311" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M255.568 199.943L105.5 161.957V137L0 179L433.5 310.5L550.115 274.5L402.842 237.222L255.568 199.943Z" fill="#FEED01"/>
      <path d="M733 81.7876L675.646 115.33L613.13 151.891L550.615 188.451V274L613.13 237.439L675.646 200.879L733 167.337V81.7876Z" fill="#2C3034"/>
      <path d="M256.068 113.894L106 75.9085V136.5V161.457L256.068 199.443L403.342 236.722L550.615 274V188.451L403.342 151.173L256.068 113.894Z" fill="#2C3034"/>
      <path d="M403.342 151.173L550.615 188.451L613.13 151.891L486.144 118.316L403.342 151.173Z" fill="#FD7FE0"/>
      <path d="M675.646 115.33L568.951 85.4576L486.144 118.316L613.13 151.891L675.646 115.33Z" fill="#FD7FE0"/>
      <path d="M733 81.7876L645.02 55.2732L568.951 85.4576L675.646 115.33L733 81.7876Z" fill="#FD7FE0"/>
      <path d="M359.143 84.7374L486.144 118.316L568.951 85.4576L462.23 55.5774L359.143 84.7374Z" fill="#FD7FE0"/>
      <path d="M256.068 113.894L403.342 151.173L486.144 118.316L359.143 84.7374L256.068 113.894Z" fill="#FD7FE0"/>
      <path d="M106 75.9085L256.068 113.894L359.143 84.7374L230.036 50.6018L106 75.9085Z" fill="#FD7FE0"/>
      <path d="M354.071 25.2951L230.036 50.6018L359.143 84.7374L462.23 55.5774L354.071 25.2951Z" fill="#FD7FE0"/>
      <path d="M557.039 28.7587L468.248 2L354.071 25.2951L462.23 55.5774L557.039 28.7587Z" fill="#FD7FE0"/>
      <path d="M645.02 55.2732L557.039 28.7587L462.23 55.5774L568.951 85.4576L645.02 55.2732Z" fill="#FD7FE0"/>
      <path d="M106 75.9085L256.068 113.894M106 75.9085L230.036 50.6018M106 75.9085V136.5V161.457L256.068 199.443L403.342 236.722L550.615 274M733 81.7876L645.02 55.2732M733 81.7876L675.646 115.33M733 81.7876V167.337L675.646 200.879L613.13 237.439L550.615 274M550.615 188.451L403.342 151.173M550.615 188.451L613.13 151.891M550.615 188.451V274M557.039 28.7587L468.248 2L354.071 25.2951M557.039 28.7587L645.02 55.2732M557.039 28.7587L462.23 55.5774M256.068 113.894L403.342 151.173M256.068 113.894L359.143 84.7374M645.02 55.2732L568.951 85.4576M403.342 151.173L486.144 118.316M675.646 115.33L613.13 151.891M675.646 115.33L568.951 85.4576M354.071 25.2951L230.036 50.6018M354.071 25.2951L462.23 55.5774M613.13 151.891L486.144 118.316M230.036 50.6018L359.143 84.7374M486.144 118.316L568.951 85.4576M486.144 118.316L359.143 84.7374M568.951 85.4576L462.23 55.5774M462.23 55.5774L359.143 84.7374" stroke="#2C3034" stroke-width="2"/>
    </svg>
    <div class="the-history-content__preview-text">There is no&nbsp;games in your account</div>
  </div>
  

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
      fetch(`${import.meta.env.VITE_API_URL}/api/get_game_history?user_id=${this.user.accounts.near}`, {
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

    &__preview {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 48px;
      box-sizing: border-box;
      gap: 32px;

      svg {
        max-width: 100%;
        height: 130px;
        min-height: 130px;
      }
    }

    &__preview-text {
      font-family: var(--font-family-secondary);
      font-size: 32px;
      font-weight: 600;
      text-align: center;
    }
  }
</style>
    