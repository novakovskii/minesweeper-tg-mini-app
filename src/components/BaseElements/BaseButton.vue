<template>
  <button 
    class="base-button"
    :class="{'base-button--disabled': disabled}"
  >
    <slot />
    <div v-if="$slots.icon" class="base-button__icon">
      <slot name="icon" />
    </div>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="scss">
  .base-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    height: 46px;
    padding: 0 16px;
    color: var(--color-text-primary);
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    cursor: pointer;
    border: 1px solid var(--color-text-primary);
    border-radius: 16px;
    box-shadow: var(--color-text-primary) 4px 4px 0px;
    transition: box-shadow 0.2s ease 0s, transform 0.2s ease 0s;

    &:active {
      box-shadow: var(--color-text-primary) 0px 0px 0px;
      transform: translate(4px, 4px);
    }

    &--disabled {
      pointer-events: none;
      background-color: var(--color-disabled);
    }
  }
</style>
  