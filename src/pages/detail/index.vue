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
      const info = await get('/weapp/bookdetail', {id: this.bookid})
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
  }
}
</script>

<style scoped>

</style>
