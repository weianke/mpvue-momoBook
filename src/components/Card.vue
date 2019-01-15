<template>
  <div class="book-card">
    <div class="thumb">
      <img :src="book.image" alt="book" class="image" mode="aspectFit">
    </div>
    <div class="detail">
      <div class="row">
        <div class="right">{{book.rate}}</div>
        <div class="left">{{book.title}}</div>
      </div>
       <div class="row">
        <div class="right">浏览量：</div>
        <div class="left">{{book.author}}</div>
      </div>
       <div class="row">
        <div class="right">添加人：</div>
        <div class="left">{{book.publisher}}</div>
      </div>
    </div>
  </div>
</template>

<script  type='text/ecmascript-6'>
export default {
  name: 'Card',
  props: {
    book: Array
  }
}
</script>

<style scoped lang='scss'>
.book-card {
  padding: 5px;
  overflow: hidden;
  margin-top: 5px;
  font-size: 14px;
  .thumb {
    width: 90px;
    height: 90px;
    float: left;
    margin: 0 auto;
    overflow: hidden;
    .image {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .detail {
    margin-left: 100px;
    .row {
      line-height: 20px;
      margin-bottom: 3px;
    }
    .right {
      float: right;
    }
  }
}
</style>
