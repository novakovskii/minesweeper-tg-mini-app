<template>
  <TheHeader>
    <div class="help-view__header-title">Help</div>
  </TheHeader>
  <div class="help-view__link-wrapper">
    <div 
      class="help-view__link"
      @click="$router.push('/help-gameplay')"
    >
      <span>How to play minesweeper?</span>
      <BaseIcon :svg="stateStore.icons['arrow-right']" />
    </div>
    <div 
      class="help-view__link"
      @click="$router.push('/help-shop')"
    >
      <span>How to buy items in the shop?</span>
      <BaseIcon :svg="stateStore.icons['arrow-right']" />
    </div>
  </div>
</template>

<script>
  import TheHeader from '../components/TheHeader.vue';
  import BaseIcon from '../components/BaseElements/BaseIcon.vue';
  import { mapStores } from 'pinia'
  import { useStateStore } from '../stores/state'

  export default {
    name: 'HelpView',
    components: {
      TheHeader,
      BaseIcon
    },
    computed: {
      ...mapStores(useStateStore)
    },
    mounted() {
      Telegram.WebApp.BackButton.show()
      Telegram.WebApp.onEvent('backButtonClicked', () => {
        this.$router.push('/main')
      });
    }
  }
</script>

<style lang="scss">
  .help-view {


    &__header-title {
      text-align: center;
      width: 100%;
      font-size: 16px;
      font-weight: 600
    }

    &__link-wrapper {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 0 16px;
      box-sizing: border-box;
      gap: 8px;
    }

    &__link {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      font-weight: 600;
    }

    &__paragraph {
      width: 100%;
      box-sizing: border-box;
      padding: 0 16px;

      &:not(:last-child) {
        margin-bottom: 24px;
      }

      &:last-child {
        margin-bottom: 16px;
      }
    }

    &__title {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 8px;
    }

    &__text {
      font-size: 14px;
      font-weight: 500;
      line-height: normal;

      ul {
        list-style: disc;

        li {
          margin-left: 16px;

          &:not(:last-child) {
            margin-bottom: 4px;
          }
        }
      }
    }
  }
</style>