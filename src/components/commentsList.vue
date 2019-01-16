<template>
  <div class="commentsList">
    <div class="page-title" v-if="comments.length">
      评论
    </div>
    <div class="comment"
         v-for="comment in comments"
         :key="comment.id">
      <div class="user">
        <div class="inline">
          <img :src="comment.image"
               class="avatar"
               mode="aspectFit"> {{comment.title}}
        </div>
        <div class="right">
          {{comment.location || '未知地点'}}
          <span class="text-primary">--</span>
          {{comment.phone || '未知型号'}}
        </div>
      </div>
      <div class="content">
        {{comment.comment}}
      </div>
    </div>
  </div>
</template>

<script  type='text/ecmascript-6'>
export default {
  name: 'CommentsList',
  props: {
    comments: Array
  }
}
</script>

<style scoped lang='scss'>
.commentsList {
  background: #eee;
  font-size: 14px;
  .comment {
    background: #fff;
    margin-bottom: 10px;
    padding: 5px 20px;
    .content {
      margin: 10px 0;
    }
    .user {
      .inline {
        display: inline;
        .avatar {
          vertical-align: middle;
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }         
      }
    }
  }
}
</style>