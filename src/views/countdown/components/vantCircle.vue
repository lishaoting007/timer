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
import moment from 'moment'
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
      this.currentRate -= (100 / this.time / 60)
    },
    clearMinus () {
      this.toggleStart = false
    },
    toggle () {
      this.toggleStart = !this.toggleStart
    },
    sendShow () {
      this.$emit('countdownShow', false)
    }
  },
  computed: {
    color () {
      let color = '#97FFFF'
      if (this.currentRate === 100) {
        color = '#5cb85c'
      }
      return color
    },
    time () {
      return this.$store.state.eventIndex.time
    }
  },
  watch: {
    currentRate () {
      if (this.currentRate <= 0) {
        this.sendShow()
        const date = new Date()
        const today = moment(date).format('YYYY年MM月DD日')
        const thisMonth = moment(date).format('YYYY年MM月')
        this.$store.dispatch('insertFinishEvent', { date: today, name: this.sendName, time: this.time })
        this.$store.dispatch('insertDayTime', { date: today, time: this.time, eventNum: 1, month: thisMonth })
        this.$store.dispatch('changeAllDate')
      }
    }
  }
}
</script>

<style scoped>
</style>
