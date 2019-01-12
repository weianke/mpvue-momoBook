<script>
import {get} from 'utils/request'
export default {
  async created () {
    const res = await get('/webapp/demo')
    console.log(res)
  }
}
</script>

<style>

</style>
