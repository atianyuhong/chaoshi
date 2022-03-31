<template>
  <div class="banner">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide
      v-for="(item,index) in images"
      :key="index"
      >
      <img :src="item.image" />
      </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'banner',
  props: {
    images: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          disableOnInteraction: false,
          delay: 2000
        },
        loop: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.banner{
  img{
    @include wh(100%, auto)
  }
}
</style>
