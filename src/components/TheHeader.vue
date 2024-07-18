<template>
  <div class="the-header">
    <slot />
    <template v-if="!$slots.default">
      <BaseIcon 
        class="the-header__icon"
        :svg="icons['question-circle']"
        @click="$router.push('/help')"
      />
      <div class="the-header__text">
        <span v-if="user.accounts.near" class="the-header__address">{{ user.accounts.near }}</span>
        <span v-else class="the-header__address">unidentified.address</span>
        <span class="the-header__balance text-secondary--text">8000 XP</span>
      </div>
      <BaseIcon 
        class="the-header__icon"
        :svg="icons.user"
        @click="$router.push('/profile')"
      />
    </template>
  </div>
</template>

<script>
  import BaseIcon from '../components/BaseElements/BaseIcon.vue';
  import { useHotWallet } from '../components/HotWalletProvider.vue';

  export default {
    name: 'TheHeader',
    components: {
      BaseIcon
    },
    data () {
      return {
        icons: {
          'question-circle': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#2C3034" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M9.09003 8.99999C9.32513 8.33166 9.78918 7.7681 10.4 7.40912C11.0108 7.05015 11.7289 6.91893 12.4272 7.0387C13.1255 7.15848 13.7588 7.52151 14.2151 8.06352C14.6714 8.60552 14.9211 9.29151 14.92 9.99999C14.92 12 11.92 13 11.92 13" stroke="#2C3034" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M12 17H12.01" stroke="#2C3034" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>',
          'user': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.23019 18.2418C6.94749 16.6525 9.25912 16 12 16C14.7409 16 17.0525 16.6525 17.7698 18.2418C19.4488 16.689 20.5 14.4673 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 14.4673 4.55121 16.689 6.23019 18.2418ZM19.3172 5.18385C17.4916 3.22498 14.8889 2 12 2C6.47715 2 2 6.47715 2 12C2 14.8886 3.22477 17.4912 5.18335 19.3167C7.00887 21.2753 9.61142 22.5 12.5 22.5C18.0229 22.5 22.5 18.0229 22.5 12.5C22.5 9.61142 21.2757 7.00936 19.3172 5.18385ZM19.3617 5.23195L19.3172 5.18385C19.3321 5.19983 19.3469 5.21587 19.3617 5.23195ZM16 11C16 13.2091 14.2091 15 12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11Z" fill="#2C3034"/> </svg>'
        },
        user: null,
      }
    },
    created() {
      const { user } = useHotWallet();
      this.user = user;
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
    