<template>
  <div>
    <BookInfo :info="info"></BookInfo>
  </div>
</template>

<script  type='text/ecmascript-6'>
import { get } from 'utils/request'
import BookInfo from '@/components/BookInfo'
export default {
  name: 'Detail',
  data () {
    return {
      bookid: '',
      info: {}
    }
  },
  components: {
    BookInfo
  },
  methods: {
    async getDetail () {
      const info = await get('/weapp/bookdetail', { id: this.bookid })
      console.log(info)
      wx.setNavigationBarTitle({
        title: info.title
      })
      this.info = info
    }
  },
  mounted () {
    this.bookid = this.$root.$mp.query.id
    this.getDetail()
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

<style scoped>
</style>
