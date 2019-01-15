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
      const books = await get('/weapp/booklist')
      this.books = books.list
    }
  },
  mounted () {
    this.getList()
  }
}
</script>

<style scoped lang="scss">

</style>
