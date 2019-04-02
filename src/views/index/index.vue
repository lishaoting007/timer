<template>
  <div>
    <count-down :time='25* 60 * 1000'
                :auto-start='false'
                ref='countdown'
                :tag="'h1'">
      <template slot-scope="props">{{ props.minutes }}:{{ props.seconds }} </template>
    </count-down>
    <button @click="start">开始</button>
    <button @click="abort">暂停</button>
    <button @click="end">结束</button>
  </div>
</template>

<script>
export default {
  methods: {
    start () {
      this.$refs.countdown.start()
    },
    abort () {
      this.$refs.countdown.abort()
    },
    end () {
      this.$refs.countdown.end()
    }
  }
}
</script>

<style scoped>
</style>
