<template>
  <BaseCardWrapper class="the-history-content">
    <BaseCard>
      <div>
        <span>Easy</span>
        <span>Size: </span><span>9x9</span>
      </div>
      <BaseButton>Play</BaseButton>
    </BaseCard>
    <BaseCard>
      <div>
        <span>Medium</span>
        <span>Size: </span><span>16x16</span>
      </div>
      <BaseButton>Play</BaseButton>
    </BaseCard>
    <BaseCard>
      <div>
        <span>Hard</span>
        <span>Size: </span><span>16x30</span>
      </div>
      <BaseButton>Play</BaseButton>
    </BaseCard>
  </BaseCardWrapper>
</template>

<script>
  import BaseCardWrapper from './BaseElements/BaseCardWrapper.vue';
  import BaseCard from './BaseElements/BaseCard.vue';
  import BaseButton from "./BaseElements/BaseButton.vue";

  export default {
    name: 'TheHistoryContent',
    components: {
      BaseCardWrapper,
      BaseCard,
      BaseButton
    }
  };
</script>
<style lang="scss">
  .the-history-content {
   
  }
</style>
    