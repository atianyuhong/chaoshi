<template>
  <div class="header-ber">
    <a href="javascript:;">
      <i class="iconfont icon-weizhi"></i>
      <output>送至：北京八维研修学院</output>
      <i class="iconfont icon-xiala"></i>
    </a>
    <router-link to='/search2'><i class="iconfont icon-31sousuo"></i></router-link>
  </div>
</template>

<script>
export default {
  name: 'header-bar'
}
</script>

<style lang="scss" scoped>
.header-ber{
  @include wh (100vw, 98px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  box-sizing: border-box;
  background: #fff;
  a {
    color: #999999;
  }
}
</style>
