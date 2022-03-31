<template>
  <div class="navigation">
    <a
      v-for="(item,index) in list"
      :key="index"
      href="javascript:;"
    >
      <img :src="item.image" alt="">
      <span>{{item.text}}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  @include wh(100%, auto);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: #fff;
  a {
    @include wh(20%, auto);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    padding: 20px 0;
    img{
      @include wh(100px,100px);
    }
    span{
      color: rgb(102,102,102);
      margin-top: 4px;
    }
  }
}
</style>
