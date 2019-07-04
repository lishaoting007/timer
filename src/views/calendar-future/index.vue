<template>
  <div>
    <NavBar :fixed='true'>
      <div class="left"
           @click="jumpIndex"
           slot="left">返回</div>
      <div class="left"
           slot="title">未来待办时间轴</div>
      <div class="right"
           slot="right">
        <!-- <i class="iconfont icon-jiahao"></i>
        <i class="iconfont icon-gengduo"></i> -->
      </div>
    </NavBar>
    <!-- <div class="empty"></div> -->
    <pannel v-model="now"></pannel>
  </div>
</template>

<script>
import { NavBar } from 'vant'
import pannel from './components/panel'
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
    jumpIndex () {
      this.$router.push({ name: 'index' })
    }
  }
}
</script>

<style scoped lang="scss" src='@/style/scss/calendar-future.scss'>
</style>
