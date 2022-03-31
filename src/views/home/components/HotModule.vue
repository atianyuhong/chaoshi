<template>
  <div class="hot-module">
    <img src="//m.360buyimg.com/babel/jfs/t1/209613/11/12645/170959/61b84603Ee91be0aa/4133831665df0737.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'HotModule'
}
</script>

<style lang="scss" scoped>
.hot-module {
  @include wh (100%, auto);
  padding: 0 20px;
  box-sizing: border-box;
  img {
      @include wh (100%, auto);
      border-radius: 20px;
  }
}
</style>
