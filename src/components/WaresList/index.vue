<template>
  <div class="product-list">
    <router-link
      v-for="(item,index) in list"
      :key="index"
      :to="`/detail/${item.id}`"
      tag="dl"
    >
      <dt> <img :src="item.img"/></dt>
      <dd>
        <div class="header">
          <h2>{{item.name}}</h2>
          <p>累计1.5万元 / 已拼13份</p>
        </div>
        <div class="lebel">
          <span>自营</span>
          <span>团购</span>
        </div>
        <footer>
          <div class="price">
            <output>${{item.price}}</output>
            <s>$100.00</s>
          </div>
        </footer>
      </dd>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'wares-list',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
.product-list {
  dl {
    @include wh(100%, auto);
    display: flex;
    flex-direction: row;
    border-top:1px solid #eee;
    padding: 30px;
    box-sizing: border-box;
    background: #fff;
    dt {
      @include wh(240px, 240px);
      img {
        @include wh(100%, 100%);
      }
    }
    dd {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
      flex: 1;
      text-align: left;
      padding-left: 30px;
      .header {
        width: 400px;
        h2 {
          font-size: 32px;
          color: #000;
          line-height: 1.5;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        p {
          font-size: 24px;
          color: #999;
          margin-top: 20px;
        }
      }
      .lebel{
        span {
          border: 1px solid rgb(247, 69, 41);
          border-radius:10px;
          // scale:1,0.1;
          margin: 5px 5px;
          color: #fff;
          font-size: 12px;
          background: #FE3113;
        }
      }
      .price{
        output{
          color: #FE3113;
          font-size: 40px;
        }
        s{
          padding-left: 10px;
        }
      }
    }
  }
}
</style>
