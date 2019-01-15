<template>
  <div>
    <Card v-for="book in books"
          :key="book.id"
          :book="book">
    </Card>
    <p class="text-footer" v-if="!more">没有更多数据</p>
  </div>
</template>

<script  type='text/ecmascript-6'>
// 35条数据
// 每次加载10条
// 0页   0-10
// 1     10-20
// 2     20-30（5）
// page 当前第几页

// 没有更多数据
// 1. page=0 不能显示这条提醒
// 2. page>0 数据长度<10 停止触底加载
import { get } from 'utils/request'
import Card from '@/components/Card'
export default {
  name: 'book',
  components: {
    Card
  },
  data () {
    return {
      books: [],
      page: 0,
      more: true
    }
  },
  methods: {
    async getList (init) {
      if (init) {
        this.page = 0
        this.more = true
      }
      wx.showNavigationBarLoading();
      const books = await get('/weapp/booklist', { page: this.page })   
      if (books.list.length < 10 && this.page > 0) {
        // 最后一页数据 隐藏more
        this.more = false
      }
      // 初始状态
      if (init) {
        this.books = books.list
        wx.stopPullDownRefresh();
      } else {
        // 上拉加载，不能直接覆盖 而是累加
        this.books = this.books.concat(books.list)
      }
    
      wx.hideNavigationBarLoading();
    }
  },
  mounted () {
    this.getList(true)
  },
  onPullDownRefresh () {
    this.getList(true)
  },
  onReachBottom () {
    if (!this.more) {
      // 没有更多
      this.more = false
      return
    }
    this.page = this.page + 1
    this.getList()
  }
}
</script>

<style scoped lang="scss">
</style>
