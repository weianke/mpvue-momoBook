<template>
  <div>{{bookid}}</div>
</template>

<script  type='text/ecmascript-6'>
import { get } from 'utils/request'
export default {
  name: 'Detail',
  data () {
    return {
      bookid: ''
    }
  },
  methods: {
    async getDetail () {
      const info = await get('/weapp/bookdetail', {id: this.bookid})
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
