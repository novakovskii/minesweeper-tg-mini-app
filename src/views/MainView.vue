<template>
  <TheHeader />
  <BaseTabs 
    :tabs="tabs"
  >
    <template #tab-content-0>
      <ThePlayContent />
    </template>
    <template #tab-content-1>
      <TheShopContent @open="onShopModalOpen" />
    </template>
    <template #tab-content-2>
      <TheHistoryContent />
    </template>
    <template #tab-content-3>
      <TheLeaderboardContent />
    </template>
  </BaseTabs>
  <BaseModal
    :show="showShopModal"
    closable
    @close="showShopModal = false"
  >
    <div class="the-shop-content__modal-text"><span class="accent-secondary--text">{{ shopItem.name }} × {{ shopItem.quantity }}</span> = {{ shopItem.price }} XP</div>
    <BaseButton 
      class="the-shop-content__modal-button accent-primary--bg"
      :disabled="stateStore.balance < shopItem.price"
      @click="onItemBuy"
    >Buy</BaseButton>
    <div 
      v-if="stateStore.balance < shopItem.price" 
      class="the-shop-content__modal-error error--text error-10--bg"
    >Not enough XP</div>
  </BaseModal>
  <BaseModal
    :show="showPlugModal"
    closable
    @close="showPlugModal = false"
  >
    <div 
      class="the-shop-content__modal-error accent-secondary--text accent-secondary-10--bg"
    >Purchasing items will be available soon.</div>
  </BaseModal>
</template>

<script>
  import TheHeader from '../components/TheHeader.vue';
  import BaseTabs from '../components/BaseElements/BaseTabs.vue';
  import ThePlayContent from '../components/ThePlayContent.vue';
  import TheShopContent from '../components/TheShopContent.vue';
  import TheHistoryContent from '../components/TheHistoryContent.vue';
  import TheLeaderboardContent from '../components/TheLeaderboardContent.vue';
  import BaseModal from '../components/BaseElements/BaseModal.vue';
  import BaseButton from '../components/BaseElements/BaseButton.vue';
  import { mapStores } from 'pinia'
  import { useStateStore } from '../stores/state'
  import { useHotWallet } from '../components/HotWalletProvider.vue';

  export default {
    name: 'MainView',
    components: {
      TheHeader,
      BaseTabs,
      ThePlayContent,
      TheShopContent,
      TheHistoryContent,
      TheLeaderboardContent,
      BaseModal,
      BaseButton
    },
    data() {
      return {
        tabs: [
          'Play',
          'Shop',
          'History',
          'Leaderboard'
        ],
        showShopModal: false,
        showPlugModal: false,
        shopItem: null,
        user: null
      }
    },
    computed: {
      ...mapStores(useStateStore)
    },
    created() {
      const { user } = useHotWallet();
      this.user = user;
    },
    mounted() {
      Telegram.WebApp.BackButton.hide()
    },
    methods: {
      onShopModalOpen(item) {
        this.shopItem = item
        this.showShopModal = true
      },
      onItemBuy() {
        this.showPlugModal = true
        this.showShopModal = false
      }
    }
  }
</script>

<style lang="scss">
  .the-shop-content__modal-text {
    text-align: center;
    margin-bottom: 16px;
    font-weight: 600;
  }

  .the-shop-content__modal-button {
    width: 100%;
    margin-bottom: 16px;
  }

  .the-shop-content__modal-error {
    width: 100%;
    height: 46px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
  }
</style>