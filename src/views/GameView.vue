<template>
  <div class="game-view">
    <TheHeader class="game-view__header">
      <div class="game-view__time"><span class="text-secondary--text">Time:</span> {{ time }}</div>
      <div class="game-view__mines"><span class="text-secondary--text">Mines:</span> {{ mineCount }}</div>
    </TheHeader>
    <TheBoard 
      :cols="gameOption.cols"
    >
      <template 
        v-for="(row, rowIndex) in board"
        :key="rowIndex"
      >
        <BaseCell 
          v-for="(cell, colIndex) in row"
          :key="colIndex"
          :icons="stateStore.icons"
          :variant="cell"
          :style="{fontSize: gameOption.difficulty === 'easy' ? '7vw' : '4vw'}"
          :class="{'base-cell--not-clickable': !isGameInProcess || flagMode}"
          @click="onCellClick(rowIndex, colIndex, cell)"
          @touchend="onCellClick(rowIndex, colIndex, cell)"
        />
      </template>
    </TheBoard>
    <BaseCard class="game-view__flag-switcher-card">
      <BaseIcon :svg="stateStore.icons.pointer" />
      <BaseSwitcher 
        :value="flagMode"
        @change="onFlagModeToggle"
      />
      <BaseIcon :svg="stateStore.icons.flag" />
    </BaseCard>
    <BaseModal
      :show="!!result"
      closable
      @close="result = null"
    >
      <template v-if="result === 'win'">
        <div class="game-view__result-title">Congratulations!<br>You've cleared all the mines in <span class="accent-secondary--text">{{ time }}</span> seconds.</div>
        <div class="game-view__result-text success--text success-10--bg">+{{ score }} XP</div>
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
  import BaseCard from '../components/BaseElements/BaseCard.vue';
  import BaseSwitcher from '../components/BaseElements/BaseSwitcher.vue';
  import BaseIcon from '../components/BaseElements/BaseIcon.vue';
  import { useHotWallet } from '../components/HotWalletProvider.vue';

  export default {
    name: 'GameView',
    components: {
      TheHeader,
      TheBoard,
      BaseCell,
      BaseModal,
      BaseButton,
      BaseCard,
      BaseSwitcher,
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
        isGameInProcess: false,
        result: null,
        score: null,
        board:  [],
        user: null,
        flagMode: false,
        time: 0,
        timeInterval: null,
      }
    },
    computed: {
      ...mapStores(useStateStore),
      gameOption() {
        return this.stateStore.gameOptions.find(option => option.difficulty === this.difficulty)
      },
      mineCount() {
        return this.totalMineCount - this.flagCount
      },
      totalMineCount() {
        return this.gameOption.mines
      },
      flagCount() {
        return this.board.reduce((rowAcc, row) => {
          return rowAcc += row.reduce((cellAcc, cell) => {
            if (cell === 'flag') cellAcc++
            return cellAcc
          }, 0)
        }, 0)
      }
    },
    created() {
      const { user } = useHotWallet();
      this.user = user;
    },
    mounted() {
      Telegram.WebApp.BackButton.show()
      Telegram.WebApp.onEvent('backButtonClicked', () => {
        this.$router.push('/main')
      });

      this.board = new Array(this.gameOption.rows).fill(null).map(() => new Array(this.gameOption.cols).fill('unrevealed'))

      this.startGame()
    },
    methods: {
      playAgain() {
        this.result = null
        this.score = null
        this.time = 0
        this.startGame()
      },
      startGame() {
        fetch('https://repredess.ru/api/start', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 
            user_id: this.user.accounts.near,
            difficulty: this.gameOption.difficulty
          })
        })
        .then(response => response.json())
        .then(data => {
          this.board = data.board
          this.isGameInProcess = true
        })
        .catch(error => console.error('Error:', error));
      },
      onCellClick(rowIndex, colIndex, cell) {
        if (!this.isGameInProcess) return
        fetch('https://repredess.ru/api/click', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 
            user_id: this.user.accounts.near,
            row: rowIndex,
            column: colIndex
          })
        })
        .then(response => response.json())
        .then(data => {
          if (!this.timeInterval) {
            this.timeInterval = setInterval(() => {
              this.time ++
            }, 1000)
          }
          this.time = Math.floor(data.time)

          this.board = data.board
          const status = data.status
          const score = data.score

          if (status === 'win') {
            clearInterval(this.timeInterval)
            this.timeInterval = null
            this.isGameInProcess = false
            this.board = this.board.map(row => row.map(cell => { 
              if (cell === 'unrevealed') {
                return 'flag'
              }
              return cell
            } ))
            this.result = 'win'
            this.score = score
          }
          else if (status === 'game_over') {
            clearInterval(this.timeInterval)
            this.timeInterval = null
            this.isGameInProcess = false
            this.board[rowIndex][colIndex] = 'bomb-exploded'
            this.result = 'loss'
          }
        })
        .catch(error => console.error('Error:', error));
      },
      onFlagModeToggle() {
        fetch('https://repredess.ru/api/toggle_flag_mode', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 
            user_id: this.user.accounts.near
          })
        })
        .then(response => response.json())
        .then(data => {
          this.flagMode = data.flag_mode
        })
        .catch(error => console.error('Error:', error));
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
    flex: 1;
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

    &__flag-switcher-card {
      position: absolute;
      bottom: 64px;
    }
  }
</style>