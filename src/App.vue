<template>
  <div id="app">
    <!-- </keep-alive>标签就是将数据保存在内存中，第二次加载数据直接从内存调取 -->
    <!-- 加入exclude="Detail"，说明除了Detail页面外，其他页面都会做缓存 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
