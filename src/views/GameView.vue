<template>
  <div class="game-view">
    <TheHeader class="game-view__header">
      <div class="game-view__time"><span class="text-secondary--text">Time:</span> 0:00</div>
      <div class="game-view__mines"><span class="text-secondary--text">Mines:</span> 10</div>
    </TheHeader>
    <TheBoard 
      :cols="gameOption.cols"
      :rows="gameOption.rows"
    >
      <BaseCell 
        v-for="(cell, index) in (gameOption.cols * gameOption.rows)"
        :key="index"
        :icons="stateStore.icons"
      />
    </TheBoard>
    <BaseModal
      :show="result"
    >
      <template v-if="result === 'win'">
        <div class="game-view__result-title">Congratulations!<br>You've cleared all the mines.</div>
        <div class="game-view__result-text success--text success-10--bg">+{{ gameOption.prize }} XP</div>
      </template>
      <template v-else-if="result === 'loss'">
        <div class="game-view__result-title">Oops! You hit a mine.</div>
        <div class="game-view__result-text error--text error-10--bg">Game over!</div>
      </template>
      
      
      <BaseButton 
        class="game-view__result-button bg-primary--bg"
        @click="$router.push('/main')"
      >
        Go to main page
        <template #icon>
          <BaseIcon :svg="stateStore.icons['arrow-right']" />
        </template>
      </BaseButton>
      <BaseButton 
        class="game-view__result-button accent-primary--bg"
        @click="playAgain"
      >
        Play again
        <template #icon>
          <BaseIcon :svg="stateStore.icons['reload']" />
        </template>
      </BaseButton>
    </BaseModal>
  </div>
</template>

<script>
  import TheHeader from '../components/TheHeader.vue';
  import TheBoard from '../components/TheBoard.vue';
  import BaseCell from '../components/BaseElements/BaseCell.vue';
  import { mapStores } from 'pinia'
  import { useStateStore } from '../stores/state'
  import BaseModal from '../components/BaseElements/BaseModal.vue';
  import BaseButton from '../components/BaseElements/BaseButton.vue';
  import BaseIcon from '../components/BaseElements/BaseIcon.vue';

  export default {
    name: 'GameView',
    components: {
      TheHeader,
      TheBoard,
      BaseCell,
      BaseModal,
      BaseButton,
      BaseIcon
    },
    props: {
      difficulty: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        result: null
      }
    },
    computed: {
      ...mapStores(useStateStore),
      gameOption() {
        return this.stateStore.gameOptions.find(option => option.difficulty === this.difficulty)
      }
    },
    methods: {
      playAgain() {

      }
    }
  }
</script>

<style lang="scss">
  .game-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 64px 16px 16px;
    box-sizing: border-box;

    &__header {
      background-color: var(--color-bg-primary);
      top: 0;
      left: 0;
      position: absolute;
      z-index: 1;
    }

    &__result-title {
      font-size: 18px;
      font-weight: 600;
      text-align: center;
      margin-bottom: 16px;
    }

    &__result-text {
      height: 46px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 16px;
      font-weight: 500;
    }

    &__result-button {
      width: 100%;
      justify-content: space-between;

      &:not(:last-child) {
        margin-bottom: 8px;
      }
    }
  }
</style>