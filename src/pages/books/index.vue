<template>
  <div>
    <Card v-for="book in books"
         :key="book.id"
         :book="book">
    </Card>
  </div>
</template>

<script  type='text/ecmascript-6'>
import { get } from 'utils/request'
import Card from '@/components/Card'
export default {
  name: 'book',
  components: {
    Card
  },
  data () {
    return {
      books: []
    }
  },
  methods: {
    async getList () {
      wx.showNavigationBarLoading();
      const books = await get('/weapp/booklist')
      this.books = books.list
      wx.stopPullDownRefresh();
      wx.hideNavigationBarLoading();
    }
  },
  mounted () {
    this.getList()
  },
  onPullDownRefresh () {
    console.log('下拉')
    this.getList()
  }
}
</script>

<style scoped lang="scss">

</style>
