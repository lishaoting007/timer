<template>
  <div>
    <div class="page-wrap">
    </div>
    <NavBar :fixed='true'>
      <div class="left"
           @click="jumpPerson"
           slot="left">返回</div>
      <div class="left"
           slot="title">排行榜</div>
    </NavBar>
    <div class="empty"></div>
    <div class="ranking-wrap">
      <ul>
        <li class="ranking-item">
          <div class="item-top">
            <div class="top-left">我的昵称</div>
            <div class="top-right">#1</div>
          </div>
          <div class="item-bottom">
            <div class="bottom-left">千里之行，始于足下千里之行，始于足下</div>
            <div class="bottom-right">
              <span class="bigText">19</span>
              小时
              <span class="bigText">54</span>
              分钟
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="ranking-bottom">
      *时长不代表全部收获，找到对的方向并持之以恒吧
    </div>
  </div>
</template>

<script>
import { NavBar } from 'vant'
export default {
  name: 'rankingList',
  components: {
    NavBar
  },
  data () {
    return {}
  },
  methods: {
    jumpPerson () {
      this.$router.push({ name: 'person' })
    }
  }
}
</script>

<style lang="scss" scoped src='@/style/scss/ranking.scss'>
</style>
