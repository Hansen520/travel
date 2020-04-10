<template>
  <div>
    <div class="search">
      <input class="search-input" v-model="keyword" type="text" placeholder="输入城市名或者拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityclick(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNodata">没有找到对应的匹配项</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import {mapState} from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNodata () {
      return !this.list.length
    },
    // ???,对数据做映射，使{{this.$store.state.city}}直接用{{this.city}}就好
    ...mapState(['city'])
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearInterval(this.timer)
      }
      this.timer = setInterval(() => {
        const result = []
        for (const i in this.cities) {
          // 是对每个字母的内部进行foreach
          this.cities[i].forEach((value) => {
            // 判断数据里面是否有this.keyword,this.keyword是通过v-model传进来的
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    handleCityclick (city) {
      this.$store.dispatch('changeCity', city)
      this.keyword = ''
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search, {
      // 内容可以被点击
      click: true
    })
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height .72rem
    padding 0 .1rem
    background $bgColor
    .search-input
      box-sizing:border-box
      width 100%
      height .62rem
      line-height .62rem
      padding:0 .1rem
      text-align center
      border-radius .06rem
      color #666
  .search-content
    position absolute
    overflow hidden
    top 1.58rem
    left 0
    right 0
    bottom 0
    z-index 1
    overflow hidden
    .search-item
      line-height .62rem
      padding-left .2
      background #fff
      color #666
</style>
