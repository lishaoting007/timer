<template>
  <div>
    <date-picker v-model="now"></date-picker>
  </div>
</template>

<script>
import datePicker from './components/date-picker'
export default {
  components: {
    'date-picker': datePicker
  },
  data () {
    return {
      now: new Date()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
