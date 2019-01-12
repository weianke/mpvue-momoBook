<script>
import {get} from 'utils/request'
export default {
  async created () {
    const res = await get('/weapp/demo')
    console.log(res)
    console.log('小程序启动了')
  }
}
</script>

<style>

</style>
