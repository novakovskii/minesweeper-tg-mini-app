<template>
  <div class="tab-container">
    <div class="tab-wrapper"></div>
    <div 
      ref="tab-marker" 
      class="tab__marker"
      :class="{'tab__marker--transition': transition}"
    ></div>
  </div>
  <swiper 
    :pagination="pagination" 
    :modules="modules" 
    class="mySwiper"
    @pagination-render="onPaginationRender"
    @progress="onProgress"
    @touch-start="onTouchStart"
    @touch-end="onTouchEnd"
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
    },
    methods: {
      onProgress(swiper, progress) {
        const tabMarkerX = this.calculateCoordinate(progress)
        const tabMarkerWidth = this.calculateWidth(progress)
        this.$refs['tab-marker'].style.left = `${tabMarkerX}px`
        this.$refs['tab-marker'].style.width = `${tabMarkerWidth}px`
      },
      onPaginationRender(swiper, paginationEl) {
        this.bulletCoors = []
        this.bulletWidths = []
        this.progressPercentages = []
        for (const bullet of swiper.pagination.bullets) {
          this.bulletCoors.push(bullet.getBoundingClientRect().left)
          this.bulletWidths.push(bullet.getBoundingClientRect().width)
        }
        const intervalCount = this.bulletCoors.length
        const step = 1 / (intervalCount - 1)
        for (let i = 0; i <= 1; i += step) {
          this.progressPercentages.push(i)
        }
        if (!this.paginationRenderedOnce) {
          this.$refs['tab-marker'].style.left = `${swiper.pagination.bullets[0].getBoundingClientRect().left}px`
          this.$refs['tab-marker'].style.width = `${swiper.pagination.bullets[0].getBoundingClientRect().width}px`
        } 
        this.paginationRenderedOnce = true
      },
      onTouchStart(swiper, event) {
        this.transition = false
      },
      onTouchEnd(swiper, event) {
        this.transition = true
      },
      calculateCoordinate(progress) {
        
        for (let i = 0; i < this.progressPercentages.length - 1; i++) {
            if (progress >= this.progressPercentages[i] && progress <= this.progressPercentages[i + 1]) {
                let startPercent = this.progressPercentages[i];
                let endPercent = this.progressPercentages[i + 1];
                let startCoord = this.bulletCoors[i];
                let endCoord = this.bulletCoors[i + 1];
                
                let progressRatio = (progress - startPercent) / (endPercent - startPercent);
                let coordinate = startCoord + progressRatio * (endCoord - startCoord);
                return coordinate;
            }
        }
        
        // throw new Error("Прогресс выходит за пределы заданных интервалов");
      },
      calculateWidth(progress) {
        
        for (let i = 0; i < this.progressPercentages.length - 1; i++) {
            if (progress >= this.progressPercentages[i] && progress <= this.progressPercentages[i + 1]) {
                let startPercent = this.progressPercentages[i];
                let endPercent = this.progressPercentages[i + 1];
                let startWidth = this.bulletWidths[i];
                let endWidth = this.bulletWidths[i + 1];
                
                let progressRatio = (progress - startPercent) / (endPercent - startPercent);
                let width = startWidth + progressRatio * (endWidth - startWidth);
                return width;
            }
        }
        
        // throw new Error("Прогресс выходит за пределы заданных интервалов");
      }
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
      // color: #f00;
    }

    &__marker {
      background-color: var(--color-bg-secondary);
      // padding: 0 16px;
      height: 36px;
      border-radius: 12px;
      outline: 1px solid var(--color-border);
      position: absolute;
      z-index: 1;

      &--transition {
        transition: all .2s ease-in-out;
      }
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
      