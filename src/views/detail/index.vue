<template>
  <div>
    <div class="commodity">
      <p>商品详情</p>
    </div>
    <!-- 详情{{$route.params.id}} -->
    <Banner :images='detail.images'/>
    <!-- info -->
    <div v-html="detail.detail"></div>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
export default {
  name: 'detail',
  components: {
    Banner
  },
  data () {
    return {
      detail: {}
    }
  },
  created () {
    this.fetchProductDetail()
  },
  methods: {
    fetchProductDetail () {
      const id = this.$route.params.id
      this.$api.product.detail(id).then((res) => {
        this.detail = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.commodity{
  height: 128px;
  p{
    font-size: 36px;
    text-align: center;
    line-height: 128px;
    font-weight: bold;
  }
}
</style>
