<template>
  <div class="the-board-wrapper">
    <div 
      class="the-board" 
      ref="the-board"
      :style="{gridTemplateColumns: `repeat(${cols}, 1fr)`}"
    >
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TheBoard',
    props: {
      cols: {
        type: Number,
        default: 9
      },
      rows: {
        type: Number,
        default: 9
      }
    },
    mounted() {
      panzoom(this.$refs['the-board'], {
        zoomDoubleClickSpeed: 1
      })
    }
  };
</script>
<style lang="scss">
  .the-board-wrapper {
    width: calc(100% + 32px);
    flex: 1;
    margin-bottom: -16px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .the-board {
    width: calc(100% - 32px);
    border: 1px solid var(--color-text-primary);
    border-radius: 4px;
    box-shadow: var(--color-text-primary) 4px 4px 0px;
    display: grid;
    overflow: hidden;
    background-color: var(--color-text-primary);
  }
</style>
    