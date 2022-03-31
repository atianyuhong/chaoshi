<template>
  <div>
    <header-bar></header-bar>
    <banner :pic="bannerData"></banner>
    <navigation :menu="menuList"></navigation>
    <hot-module/>
    <div class="content">
      <tab-bar :tabs="tabsData" @change="changeEvent" class="sticky"></tab-bar>
      <product-list :list="listData"></product-list>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
import HeaderBar from './components/HeaderBar.vue'
import Navigation from './components/Navigation.vue'
import HotModule from './components/HotModule.vue'
export default {
  name: 'home',
  components: {
    Banner,
    HeaderBar,
    Navigation,
    HotModule
  },
  data () {
    return {
      bannerData: [],
      menuList: [],
      tabsData: [
        { text: '新晋爆款' },
        { text: '每日必抢' },
        { text: '水果' },
        { text: '蔬菜' },
        { text: '肉蛋' },
        { text: '零食' }
      ],
      listData: [],
      listParams: {
        page: 1,
        page_size: 10
      }
    }
  },
  watch: {
    listParams: {
      handler: 'fetchListData',
      deep: true
    }
  },
  created () {
    this.fetchHomeData()
    this.fetchListData()
  },
  onScrollBottom () {
    this.listParams.page += 1
  },
  methods: {
    fetchHomeData () {
      // const script = document.createElement('script')
      // script.src = 'http://localhost:7001/api/home/?callback=getHomeData'
      // document.body.appendChild(script)
      // window.getHomeData = function (res) {
      //   console.log(res)
      // }
      this.$axios.get('/api/home/').then((res) => {
        this.bannerData = res.data.data.banner
        this.menuList = res.data.data.menu
      })
    },
    changeEvent (index, item) {
      console.log(index, item)
    },
    fetchListData () {
      this.$axios.get('/api/product/list', { params: this.listParams }).then((res) => {
        if (this.listParams.page === 1) {
          this.listData = res.data.data
        } else {
          this.listData = this.listData.concat(res.data.data)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin-bottom: 60px;
}
.sticky {
  @include border-1px(bottom,#eee);
  position: sticky;
  top: 0;
  z-index: 99;
}
</style>
