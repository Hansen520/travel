<template>
  <div class="header">
      <div class="header-left">
        <span class="iconfont">&#xe624;</span>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题</div>
      <router-link to='/city'>
        <div class="header-right">{{this.$store.state.city}}
          <span class="iconfont">&#xe64a;</span>
        </div>
      </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    // ???,对数据做映射，使{{this.$store.state.city}}直接用{{this.city}}就好
    ...mapState(['city'])
  }
}

</script>

<style lang="stylus" scoped>
// scoped使模块唯一化，私有化
    @import '~styles/varibles.styl'
    .header
      display: flex
      line-height: $headerHeight
      background: $bgColor
      color: #fff
      .header-left
        width: 0.64rem
        margin-left: .1rem
        float: left
      .header-input
        flex: 1
        height: .64rem
        line-height: .64rem
        margin-top: .12rem
        margin-left: .2rem
        background: #fff
        border-radius: .1rem
        color: #ccc
      .header-right
        min-width: 1.14rem
        padding: 0 .1rem
        float: right
        text-align: center
        color: #fff
</style>
