<script>
import {get} from 'utils/request'
export default {
  async created () {
    const res = await get('/weapp/demo')
    console.log(res)
  }
}
</script>

<style>

</style>
