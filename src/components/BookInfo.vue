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
  </div>
</template>

<script  type='text/ecmascript-6'>
export default {
  name: 'BookInfo',
  props: {
    info: Object
  }
}
</script>

<style scoped lang='scss'>
.bookinfo {
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
