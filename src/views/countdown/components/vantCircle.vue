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
  props: {
    sendName: [String]
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
        if (this.toggleStart === false || this.currentRate <= 0) {
          clearInterval(this.clearTimer)
        }
        this.minus()
      }, 1000)
    },
    minus () {
      if (this.currentRate <= 0) {
        return false
      }
      this.currentRate -= 50
    },
    clearMinus () {
      this.toggleStart = false
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
  },
  watch: {
    currentRate () {
      if (this.currentRate <= 0) {
        const date = new Date()
        const month = date.getMonth() + 1
        const year = date.getFullYear()
        const day = date.getDate()
        const today = `${year}年${month}月${day}日`
        const thisMonth = `${year}年${month}月`
        const monthDay = `${month}年${day}月`
        this.$store.dispatch('insertFinishEvent', { date: today, name: this.sendName, time: 25, year, month, day })
        this.$store.dispatch('insertDayTime', { date: monthDay, time: 25, eventNum: 1, month: thisMonth })
      }
    }
  }
}
</script>

<style scoped>
</style>
