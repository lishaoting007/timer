<template>
  <div>
    <NavBar :fixed='true'>
      <div class="left"
           slot="left">历史记录时间轴</div>
      <div class="right"
           slot="right">
        <i class="iconfont icon-jiahao"></i>
        <i class="iconfont icon-gengduo"></i>
      </div>
    </NavBar>
    <!-- <div class="empty"></div> -->
    <pannel v-model="now"></pannel>
  </div>
</template>

<script>
import { NavBar } from 'vant'
import pannel from './components/pannel'
export default {
  components: {
    NavBar,
    pannel
  },
  data () {
    return {
      now: new Date()
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss" src='@/style/scss/calendar.scss'>
</style>
