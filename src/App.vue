<template>
  <div id="app">
    <router-view></router-view>
    <p class="bottom-beianhao">
      <a href="http://beian.miit.gov.cn">备案号：京ICP备19057757号-1</a>
    </p>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .bottom-beianhao {

  }
}
</style>
