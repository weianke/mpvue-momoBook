<template>
  <div>
    <img :src="info.image"
         alt="detailImg">
    </div>
</template>

<script  type='text/ecmascript-6'>
export default {
  name: 'BookInfo',
  props: {
    info: Object
  }
}
</script>

<style scoped lang='scss'>
</style>
