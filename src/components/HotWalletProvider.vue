<template>
    <slot></slot>
  </template>
  
  <script>
  import { defineComponent, provide, inject, ref, onMounted, reactive } from "vue";
  import { HereWallet } from "@here-wallet/core";
  
  export const HotContext = Symbol("HotContext");
  
  export const useHotWallet = () => {
    return inject(HotContext);
  };
  
  export default defineComponent({
    name: "HotWalletProvider",
    setup(_, { slots }) {
      const here = ref(null);
      const user = reactive({
        accounts: {
          near: "",
          solana: "",
          evm: "",
          ton: ""
        }
      });
  
      onMounted(async () => {
        const hereWallet = await HereWallet.connect({
          botId: "HotMinesweeperBot/app",
          // botId: "hotHack1461Bot/app",
          walletId: "herewalletbot/app"
        });

        here.value = hereWallet;
  
        const isSigned = await hereWallet.isSignedIn();
        if (isSigned) {
          const near = await hereWallet.getAccountId();
          user.accounts.near = near;
        }
      });
  
      const login = async () => {
        await here.value?.authenticate();
      };
  
      const logout = () => {
        here.value?.signOut();
        user.accounts.near = "";
        user.accounts.solana = "";
        user.accounts.evm = "";
        user.accounts.ton = "";
      };

      const send = async () => {
        await here.value?.signAndSendTransaction({
          // signerId: here.signer
        })
      }
  
      provide(HotContext, {
        login,
        logout,
        send,
        here,
        user
      });
  
      return () => slots.default();
    }
  });
  </script>
  