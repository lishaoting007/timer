<template>
  <div>
    <Ring ref='ring'
          @sendStart='startCountdown'
          @sendEnd='endCountdown'>
      <countdown :time='25* 60 * 1000'
                 :auto-start='false'
                 ref='countdown'
                 :tag="'h1'">
        <template slot-scope="props">{{ props.minutes }}:{{ props.seconds }} </template>
      </countdown>
    </Ring>
    <button @click="startCountdown">开始</button>
    <button @click="abortCountdown">暂停</button>
    <button @click="endCountdown">结束</button>
  </div>
</template>

<script>
import Ring from './components'

export default {
  components: {
    Ring
  },
  methods: {
    startCountdown () {
      return new Promise(resolve => {
        this.$refs.countdown.start()
        resolve()
      }).then(() => {
        this.$refs.ring.minus()
      })
    },
    abortCountdown () {
      this.$refs.countdown.abort()
    },
    endCountdown () {
      return new Promise(resolve => {
        this.$refs.countdown.end()
        resolve()
      }).then(() => {
        this.$refs.ring.timeEnd()
      })
    }
  }
}
</script>

<style scoped>
</style>
