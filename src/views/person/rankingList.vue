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
            <div class="top-left">THEEND</div>
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
        <li class="ranking-item">
          <div class="item-top">
            <div class="top-left">梅三433</div>
            <div class="top-right">#2</div>
          </div>
          <div class="item-bottom">
            <div class="bottom-left">晨光清澈</div>
            <div class="bottom-right">
              <span class="bigText">18</span>
              小时
              <span class="bigText">25</span>
              分钟
            </div>
          </div>
        </li>
        <li class="ranking-item">
          <div class="item-top">
            <div class="top-left">长安糖人</div>
            <div class="top-right">#3</div>
          </div>
          <div class="item-bottom">
            <div class="bottom-left">仙人掌不是花，没办法被人捧在手上。</div>
            <div class="bottom-right">
              <span class="bigText">17</span>
              小时
              <span class="bigText">05</span>
              分钟
            </div>
          </div>
        </li>
        <li class="ranking-item">
          <div class="item-top">
            <div class="top-left">加油</div>
            <div class="top-right">#4</div>
          </div>
          <div class="item-bottom">
            <div class="bottom-left">加油！加油！加油！</div>
            <div class="bottom-right">
              <span class="bigText">16</span>
              小时
              <span class="bigText">55</span>
              分钟
            </div>
          </div>
        </li>
        <li class="ranking-item">
          <div class="item-top">
            <div class="top-left">二战成硕</div>
            <div class="top-right">#5</div>
          </div>
          <div class="item-bottom">
            <div class="bottom-left">学习令我快乐！！！</div>
            <div class="bottom-right">
              <span class="bigText">16</span>
              小时
              <span class="bigText">45</span>
              分钟
            </div>
          </div>
        </li>
        <li class="ranking-item">
          <div class="item-top">
            <div class="top-left">完成大于完美</div>
            <div class="top-right">#6</div>
          </div>
          <div class="item-bottom">
            <div class="bottom-left">人越懒，明天要做的事情越多！</div>
            <div class="bottom-right">
              <span class="bigText">15</span>
              小时
              <span class="bigText">00</span>
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
