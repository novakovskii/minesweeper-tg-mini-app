<template>
  <TheHeader>
    <div class="game-view__time"><span class="text-secondary--text">Time:</span> 0:00</div>
    <div class="game-view__mines"><span class="text-secondary--text">Mines:</span> 10</div>
  </TheHeader>
  <TheBoard>
    
  </TheBoard>
  
</template>

<script>
  import TheHeader from '../components/TheHeader.vue';
  import TheBoard from '../components/TheBoard.vue';

  export default {
    name: 'GameView',
    components: {
      TheHeader,
      TheBoard
    },
    mounted() {
      zoomableSvg('#the-board');
    }
  }
</script>

<style lang="scss">
  .game-view {

  }
</style>