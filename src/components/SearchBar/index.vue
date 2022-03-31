<template>
  <div class="saerch-wrap">
    <div class="saerch-bar">
      <input
        type="text"
        v-model="val"
        v-bind="$attrs"
        @keydown.enter="search(val)"
      >
      <i class="iconfont icon-31sousuo"></i>
      <em class="iconfont icon-guanbi"></em>
    </div>
    <div class="search-keywords" v-show="KeyContent.length > 0">
      <ul class="search-box">
        <template v-for="(item,index) in KeyContent">
            <li :key="index" @click="search(item)">
              <slot :keyword="item"></slot>
            </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'seach-bar',
  props: {
    value: String,
    KeyContent: Array
  },
  data () {
    return {
      val: ''
    }
  },
  watch: {
    val (value) {
      this.$emit('input', value)
    },
    value (value) {
      this.val = value
    }
  },
  methods: {
    search (value) {
      this.$emit('search', value)
    }
  }
}
</script>

<style lang="scss" scoped>
.saerch-wrap{
  .saerch-bar{
    @include wh(100%,104px);
    padding: 20px 30px;
    box-sizing: border-box;
    position: relative;
    input {
      @include wh(100%,64px);
      background: #fff;
      border: 1px solid #ccc;
      border-radius:40px;
      outline: none;
      padding: 0 60px;
      box-sizing: border-box;
    }
    i{
      position: absolute;
      top: 35px;
      left: 50px;
      font-size: 30px;
    }
    em{
      position: absolute;
      top: 40px;
      left: 670px;
      font-size: 20px;
      color: #999;
    }
  }
  .search-keywords {
    position: fixed;
    width: 100vw;
    top: 104px;
    bottom: 0;
    text-align: center;
    background: rgba(0, 0, 0, 0.2);
    .search-box{
      background: #fff;
      li {
        padding: 0 30px;
        line-height: 80px;
        text-align: left;
      }
    }
  }
}
</style>
