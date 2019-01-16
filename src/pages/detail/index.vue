<template>
  <div>
    <BookInfo :info="info"></BookInfo>
    <CommentsList :comments="comments"></CommentsList>
    <div class="comment"
         v-if="showAdd">
      <textarea v-model="comment"
                maxlength="100"
                class="textarea"
                placeholder="请输入图片短评"></textarea>
      <div class="location">
        地理位置
        <switch color="#EA5A49"
                :checked='location'
                @change="getGeo"></switch>
        <span class="text-primary">{{location}}</span>
      </div>
      <div class="phone">
        手机型号
        <switch color="#EA5A49"
                :checked='phone'
                @change="getPhone"></switch>
        <span class="text-primary">{{phone}}</span>
      </div>
      <button class="btn"
              @click="addComment">
        评论
      </button>
    </div>
    <div v-else
         class='text-footer'>
      未登录或者已经评论过啦
    </div>
    <button open-type='share'
            class="btn">转发给好友</button>
  </div>
</template>

<script  type='text/ecmascript-6'>
import { get, post, showModal } from 'utils/request'
import BookInfo from '@/components/BookInfo'
import CommentsList from '@/components/CommentsList'
import { userInfo } from 'os';
export default {
  name: 'Detail',
  data () {
    return {
      userInfo: {},
      bookid: '',
      info: {},
      comment: '',
      location: '',
      phone: '',
      comments: []
    }
  },
  computed: {
    showAdd () {
      // 没登录
      if (!this.userInfo) {
        return false
      }
      // 评论页面里查到有自己的openid
      if (this.comments.filter(v => v.openid === this.userInfo.openId).length) {
        return false
      }
      return true
    }
  },
  components: {
    BookInfo,
    CommentsList
  },
  methods: {
    async addComment () {
      if (!this.comment) {
        return
      }
      // 评论内容  手机型号 地理位置 图书id  用户openid
      const data = {
        openid: this.userInfo.openId,
        bookid: this.bookid,
        comment: this.comment,
        phone: this.phone,
        location: this.location
      }
      try {
        await post('/weapp/addcomment', data)
        this.comment = ''
        this.getComments()
      } catch (e) {
        showModal('失败', e.msg)
      }
      console.log(data)
    },
    async getComments () {
      const comments = await get('/weapp/commentlist', { bookid: this.bookid })
      this.comments = comments.list || []
    },
    async getDetail () {
      const info = await get('/weapp/bookdetail', { id: this.bookid })
      console.log(info)
      wx.setNavigationBarTitle({
        title: info.title
      })
      this.info = info
    },
    getGeo (e) {
      if (e.target.value) {
        // 百度token z7CKPQL455hq9R3GPEfzvfMNVFv1oRCr
        // 百度api http://api.map.baidu.com/geocoder/v2/
        const ak = 'z7CKPQL455hq9R3GPEfzvfMNVFv1oRCr'
        let url = 'http://api.map.baidu.com/geocoder/v2/'
        wx.getLocation({
          success: res => {
            this.$http.get(url, {
              location: `${res.latitude}, ${res.longitude}`,
              output: 'json',
              ak
            }).then(suc => {
              console.log(suc)
              if (suc.data.status === 0) {
                this.location = suc.data.result.addressComponent.city
              } else {
                this.location = '未知地点'
              }
            })
          }
        })
      } else {
        this.location = ''
      }
    },
    getPhone (e) {
      if (e.target.value) {
        const phoneInfo = wx.getSystemInfoSync()
        this.phone = phoneInfo.model
      } else {
        // 未选择
        this.phone = ''
      }
    }
  },
  mounted () {
    this.bookid = this.$root.$mp.query.id
    this.getDetail()
    this.getComments()
    const userinfo = wx.getStorageSync('userinfo')
    if (userinfo) {
      this.userInfo = userinfo
    }
  },
  onShareAppMessage (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: this.info.title,
      path: '/pages/detail/main?id=' + this.bookid
    }
  }
}
</script>

<style scoped lang="scss">
.comment {
  margin-top: 10px;
  .textarea {
    width: 730rpx;
    height: 200rpx;
    background: #eeeeee;
    padding: 10rpx;
  }
  .location {
    margin-top: 10px;
    padding: 5px 10px;
  }
  .phone {
    margin-top: 10px;
    padding: 5px 10px;
  }
}
</style>
