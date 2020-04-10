<template>
  <div>
    <div class="banner" @click="hangdleGallary">
      <img class="banner-img" :src="bannerImg">
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{this.bannerImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary :imgs="bannerImgs" v-show="flag" @close="gallaryClose"></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/Fade'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      flag: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1412/10/e980cba87b79a92f54c511a393749b8d.water.jpg_r_800x800_e2098cda.jpg', 'http://img1.qunarzz.com/sight/p0/1412/10/e980cba87b79a92f54c511a393749b8d.water.jpg_r_800x800_e2098cda.jpg']
    }
  },
  methods: {
    hangdleGallary () {
      this.flag = true
    },
    gallaryClose () {
      this.flag = false
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  }
}

</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      bankground-image linear-gradient(to top, rgba(0,0,0,0), raba(0,0,0,.8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        padding 0 .4rem
        margin-top .14rem
        height .32rem
        line-height .4rem
        border-radius .2rem
        background rgba(0, 0, 0, .8)
        font-size .24rem
        .banner-icon
          font-size .24rem

</style>
