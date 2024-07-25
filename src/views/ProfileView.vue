<template>
  <TheHeader>
    <div class="profile-view__header-title">Profile</div>
  </TheHeader>
  <BaseCardWrapper class="profile-view__card-wrapper">
    <BaseCard class="profile-view__card">
      <BaseIcon 
        class="profile-view__icon profile-view__icon--user"
        :svg="stateStore.icons.user" 
      />
      <div class="profile-view__user-info">
        <div v-if="user.accounts.near" class="profile-view__address">{{ user.accounts.near }}</div>
        <div v-else class="profile-view__address">unidentified.address</div>
        <div class="profile-view__balance text-secondary--text">{{ balance }} XP</div>
      </div>
    </BaseCard>
    <BaseCard 
      class="profile-view__card profile-view__card--logout"
      @click="onLogout"
    >
      <BaseIcon 
        class="profile-view__icon profile-view__icon--logout"
        :svg="stateStore.icons.logout" 
      />
      <span class="error--text">Logout</span>
    </BaseCard>
  </BaseCardWrapper>
</template>

<script>
  import { useHotWallet } from '../components/HotWalletProvider.vue';
  import TheHeader from '../components/TheHeader.vue';
  import BaseCardWrapper from '../components/BaseElements/BaseCardWrapper.vue';
  import BaseCard from '../components/BaseElements/BaseCard.vue';
  import BaseIcon from '../components/BaseElements/BaseIcon.vue';
  import { mapStores } from 'pinia'
  import { useStateStore } from '../stores/state'

  export default {
    name: 'ProfileView',
    components: {
      TheHeader,
      BaseCardWrapper,
      BaseCard,
      BaseIcon
    },
    data() {
      return {
        logout: null,
        user: null,
        balance: 0
      };
    },
    computed: {
      ...mapStores(useStateStore)
    },
    created() {
      const { logout, user } = useHotWallet();
      this.logout = logout;
      this.user = user;
    },
    mounted() {
      Telegram.WebApp.BackButton.show()
      Telegram.WebApp.onEvent('backButtonClicked', () => {
        this.$router.push('/main')
      });

      fetch(`https://repredess.ru/api/get_score?user_id=${this.user.accounts.near === '' ? 'uymuct.tg' : this.user.accounts.near}`, {
        method: 'GET'
      })
      .then(response => response.json())
      .then(data => {
        this.balance = data.score
      })
      .catch(error => console.error('Error:', error));
    },
    methods: {
      onLogout() {
        this.logout()
        this.$router.push('/')
      }
    }
  }
</script>

<style lang="scss">
  .profile-view {


    &__header-title {
      text-align: center;
      width: 100%;
      font-size: 16px;
      font-weight: 600
    }

    &__card-wrapper {
      box-sizing: border-box;
      width: 100%;
      padding: 0 16px;
    }

    &__card {
      justify-content: flex-start;

      &--logout {
        background-color: var(--color-error-10);
        cursor: pointer;
      }
    }

    &__icon {

      &--user {
        background-color: var(--color-bg-primary);
        border: 1px solid var(--color-border);
      }

      &--logout {
        background-color: var(--color-error-10);
        border: 1px solid var(--color-error-10);
      }
    }

    &__address {
      font-size: 16px;
      margin-bottom: 4px;
      font-weight: 600
    }

    &__balance {
      font-size: 14px;
    }
  }
</style>