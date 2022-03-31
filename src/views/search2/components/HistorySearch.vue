<template>
  <div class="history-list">
    <nav>
      <a
      href="javascript:;"
      v-for="(item, index) in list"
      :key="index"
      @click="$emit('search', item)"
      >{{item}}</a>
    </nav>
  </div>
</template>

<script>
import storage from '@/utils/storage'
export default {
  name: 'history-list',
  data () {
    return {
      list: storage.getItem('historySearch') || []
    }
  },
  watch: {
    // 每次都要重新加载一次
    '$route' () {
      this.list = storage.getItem('historySearch') || []
    }
  }
}
</script>

<style lang="scss" scoped>
.history-list{
  text-align: left;
  padding: 0 30px;
  nav {
    display: flex;
    flex-wrap: wrap;
    a {
      display: block;
      padding: 20px 10px;
      margin-right: 20px;
      color: #666;
    }
  }
}
</style>
