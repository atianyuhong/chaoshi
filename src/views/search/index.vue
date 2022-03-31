<template>
  <div>
    <!--v-model 里面的内容外面拿到  keywods关键字-->
    <!-- {{searchkey}} -->
    <SearchBar
      v-model="searchkey"
      :KeyContent="KeyContent"
      placeholder="搜索想要的商品"
      @search="search"
    >
      <!--    模板 -->
      <template v-slot="scope">
        <div v-html="renderKeywordItem(scope.keyword.suggestedKeyword)"></div>
        <!-- {{scope.keyword.suggestedKeyword}} -->
      </template>
    </SearchBar>
    <div id="content">
    </div>
    <wares-list :list="products"/>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      isSuggest: true,
      KeyContent: [],
      searchkey: '',
      products: []
    }
  },
  watch: {
    searchkey (value) {
      if (value.length >= 1) {
        this.suggest(value)
      } else {
        this.KeyContent = []
      }
    },
    '$route' (newvalue) {
      if (newvalue.query.keyword) {
        this.fetchProductList(newvalue.query.keyword)
      } else {
        this.searchkey = ''
        this.products = []
      }
    }
  },
  created () {
    if (this.$route.query.keyword) {
      this.fetchProductList(this.$route.query.keyword)
    }
  },
  methods: {
    renderKeywordItem (text) {
      return text.replace(this.searchkey, '<b>' + this.searchkey + '</b>')
    },
    fetchProductList (key) {
      this.KeyContent = []
      this.$axios.get('/api/search', {
        params: {
          keyword: key
        }
      }).then(res => {
        this.isSuggest = true
        this.products = res.data.data
      })
    },
    suggest (value) {
      if (!this.isSuggest) {
        this.KeyContent = []
        return
      } this.$axios.get('/api/search/suggest', {
        params: {
          keyword: value
        }
      }).then((res) => {
        this.KeyContent = res.data.data
      })
    },
    search (value) {
      this.isSuggest = false
      if (typeof value === 'string') {
        if (this.$route.query.keyword) {
          this.$router.replace({
            path: '/search',
            query: {
              keyword: value
            }
          })
        } else {
          this.$router.push({
            path: '/search',
            query: {
              keyword: value
            }
          })
        }
      } else {
        this.searchkey = value.suggestedKeyword
        if (this.$route.query.keyword) {
          this.$router.replace({
            path: '/search',
            query: {
              keyword: value.suggestedKeyword
            }
          })
        } else {
          this.$router.push({
            path: '/search',
            query: {
              keyword: value.suggestedKeyword
            }
          })
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
