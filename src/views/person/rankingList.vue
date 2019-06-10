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
        <li class="ranking-item"
            v-for="(item, index) in rankingData"
            :key="index">
          <div class="item-top">
            <div class="top-left">
              {{item.userData[0].nickName}}
            </div>
            <div class="top-right">
              #{{index + 1}}
            </div>
          </div>
          <div class="item-bottom">
            <div class="bottom-left">
              {{item.userData[0].desc}}
            </div>
            <div class="bottom-right">
              <span class="bigText">
                {{Math.floor(item.allTime / 60)}}
              </span>
              小时
              <span class="bigText">
                {{Math.round(item.allTime % 60)}}
              </span>
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
    return {
      rankingData: ''
    }
  },
  methods: {
    jumpPerson () {
      this.$router.push({ name: 'person' })
    },
    getRanking () {
      this.$axios.get(this.$api.getRanking).then(res => {
        this.rankingData = res.ranking
      })
    }
  },
  created () {
    this.getRanking()
  }
}
</script>

<style lang="scss" scoped src='@/style/scss/ranking.scss'>
</style>
