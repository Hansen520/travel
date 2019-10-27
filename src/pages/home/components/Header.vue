<template>
  <div class="header">
      <div class="header-left">
        <span class="iconfont">&#xe624;</span>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题</div>
      <div class="header-right">城市
        <span class="iconfont">&#xe64a;</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}

</script>

<style lang="stylus" scoped>
// scoped使模块唯一化，私有化
    @import '~styles/varibles.styl'
    .header
      display: flex
      line-height: 0.86rem
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
        width: 1.24rem
        float: right
        text-align: center
</style>
