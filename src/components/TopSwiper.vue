<template>
  <div class="swiper">
    <swiper indicator-dots="true"
            indicator-color="#EA5a49"
            autoplay="true"
            interval="6000"
            duration="1000"
            circular="true">
      <div v-for="(top, imgIndex) in imgUrls"
           :key="imgIndex">
        <swiper-item>
          <img v-for="img in top"
               :key="img.id"
               class='slide-image'
               :src="img.image"
               alt="swiper"
               @click="bookDetail(img)"
               mode="aspectFit">
        </swiper-item>
      </div>
    </swiper>
  </div>
</template>

<script  type='text/ecmascript-6'>
import chunk from 'chunk-array'
export default {
  name: 'TopSwiper',
  props: {
    tops: Array
  },
  methods: {
    bookDetail (item) {
      wx.navigateTo({
         url: '/pages/detail/main?id=' + item.id 
      })
    }
  },
  computed: {
    imgUrls () {
      let res = this.tops
      // 使用通用chunk函数 拆分为三维数组 
      // 条数固定可以手写  console.log([res.slice(0,3),res.slice(3,6),res.slice(6)])
      return chunk.chunks(res, 3)
    }
  }
}
</script>

<style scoped lang='scss'>
.swiper {
  margin-top: 5px;
  .slide-image {
    width: 33%;
    height: 250rpx;
  }
}
</style>
