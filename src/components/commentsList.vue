<template>
  <div class="commentsList">
    <div class="page-title">
      我的评论
    </div>
    <div class="comment"
         v-for="comment in comments"
         :key="comment.id">
      <div class="user">
        <div class="inline">
          <img :src="comment.image"
               class="avatar"
               mode="aspectFit">
               {{comment.title}}
        </div>
        <div class="right">
          {{comment.location || '未知地点'}}
          <span class="text-primary">--</span>
          {{comment.phone || '未知型号'}}
        </div>
      </div>
    </div>
  </div>
</template>

<script  type='text/ecmascript-6'>
export default {
  name: 'commentsList',
  props: {
    comments: Array
  }
}
</script>

<style scoped lang='scss'>
</style>