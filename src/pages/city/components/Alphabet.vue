<template>
  <ul class="list">
    <!-- prevent为阻止默认行为，防止全页面滚动 -->
    <li
    class="item"
    v-for="item of letters"
    :key="item"
    :ref="item"
    @click="handleLetterClick"
    @touchstart.prevent="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityHeader',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data: function () {
    return {
      flag: false,
      startY: 0,
      timer: ''
    }
  },
  // 页面更新并完成渲染以后updated钩子会被执行
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      if (this.timer) {
        clearInterval(this.timer)
      }
      this.timer = setInterval(() => {
        // 向City.vue发送,并传入e.target.innerText
        this.$emit('change', e.target.innerText)
      }, 16)
    },
    handleTouchStart () {
      // 保证正在执行
      this.flag = true
    },
    handleTouchMove (e) {
      if (this.flag) {
        if (this.timer) {
          clearInterval(this.timer)
        }
        // 用了setInterval是为了事件节流，使一个内容在同一个时间内不会频繁的操作函数,下面时间为16毫秒
        this.timer = setInterval(() => {
          // 首先获取A字母距离当前元素顶端的高度,做了优化
          // const startY = this.$refs['A'][0].offsetTop
          // 触摸时候字母的距离当前元素的实时高度
          const touchY = e.touches[0].clientY - 79
          // 差值代表元素的位置
          const index = Math.floor((touchY - this.startY) / 19)
          if (index >= 0 && index < this.letters.length) {
            // 向City.vue发送,并传入this.letters[index]
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.flag = false
    }
  }
}

</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
      line-height .38rem
      text-align center
      color $bgColor
</style>
