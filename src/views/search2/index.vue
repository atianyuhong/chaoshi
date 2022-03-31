<template>
  <div>
    <SearchBar2
      v-model="keyword"
      :keywords="keywords"
      class="search-header"
      @search="search"
    >
      <template v-slot="scoped">
        {{scoped.item.text}}
      </template>
    </SearchBar2>
    <div v-show="products.length < 1">
      <div class="hot-keys">
        <h2>热门搜索</h2>
        <HistorySearch  @search="search" />
      </div>
      <div class="search-keys">
        <h2>历史搜索</h2>
        <HistorySearch @search="search" />
      </div>
    </div>
    <wares-list :list="products"/>
  </div>
</template>

<script>
import HistorySearch from './components/HistorySearch.vue'
import storage from '@/utils/storage'
export default {
  components: {
    HistorySearch
  },
  data () {
    return {
      issuggest: true,
      keyword: '',
      keywords: [],
      fetchProductListParams: {
        page: 1,
        page_size: 10
      },
      products: []
    }
  },
  watch: {
    keyword (value) {
      if (value !== '') {
        this.fetchkeyword()
      } else {
        this.keywords = []
      }
    },
    // 页面跳转当前页面 参数没有发生改变 监听路由
    '$route' (newRoute) {
      this.products = []
      if (newRoute.query.keyword) {
        this.fetchProductList()
      }
    },
    // 下拉加载
    fetchProductListParams: {
      handler: 'fetchProductList',
      deep: true
    }
  },
  created () {
    if (this.$route.query.keyword) {
      this.fetchProductList()
    }
  },
  // 下拉加载 调用mixin
  onScrollBottom () {
    this.fetchProductListParams.page += 1
  },
  methods: {
    fetchkeyword () {
      if (!this.issuggest) {
        return
      }
      this.$api.product.suggest({
        keyword: this.keyword
      }).then((res) => {
        this.keywords = res.data.map(item => ({
          ...item,
          text: item.suggestedKeyword
        }))
        // catch请求错误
      }).catch(() => {
        this.keywords = []
      })
    },
    fetchProductList () {
      this.$api.product.search({
        ...this.fetchProductListParams,
        keyword: this.$route.query.keyword
      }).then((res) => {
        if (this.fetchProductListParams.page === 1) {
          this.issuggest = true
          this.products = res.data
        } else {
          this.products = this.products.concat(res.data)
        }
      })
    },
    search (value) {
      const history = storage.getItem('historySearch') || []
      // unshift前增
      history.unshift(value)
      // new Set () 数组排重
      storage.setItem('historySearch', [...new Set(history)])
      // storage.removeItem(value)
      this.keywords = []
      this.issuggest = false
      this.$router.push({
        path: '/search2',
        query: {
          keyword: value
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.search-header {
  position: sticky;
  top:0;
  background: #fff;
  z-index: 100;
}
.search-keys ~ .hot-keys{
  margin-bottom: 40px;
  h2 {
    text-align: left;
    line-height: 80px;
    padding-left: 30px;
  }
}
//  {
// margin-bottom: 40px;
//   h2 {
//     text-align: left;
//     line-height: 80px;
//     padding-left: 30px;
//   }
// }
</style>
