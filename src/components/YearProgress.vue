<template>
  <div class="progressbar">
    <progress :percent="percent"
              class="progress"
              activeColor="#EA5a49"
              show-info />
    <p>{{year}}年已经过去了{{days}}天，{{percent}}%</p>
  </div>
</template>

<script  type='text/ecmascript-6'>
export default {
  name: 'YearProgress',
  methods: {
    isLeapYear () {
      const year = new Date().getFullYear()
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true
      } else {
        return false
      }
    },
    getDayOfYear () {
      return this.isLeapYear() ? 366 : 365
    }
  },
  computed: {
    year () {
      return new Date().getFullYear()
    },
    days () {
      let start = new Date()
      start.setMonth(0)
      start.setDate(1)
      // start是今年第一天
      // 今年的时间戳 减去 今年第一天的时间戳
      let offset = new Date().getTime() - start.getTime()
      return parseInt(offset / 1000 / 60 / 60 / 24) + 1
    },
    percent () {
      return (this.days * 100 / this.getDayOfYear()).toFixed(1)
    }
  }
}
</script>

<style scoped lang="scss">
.progressbar {
  width: 100%;
  text-align: center;
  margin-bottom: 40px;
  progress {
    margin-bottom: 10px;
  }
}
</style>
