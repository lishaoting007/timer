<template>
  <div>
    <Pie class="pie"
         :data="chartData"
         :settings='chartSettings'></Pie>
  </div>
</template>

<script>
import Pie from 'v-charts/lib/pie.common'
export default {
  components: { Pie },
  data () {
    this.chartSettings = {
      radius: 100,
      offsetY: 140,
      legendLimit: 0
    }
    return {
      chartData: {
        columns: ['name', 'time'],
        rows: this.$store.state.finishEvent
      }
    }
  }
}
</script>

<style scope>
</style>
