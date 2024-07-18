<template>
  <span>Profile</span>
  <button @click="onLogout">Logout</button>
</template>

<script>
  import { useHotWallet } from '../components/HotWalletProvider.vue';

  export default {
    name: 'ProfileView',
    data() {
      return {
        logout: null,
        user: null,
      };
    },
    created() {
      const { logout, user } = useHotWallet();
      this.logout = logout;
      this.user = user;
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
  
</style>