<template>
    <div class="classify-page">
        <tab-bar
        :tabs="tabs"
        textKey="categoryName"
        @change="tabChange"
        class="parent-category"
        />
      <!-- 左边 -->
      <div class="right-content">
        <tab-bar
        :tabs="childrenTabs"
        textKey="categoryName"
        @change="childrenTabChange"
        class="children-category"
        />
        <wares-list
        class="wares"
        :list="productList"
        />
      </div>
    </div>
</template>

<script>
export default {
  name: 'classify',
  data () {
    return {
      tabs: [],
      childrenTabs: [],
      productList: [],
      fetchProductListParams: {
        page: 1,
        page_size: 10,
        categoryId: ''
      }
    }
  },
  watch: {
    fetchProductListParams: {
      handler: 'fetchProductList',
      deep: true
    }
  },
  created () {
    this.fetchCategory()
    this.fetchProductList()
  },
  // 下拉加载
  onScrollBottom (e) {
    this.fetchProductListParams.page += 1
  },
  // methods 方法 事件 函数
  methods: {
    async fetchCategory () {
      const res = await this.$api.product.category()
      console.log(res)
      this.tabs = res.data
      this.childrenTabs = res.data[0].children
      this.fetchProductListParams.categoryId = res.data[0].categoryId
      this.fetchProductList()
    },
    tabChange (index, item) {
      if (item.children) {
        this.childrenTabs = [{
          categoryName: '全部',
          // item.id 所有的id
          categoryId: item.categoryId
        }].concat(item.children)
      } else {
        this.childrenTabs = [{
          categoryName: '全部',
          categoryId: item.categoryId
        }]
      }
      this.fetchProductListParams.categoryId = item.categoryId
      this.fetchProductListParams.page = 1
    },
    childrenTabChange (index, item) {
      this.fetchProductListParams.categoryId = item.categoryId
      this.fetchProductListParams.page = 1
    },
    fetchProductList () {
      this.$api.product.list(this.fetchProductListParams).then((res) => {
        if (this.fetchProductListParams.page === 1) {
          window.scrollTo(0, 0)
          this.productList = res.data
        } else {
          this.productList = this.productList.concat(res.data)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.classify-page {
  @include wh(100vw, auto);
  .parent-category {
    @include wh(172px, calc(100vh - 100px));
    overflow: auto;
    position: fixed;
    top: 0;
    background: #FAFAFA;
    ::v-deep nav {
      display: flex;
      flex-direction: column;
      a {
        &.active {
          background: #fff;
          color: #000;
          font-weight: bold;
        }
      }
    }
  }
  .right-content{
    @include wh(100vw, auto);
    box-sizing: border-box;
    padding-left: 176px;
    .children-category {
      width: 100%;
      overflow: auto;
      border-bottom:1px solid #eee;
      position: sticky;
      top: 0;
      z-index: 100;
      background: #fff;
      ::v-deep nav {
        justify-content: flex-start;
        a {
          flex:initial;
          flex-shrink: 0;
          padding: 0 20px;
        }
      }
    }
  }
}
</style>
