<template>
  <div>
    <Ring class="slotWrap"
          v-model="currentRate"
          :color="color"
          size="200px"
          layer-color="#ebedf0"
          :speed='100'
          :clockwise="true"
          :stroke-width="30">
      <slot>
      </slot>
    </Ring>
  </div>
</template>

<script>
import { Circle } from 'vant'
export default {
  name: 'ring',
  components: {
    'Ring': Circle
  },
  data () {
    return {
      currentRate: 100,
      clearTimer: null,
      toggleStart: false
    }
  },
  methods: {
    intervalTime () {
      this.clearTimer = setInterval(() => {
        console.log(this.toggleStart)
        if (this.toggleStart === false || this.currentRate === 0) {
          clearInterval(this.clearTimer)
        }
        this.minus()
      }, 1000)
    },
    minus () {
      if (this.currentRate <= 0) {
        return false
      }
      this.currentRate -= 100 / 1500
    },
    timeEnd () {
      this.currentRate = 0
    },
    clearMinus () {
      this.currentRate = 0
    },
    toggle () {
      this.toggleStart = !this.toggleStart
    }
  },
  computed: {
    color () {
      let color = '#97FFFF'
      if (this.currentRate === 100) {
        color = '#5cb85c'
      }
      return color
    }
  }
}
</script>

<style scoped>
</style>
