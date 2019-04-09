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
  props: {
    sendDate: {
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
        columns: ['name', 'time'],
        rows: []
      }
    }
  },
  created () {
    this.getFinishDate()
  },
  methods: {
    getFinishDate () {
      this.chartData.rows = this.$store.getters.filterFinishEvent(this.sendDate)
    }
  },
  watch: {
    sendDate () {
      this.getFinishDate()
    }
  }
}
</script>

<style scope>
</style>
