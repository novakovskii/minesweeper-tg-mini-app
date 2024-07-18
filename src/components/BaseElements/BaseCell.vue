<template>
  <div 
    class="base-cell"
    :class="`base-cell--${variant}`"
  >
    <div v-if="[1, 2, 3, 4, 5, 6, 7, 8].includes(variant)">{{ variant }}</div>

    <div v-if="variant === 'flag'" v-html="icons.flag"/>
    <div v-if="variant === 'bomb' || variant === 'bomb-exploded'" v-html="icons.bomb"/>
    <div v-if="variant === 'bomb-crossed'" v-html="icons['bomb-crossed']"/>

  </div>
</template>

<script>
  export default {
    name: 'BaseCell',
    props: {
      variant: {
        type: [String, Number],
        default: 'unrevealed'
        // ['unrevealed', 'flag', 'bomb', 'bomb-exploded', 'bomb-crossed', 'empty', '1', '2', '3', '4', '5', '6', '7', '8']
      },
      icons: {
        type: Object,
        default: null
      }
    }
  };
</script>
<style lang="scss">
  .base-cell {
    aspect-ratio: 1;
    border-left: 1px solid var(--color-text-primary);
    border-top: 1px solid var(--color-text-primary);
    margin-left: -1px;
    margin-top: -1px;
    background-color: var(--color-bg-secondary);
    font-size: 7vw;
    font-family: var(--font-family-primary);
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    transition: box-shadow 0.2s ease 0s, transform 0.2s ease 0s;
    box-shadow: var(--color-text-primary) 4px 4px 0px;
    z-index: -1;

    div {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    &--unrevealed {
      background-color: var(--color-accent-primary);

      &:active {
        transform: translate(4px, 4px);
      }
    }

    &--flag {
      background-color: var(--color-accent-primary);
    }

    &--bomb-exploded {
      background-color: var(--color-error);
    }

    &--1 {
      color: var(--color-cell-1);
    }
    
    &--2 {
      color: var(--color-cell-2);
    }

    &--3 {
      color: var(--color-cell-3);
    }

    &--4 {
      color: var(--color-cell-4);
    }

    &--5 {
      color: var(--color-cell-5);
    }

    &--6 {
      color: var(--color-cell-6);
    }

    &--7 {
      color: var(--color-cell-7);
    }

    &--8 {
      color: var(--color-cell-8);
    }

    svg {
      width: 70%;
      height: 70%;
    }
  }
</style>
    