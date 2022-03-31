<template>
  <div class="tab-bar">
    <nav>
      <a
        v-for="(item,index) in tabs"
        :key='index'
        :class="{active: index === activeIndex}"
        href="javascript:;"
        @click="activeIndex = index"
      >{{item[textKey]}}</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'tab-bar',
  props: {
    tabs: Array,
    textKey: {
      type: String,
      default: 'text'
    }
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  watch: {
    tabs () {
      this.activeIndex = 0
    },
    activeIndex (value) {
      this.$emit('change', value, { ...this.tabs[value] })
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-bar {
  @include wh(100%, 92px);
  line-height: 92px;
  nav{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    a {
      color: #4A4A4A;
      font-size: 24px;
      padding: 0 30px;
      &.active {
        color: $color-primary;
      }
    }
  }
}
</style>
