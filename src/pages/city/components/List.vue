<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper" v-for="item of hot" :key="item.id" @click="handleCityclick(item.name)">
              <div class="button">{{item.name}}</div>
            </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="itemInner of item" :key="itemInner.id" @click="handleCityclick(itemInner.name)">{{itemInner.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import {mapState} from 'vuex'
export default {
  name: 'CityList',
  // 属性值是从City.vue传过来的
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    // ???,对数据做映射，使{{this.$store.state.city}}直接用{{this.city}}就好
    ...mapState(['city'])
  },
  methods: {
    handleCityclick (city) {
      this.$store.dispatch('changeCity', city)
      this.$router.push('/')
    }
  },
  // mounted使生命周期函数，是当dom加载完后实行
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper, {click: true})
  },
  watch: {
    // 监听letter的值
    letter () {
      if (this.letter) {
        // 把那边兄弟Alphabet.vue传过来的对用到指定元素
        const element = this.$refs[this.letter][0]
        console.log(element)
        // 这是自带的一个，是为了能滚动到对应元素的位置
        this.scroll.scrollToElement(element)
      }
    }
  }
}

</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .birder-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .birder-topbottom
    &:before
      border-color #ccc
  .list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
  .title
    line-height .49rem
    background #eee
    padding-left .2rem
    color #666666
    font-size .26rem
  .button-list
    padding .1rem .6rem .1rem .1rem
    overflow hidden
    .button-wrapper
      float left
      width 33.33%
      .button
        margin .1rem
        padding .1rem 0
        text-align center
        border .02rem solid #ccc
        border-radius .06rem
  .item-list
    .item
      line-height .76rem
      padding-left .2rem
</style>
