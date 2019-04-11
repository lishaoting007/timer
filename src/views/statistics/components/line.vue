<template>
  <div>
    <ve-line class="pie"
             :data="chartData"
             :settings='chartSettings'>
    </ve-line>
  </div>
</template>

<script>
import VeLine from 'v-charts/lib/line.common'
export default {
  components: { VeLine },
  props: {
    sendThisMonth: {
      type: String,
      default: ''
    }
  },
  data () {
    this.chartSettings = {
      radius: 100,
      offsetY: 140,
      legendLimit: 0
    }
    return {
      chartData: {
        columns: ['date', 'time'],
        rows: []
      }
    }
  },
  created () {
    this.getDayTime()
  },
  methods: {
    getDayTime () {
      this.chartData.rows = this.$store.getters.filterDayTimeasMonth(this.sendThisMonth)
      // { date: '2019年4月4日', time: 50 }, { date: '2019年4月5日', time: 150 }, { date: '2019年4月6日', time: 75 }, { date: '2019年4月7日', time: 200 }, { date: '2019年4月8日', time: 50 },
    }
  },
  watch: {
    sendThisMonth () {
      this.getDayTime()
    }
  }
}
</script>

<style scope>
</style>
