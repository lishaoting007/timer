<template>
  <div class="container">
    <img src="../../assets/cloud.jpg"
         alt="../../assets/hai.jpg"
         class="img">
    <div class="masking"></div>
    <div class="iconfonts">
      <i class="iconfont">“</i>
    </div>
    <div class="textWrap">
      <div class="text">今日之洒脱处，皆从先年之不如意处得来。今日之不如意处，安知非异日之洒脱乎？</div>
    </div>
    <div class="ringWrap">
      <Ring class="ring"
            ref='ring'
            :sendName='currentEvent.name'
            @countdownShow='toggleCountShow'
            @sendStart='startCountdown'
            @sendEnd='endCountdown'>
        <countdown class="countdownText"
                   v-show="showCountdown"
                   :time='time'
                   :auto-start='false'
                   ref='countdown'
                   :tag="'h1'">
          <template slot-scope="props">{{ props.minutes }}:{{ props.seconds }} </template>
        </countdown>
        <div class="countdownText"
             v-show="!showCountdown">
          <countdown ref="countdown1"
                     :time='timeOut'
                     :auto-start='false'
                     :tag="'h1'">
            <template slot-scope="props">{{ props.minutes }}:{{ props.seconds }} </template>
          </countdown>
          <h2>休息时间</h2>
        </div>

      </Ring>
    </div>
    <div class="title">
      <div>
        当前任务：{{ currentEvent.name }}
      </div>
      <div>正在进行中</div>
    </div>
    <div class="btns">
      <i class="iconfont icon-taiyang"></i>
      <i class="iconfont icon-kaishi"
         @click="startCountdown"
         v-show="isShow"></i>
      <i class="iconfont icon-stop-01"
         @click="abortCountdown"
         v-show="!isShow"></i>
      <i class="iconfont icon-k-i-reset"></i>
      <i class="iconfont icon-jieshu"
         @click="endjump"></i>
    </div>
  </div>
</template>

<script>
import VueCountdown from '@chenfengyuan/vue-countdown'
import Ring from './components/vantCircle'
import { MessageBox } from 'mint-ui'
export default {
  components: {
    Ring,
    'countdown': VueCountdown
  },
  data () {
    return {
      timeOut: 5 * 60 * 1000,
      isShow: true,
      showCountdown: true
    }
  },
  methods: {
    startCountdown () { // 开始倒计时
      return new Promise(resolve => {
        this.$refs.countdown.start()
        this.toggleShow()
        this.$refs.ring.toggle()
        resolve()
      }).then(() => {
        this.$refs.ring.intervalTime()
      })
    },
    abortCountdown () { // 停止倒计时
      this.$refs.countdown.abort()
      this.toggleShow()
      this.$refs.ring.toggle()
    },
    endCountdown () { // 结束倒计时（todo时间及休息时间）
      this.$refs.countdown.end()
      this.$refs.countdown1.end()
      this.$refs.ring.clearMinus()
    },
    toggleShow () { // 切换开始/暂停按钮
      this.isShow = !this.isShow
    },
    toggleCountShow (data) { // 切换到休息倒计时
      this.showCountdown = data
    },
    endjump () { // 手动终止倒计时并跳转到首页
      MessageBox.confirm('确定放弃当前计时？').then(action => {
        this.endCountdown()
        this.$router.push({ name: 'index' })
      })
    }
  },
  computed: {
    currentEvent () { // 从store拿到当前todo的名称和时间
      return this.$store.state.eventIndex.item
    },
    time () { // 计算倒计时的时间
      return this.currentEvent.time * 60 * 1000
    }
  },
  watch: {
    showCountdown () { // 开始休息倒计时并在结束后跳转到首页
      if (!this.showCountdown) {
        this.$refs.countdown1.start()
        setTimeout(() => {
          this.$router.push({ name: 'index' })
        }, 301000)
      }
    }
  }
}
</script>

<style scoped lang='scss'>
@import "@/style/scss/Countdown.scss";
</style>
