<template>
  <div>图书页面</div>
</template>

<script  type='text/ecmascript-6'>
export default {
  created () {
    this.$http.get('/index').then(res => {
      console.log(res)
    }).catch()
  }
}
</script>

<style scoped>

</style>
