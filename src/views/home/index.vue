<template>
    <div>
        <header-bar/>
        <Banner :images='bannerImages'/>
        <Navigation :list="menuList"/>
        <HotModule/>
        <div class="content">
          <!-- tab切换 -->
          <tab-bar :tabs="tabs" @change="tabChange"/>
          <wares-list :list="productList"/>
        </div>
        <!-- <banner/>
        <navigation/>
        <hot-module/>
        <div class="content">
          <tab-bar/>
          <wares-list/>
        </div> -->
    </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'
import Banner from './components/Banner.vue'
import Navigation from './components/Navigation.vue'
import HotModule from './components/HotModule.vue'

export default {
  name: 'home',
  components: {
    HeaderBar,
    Banner,
    Navigation,
    HotModule
  },
  data () {
    return {
      bannerImages: [],
      menuList: [],
      tabs: [
        { text: '新晋爆款' },
        { text: '每日必抢' },
        { text: '水果' },
        { text: '蔬菜' },
        { text: '肉蛋' },
        { text: '零食' }
      ],
      productList: [],
      fetchProductListParams: {
        page: 1,
        page_size: 10
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
    this.fetchHomeData()
    this.fetchProductList()
  },
  onScroll () {
    console.log(1111)
  },

  onScrollBottom (e) {
    this.fetchProductListParams.page += 1
  },
  methods: {
    fetchHomeData () {
      this.$api.home().then((res) => {
        this.bannerImages = res.data.banner
        this.menuList = res.data.menu
        console.log(res)
      })
    },

    tabChange (index, item) {
      console.log(index, item)
    },

    fetchProductList () {
      this.$api.product.list(this.fetchProductListParams).then((res) => {
        if (this.fetchProductListParams.page === 1) {
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

</style>
