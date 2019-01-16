<template>
  <div class="bookinfo">
    <div class="thumb">
      <img :src="info.image"
           alt="detailImg"
           class="back"
           mode="aspectFill">
      <img :src="info.image"
           alt="detailImg"
           class="img"
           mode="aspectFit">
      <div class="info">
        <div class="title">
          {{info.title}}
        </div>
        <div class="author">
          {{info.author}}
        </div>
      </div>
    </div>
    <div class="detail">
      <img class="avatar" :src="userinfo.image" alt="avatar" mode="aspectFit">
      {{userinfo.name}}
      <div class="right text-primary">{{info.rate}}分<Rate :value="info.rate"></Rate></div>
    </div>
    <div class="detail">
      {{info.publisher}}
      <div class="right">{{info.price}}</div>
    </div>
    <div class="tags">
      <div class="badge" v-for="tag in info.tags" :key="tag">{{tag}}</div>
    </div>
    <div class="summary">
      <p v-for="sum in info.summary" :key="sum">{{sum}}</p>
    </div>
  </div>
</template>

<script  type='text/ecmascript-6'>
import Rate from '@/components/Rate'
export default {
  name: 'BookInfo',
  props: {
    info: Object
  },
  components: {
    Rate
  },
  computed: {
    userinfo () {
      return this.info.user_info || {}
    }
  }
}
</script>

<style scoped lang='scss'>
.bookinfo {
  font-size: 14px;

  .badge {
    display: inline-block;
    margin: 5px;
    border-radius: 10px;
    border: 1px solid #EA5a49;
    color: #EA5a49;
    padding: 5px;
  }
  .summary {
    padding: 0 15px;
    margin-top: 10px;
    p {
      text-indent: 20px;
      font-size: 14px;
    }
  }
  .right{
    float: right;
  }
  .detail {
    padding: 5px 10px;
    .avatar {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      vertical-align: middle;
    }
  }
  .thumb {
    width: 750rpx;
    height: 500rpx;
    overflow: hidden;
    position: relative;
    .back {
      filter: blur(15px);
      width: 100%;
    }
    .img {
      position: absolute;
      width: 100%;
      height: 300rpx;
      top: 30rpx;
      left: 0;
    }
    .info {
      color: #fff;
      position: absolute;
      width: 100%;
      left: 0;
      top: 330rpx;
      text-align: center;
      .title {
        font-size: 20px;
      }
      .author {
        font-size: 14px;
      }
    }
  }
}
</style>
