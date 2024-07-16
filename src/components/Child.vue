<template>
  <div>
    <button @click="login">Login</button>
    <button @click="logout">Logout</button>
    <p v-if="user">Logged in as: {{ user.accounts.near }}</p>
    <button @click="send">Send transaction</button>
  </div>
</template>

<script>
import { useHotWallet } from './HotWalletProvider.vue';

export default {
  setup() {
    const { login, logout, send, user } = useHotWallet();
    return { login, logout, send, user };
  }
};
</script>
  