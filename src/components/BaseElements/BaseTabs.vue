<template>
  <div class="tab-container">
    <div class="tab-wrapper"></div>
  </div>
  <swiper 
    :pagination="pagination" 
    :modules="modules" 
    class="mySwiper"
  >
    <swiper-slide
      v-for="(tab, index) in tabs"
      :key="index"
    >
      <slot :name="`tab-content-${index}`" />
    </swiper-slide>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import { Pagination } from 'swiper/modules';

  let tabs = []

  export default {
    name: 'BaseTabs',
    props: {
      tabs: {
        type: Array,
        default: []
      }
    },
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        transition: true,
        bulletCoors: [],
        bulletWidths: [],
        progressPercentages: [],
        paginationRenderedOnce: false,
        modules: [Pagination],
        pagination: {
          clickable: true,
          el: '.tab-wrapper',
          bulletActiveClass: 'tab--active',
          bulletClass: 'tab',
          horizontalClass: 'tab-wrapper',
          renderBullet: function (index, className) {
            return `<div class="tab ${className}">${tabs[index]}</div>`;
          },
        }
      }
    },
    created() {
      tabs = this.tabs
    }
  };
</script>
<style lang="scss">
  .tab-container {
    position: relative;
    width: 100%;
    height: 36px;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }

  .tab-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    padding: 0 16px;
    box-sizing: border-box;
    padding: 1px 16px;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    
    &::-webkit-scrollbar {
      display: none;
    }

  }

  .tab {
    padding: 0 16px;
    height: 36px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &--active {
      background-color: var(--color-bg-secondary);
      outline: 1px solid var(--color-border);
    }
  }

  .swiper {
    width: calc(100% + 32px);
    flex: 1;
    margin-left: -16px;
  }

  .swiper-slide {
    padding: 0 16px;
    box-sizing: border-box;
  }
</style>
      