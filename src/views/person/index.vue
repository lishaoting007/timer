<template>
  <div>
    <NavBar :fixed='true'>
      <div class="left"
           slot="left">个人中心</div>
      <div class="right"
           slot="right">
        <i class="iconfont icon-jiahao"></i>
        <i class="iconfont icon-gengduo"></i>
      </div>
    </NavBar>
    <div class="empty"></div>
    <div class="person-top"
         v-if="!userData">
      <div class="imgWrap">
        <img src="@/assets/qiu.jpg"
             alt="@/assets/qiu.jpg">
      </div>
      <div class="wrap">
        <router-link :to="{path: '/111'}">
          <div class="wrap-top">
            <div class="jumpLogin">
              <img src="@/assets/tomato.jpg"
                   alt="@/assets/tomato.jpg">
            </div>
            <div class="numText">
              共专注1天
            </div>
          </div>
        </router-link>
        <div class="wrap-bottom">
          <div>未登录</div>
          <div>点击默认头像登录</div>
        </div>
      </div>
    </div>
    <div class="person-top"
         v-else>
      <div class="imgWrap">
        <img src="@/assets/qiu.jpg"
             alt="@/assets/qiu.jpg">
      </div>
      <div class="wrap">
        <div class="wrap-top">
          <div class="jumpLogin">
            <img :src=" userData.avatar || '@/assets/tomato.jpg'"
                 alt="@/assets/tomato.jpg">
          </div>
          <span class="numText">
            共专注{{daytimeLength}}天
          </span>
        </div>
        <div class="wrap-bottom">
          <div>
            {{userData.username || userData.phone }}
          </div>
          <div>
            {{ userData.desc || '千里之行，始于足下' }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { NavBar } from 'vant'
import page from './components/test'
export default {
  components: {
    NavBar,
    page
  },
  data () {
    return {
    }
  },
  created () {
    this.getUserMsg()
  },
  methods: {
    getUserMsg () {
      let token = localStorage.getItem('token')
      if (token) {
        this.$store.dispatch('getUserData')
      }
    }
  },
  computed: {
    daytimeLength () {
      return this.$store.getters.getDayTimeLength
    },
    userData () {
      return this.$store.state.userData
    }
  }
}
</script>

<style scoped lang='scss' src='./person.scss'>
</style>
