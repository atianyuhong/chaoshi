<template>
    <div class="footer-nav">
        <nav>
            <router-link
            v-for="(item,index) in tabs"
            :key="index"
            :to="item.path"
            active-class="active"
            >
            <img :src="item.icon"/>
            <img :src="item.selectIcon" class="select" />
            <span>{{item.text}}</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'FooterNav',
  data () {
    return {
      tabs: [
        {
          text: '首页',
          path: '/home',
          icon: require('@/assets/images/icon/home.png'),
          selectIcon: require('@/assets/images/icon/home-select.png')
        },
        {
          text: '分类',
          path: '/classify',
          icon: require('@/assets/images/icon/classify.png'),
          selectIcon: require('@/assets/images/icon/classify-select.png')
        },
        {
          text: '购物车',
          path: '/car',
          icon: require('@/assets/images/icon/car.png'),
          selectIcon: require('@/assets/images/icon/car-select.png')
        },
        {
          text: '我的',
          path: '/mine',
          icon: require('@/assets/images/icon/mine.png'),
          selectIcon: require('@/assets/images/icon/mine-select.png')
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.footer-nav{
    @include wh(100vw, auto);
    border-top: 1px solid #EBEBEB;
    position: fixed;
    bottom: 0;
    left: 0;
    background:#fff;
    z-index: 100;
    nav {
        @include wh(100%, auto);
        display: flex;
        // flex-direction:row;
        a {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            flex: 1;
            padding: 14px 0 6px 0;
            img {
                @include wh(52px, 52px);
                &.select{
                    display: none;
                }
            }
            span {
                font-size: $font-size-xs;
                color: #666666;
                margin-top: 4px;
            }
            &.active {
              span {
                color: $color-primary;
              }
              img {
                display: none;
                &.select{
                    display: block;
                }
              }
            }
        }
    }
}
</style>
