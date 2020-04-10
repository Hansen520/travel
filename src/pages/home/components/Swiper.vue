<template>
  <div class="wrapper">
    <!-- 加上v-if="lists.length"是为了避免刚开始加载的空数组使轮播图在最后一个位置 -->
    <swiper :options="swiperOption" ref="mySwiper" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        // 轮播图自动滚动
        autoplay: true,
        slidesPerView: 1,
        speed: 3000,
        autoplayDisableOnInteraction: false
      }
    }
  },
  computed: {
    showSwiper () {
      // <!-- 加上v-if="lists.length"是为了避免刚开始加载的空数组使轮播图在最后一个位置 -->
      return this.list.length
    }
  }
}

</script>

<style lang="stylus" scoped>
  // >>>为样式穿透法，只要使有.swiper-pagination-bullet-active，就变成这个样式里面的颜色
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff !important
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 32.25%
    background: #eee
    .swiper-img
      width: 100%
      height: 100%
</style>
