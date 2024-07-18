<template>
  <div class="login-view">
    <template v-if="here">
      <div class="login-view__preview"></div>
      <div class="login-view__title"><span class="success--text">Win</span> at&nbsp;minesweeper and get extra <span class="accent-secondary--text">firebooms</span></div>
      <BaseButton 
        class="login-view__button accent-primary--bg"
        @click="login"
      >Login via <span class="accent-secondary--text">HOT wallet</span></BaseButton>
      <div class="login-view__caption text-secondary--text">to get started</div>
    </template>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
  import BaseButton from "../components/BaseElements/BaseButton.vue"
  import { useHotWallet } from '../components/HotWalletProvider.vue';

  export default {
    name: 'LoginView',
    components: {
      BaseButton
    },
    data() {
      return {
        login: null,
        user: null,
        here: null
      };
    },
    created() {
      const { login, user, here } = useHotWallet();
      this.login = login;
      this.user = user;
      this.here = here;

      console.log('user', user)
      console.log('here', here)

      if (this.user?.accounts?.near) {
        this.$router.push('/main')
      }
    }
  }
</script>

<style lang="scss">
  .login-view {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__preview {
      width: 100%;
      height: 300px;
      border: 2px dashed var(--color-text-primary);
      margin-bottom: 16px;
    }

    &__title {
      font-family: 'Cabinet Grotesk';
      font-size: 40px;
      font-weight: 600;
      text-align: center;
      margin-bottom: 16px;
    }

    &__button {
      width: 100%;
      margin-bottom: 8px;
    }

    &__caption {
      font-size: 14px;
    }
  }
</style>