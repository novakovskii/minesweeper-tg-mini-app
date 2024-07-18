<template>
  <div class="the-header">
    <slot />
    <template v-if="!$slots.default">
      <BaseIcon 
        class="the-header__icon"
        :svg="stateStore.icons['question-circle']"
        @click="$router.push('/help')"
      />
      <div class="the-header__text">
        <span v-if="user.accounts.near" class="the-header__address">{{ user.accounts.near }}</span>
        <span v-else class="the-header__address">unidentified.address</span>
        <span class="the-header__balance text-secondary--text">{{ stateStore.balance }} XP</span>
      </div>
      <BaseIcon 
        class="the-header__icon"
        :svg="stateStore.icons.user"
        @click="$router.push('/profile')"
      />
    </template>
  </div>
</template>

<script>
  import BaseIcon from '../components/BaseElements/BaseIcon.vue';
  import { useHotWallet } from '../components/HotWalletProvider.vue';
  import { mapStores } from 'pinia'
  import { useStateStore } from '../stores/state'

  export default {
    name: 'TheHeader',
    components: {
      BaseIcon
    },
    data () {
      return {
        
        user: null,
      }
    },
    created() {
      const { user } = useHotWallet();
      this.user = user;
    },
    computed: {
      ...mapStores(useStateStore)
    }
  };
</script>
<style lang="scss">
  .the-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 16px;
    padding: 16px;
    box-sizing: border-box;

    &__icon {
      cursor: pointer;
    }

    &__text {
      display: flex;
      flex-direction: column;
    }

    &__address {
      font-size: 16px;
      margin-bottom: 4px;
    }

    &__balance {
      font-size: 14px;
      text-align: center;
    }
  }
</style>
    