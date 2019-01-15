<template>
  <div>
    <div v-for="book in books"
         :key="book.id">
      {{book.title}}     
    </div>
  </div>
</template>

<script  type='text/ecmascript-6'>
import { get } from 'utils/request'
export default {
  name: 'book',
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

<style scoped>
</style>
