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
import { Circle, Toast } from 'vant'
import moment from 'moment'
// import { MessageBox } from 'mint-ui'
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
    intervalTime () { // 判断并结束计时器
      this.clearTimer = setInterval(() => {
        if (this.toggleStart === false || this.currentRate <= 0) {
          clearInterval(this.clearTimer)
        }
        this.minus()
      }, 1000)
    },
    minus () { // 单位时间减少的时间
      if (this.currentRate <= 0) {
        return false
      }
      // this.currentRate -= (100 / this.time / 60)
      this.currentRate -= 50
    },
    clearMinus () { // 在手动终止todo时结束计时器
      this.toggleStart = false
    },
    toggle () { // 切换开始暂停按钮
      this.toggleStart = !this.toggleStart
    },
    sendShow () { // 判断是否有休息时间并且跳转到首页
      if (this.time >= 15) {
        this.$emit('countdownShow', false)
      } else {
        Toast({
          message: '小于15分钟没有休息时间',
          duration: 1000
        })
        setTimeout(() => {
          this.$router.push({ name: 'index' })
        }, 1000)
      }
    }
  },
  computed: {
    color () { // 判断环的颜色
      let color = '#97FFFF'
      if (this.currentRate === 100) {
        color = '#5cb85c'
      }
      return color
    },
    time () { // parseInt
      return this.$store.getters.parseEventIndex
    },
    eventIndex () {
      return this.$store.state.eventIndex.index
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
        this.$store.dispatch('changeEventStatus', this.eventIndex)
      }
    }
  }
}
</script>

<style scoped>
</style>
