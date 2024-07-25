<template>
  <input 
    type="checkbox" 
    :id="`base-switcher-${$.uid}`"
    :value="value"
    @change="$emit('change')"
  >
  <label class="base-switcher" :for="`base-switcher-${$.uid}`">
    <div class="base-switcher__button"></div>
  </label>
</template>

<script>
export default {
  name: 'BaseSwitcher',
  props: ['value'],
  emits: ['change']
};
</script>
<style lang="scss">
  
  .base-switcher {
    width: 36px;
    height: 20px;
    background-color: var(--color-bg-primary);
    border-radius: 20px;
    border: 1px solid var(--color-text-primary);
    position: relative;
    cursor: pointer;
    box-shadow: var(--color-text-primary) 2px 2px 0px;
    transition: all .1s ease-in-out;
    

    &__button {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: var(--color-bg-secondary);
      outline: 1px solid var(--color-text-primary);
      position: absolute;
      left: 0;
      transition: all .1s ease-in-out;
    }
  }

  input {
    visibility: hidden;
    position: absolute;

    &:checked {

      & + .base-switcher {
        background-color: var(--color-accent-primary);

        .base-switcher__button {
          left: calc(100% - 20px);
        }
      }
    }
  }
</style>
  