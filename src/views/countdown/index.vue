<template>
  <div class="container">
    <img src="../../assets/cloud.jpg"
         alt="../../assets/hai.jpg"
         class="img">
    <div class="masking"></div>
    <div class="iconfonts"></div>
    <div class="textWrap">
      <div class="text">习惯于绝望比绝望本身更令人恐惧</div>
    </div>
    <div class="ringWrap">
      <Ring class="ring"
            ref='ring'
            @sendStart='startCountdown'
            @sendEnd='endCountdown'>
        <countdown :time='25* 60 * 1000'
                   :auto-start='false'
                   ref='countdown'
                   :tag="'h1'">
          <template slot-scope="props">{{ props.minutes }}:{{ props.seconds }} </template>
        </countdown>
      </Ring>
    </div>
    <div class="title">
      <div>
        任务名称
      </div>
      <div>正在进行中</div>
    </div>
    <div class="btns">
      <i class="iconfont icon-taiyang"
         @click="startCountdown"></i>
      <i class="iconfont icon-stop-01"
         @click="abortCountdown"></i>
      <i class="iconfont icon-k-i-reset"></i>
      <i class="iconfont icon-jieshu"
         @click="endCountdown"></i>
    </div>
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
        this.$refs.ring.intervalTime()
      })
    },
    abortCountdown () {
      // this.$refs.countdown.abort()
      return new Promise(resolve => {
        this.$refs.countdown.abort()
        resolve()
      }).then(() => {
        this.$refs.ring.clearMinus()
      })
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

<style scoped lang='scss'>
@import "@/style/scss/p2r.scss";

.container {
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: hidden;
  color: #fff;
  .img {
    position: absolute;
    z-index: -2;
  }
  .masking {
    position: absolute;
    width: p2r(750);
    height: p2r(1334);
    background: rgba(0, 0, 0, 0.3);
    z-index: -1;
  }
  .iconfonts {
    margin: p2r(94) 0 0 p2r(74);
    width: p2r(640);
    height: p2r(63);
    background: rgba(0, 0, 0, 0);
  }
  .textWrap {
    display: flex;
    justify-content: center;
    .text {
      z-index: -1;
      width: p2r(488);
      height: p2r(68);
      font-size: p2r(34);
      color: rgba(255, 255, 255, 0.8);
    }
  }
  .ringWrap {
    display: flex;
    justify-content: center;
    margin-top: p2r(208);
  }
  .title {
    display: flex;
    flex-direction: column;
    align-content: space-around;
    margin-top: p2r(60);
    height: p2r(76);
    div {
      align-self: center;
      flex: 1;
    }
  }
  .btns {
    display: flex;
    justify-content: space-around;
    margin-top: p2r(136);
    margin-left: p2r(132);
    width: p2r(476);
    .iconfont {
      font-size: p2r(42);
      color: rgba(255, 255, 255, 1);
    }
  }
}
</style>
