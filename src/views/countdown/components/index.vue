<template>
  <div>
    <template>
      <Ring :percent="percent"
            :stroke-color="color"
            layer-color="#5b5b5b"
            trail-color="rgba(0,0,0,0.3)"
            :size='200'
            :trail-width='3'
            :stroke-width='3'>
        <slot></slot>
      </Ring>
    </template>
  </div>
</template>

<script>
import { Circle, Icon } from 'iview'
export default {
  name: 'ring',
  components: {
    'Ring': Circle,
    Icon
  },
  data () {
    return {
      percent: 100,
      timer: null
    }
  },
  methods: {
    intervalTime () {
      this.timer = setInterval(() => {
        this.minus()
        console.log('11')
      }, 1000)
    },
    minus () {
      if (this.percent <= 0) {
        return false
      }
      this.percent -= 100 / 1500
    },
    timeEnd () {
      this.percent = 0
    },
    clearMinus () {
      const timer = this.intervalTime()
      clearInterval(timer)
    }
  },
  computed: {
    color () {
      let color = '#97FFFF'
      if (this.percent === 100) {
        color = '#5cb85c'
      }
      return color
    }
  }
}
</script>

<style scoped>
</style>
