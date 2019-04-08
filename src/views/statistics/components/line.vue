<template>
  <div>
    <ve-line class="pie"
             :data="chartData"
             :settings='chartSettings'></ve-line>
  </div>
</template>

<script>
import VeLine from 'v-charts/lib/line.common'
export default {
  components: { VeLine },
  data () {
    this.chartSettings = {
      radius: 100,
      offsetY: 140,
      legendLimit: 0
    }
    return {
      chartData: {
        columns: ['date', 'time'],
        rows: [...this.$store.state.dayTime, { date: '2019年4月10日', time: 250 }]
      }
    }
  }
}
</script>

<style scope>
</style>
