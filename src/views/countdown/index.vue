<template>
  <div>
    <countdown :time='25* 60 * 1000'
               :auto-start='false'
               ref='countdown'
               :tag="'h1'">
      <template slot-scope="props">{{ props.minutes }}:{{ props.seconds }} </template>
    </countdown>
    <button @click="startCountdown">开始</button>
    <button @click="abortCountdown">暂停</button>
    <button @click="endCountdown">结束</button>
  </div>
</template>

<script>
export default {
  methods: {
    startCountdown () {
      this.$refs.countdown.start()
    },
    abortCountdown () {
      this.$refs.countdown.abort()
    },
    endCountdown () {
      this.$refs.countdown.end()
    }
  }
}
</script>

<style scoped>
</style>
