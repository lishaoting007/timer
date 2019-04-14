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
    <div v-if="!token"
         class="person-top">
      <div class="imgWrap">
        <img src="@/assets/qiu.jpg"
             alt="@/assets/qiu.jpg">
      </div>
      <div class="wrap">
        <router-link :to="{path: '/login'}">
          <div class="wrap-top">
            <div class="jumpLogin">
              <img src="@/assets/tomato.jpg"
                   alt="@/assets/tomato.jpg">
            </div>
            <div class="numText">
              共专注{{daytimeLength}}天
            </div>
          </div>
        </router-link>
        <div class="wrap-bottom">
          <div>未登录</div>
          <div>点击默认头像登录</div>
        </div>
      </div>
    </div>
    <div v-else
         class="person-top">
      <div class="imgWrap">
        <img src="@/assets/qiu.jpg"
             alt="@/assets/qiu.jpg">
      </div>
      <div class="wrap">
        <div class="wrap-top">
          <div class="jumpLogin">
            <img class="img"
                 :src=" userData.avatar || tomato"
                 :alt="tomato">
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
    <div class="modify"
         @click="jumpUserMsg">
      <i class="iconfont icon-xiugai1"></i>
      <span class="text">修改个人信息</span>
      <i class="iconfont icon-qianjin"></i>
    </div>
  </div>
</template>

<script>
import tomato from '@/assets/tomato.jpg'
import { NavBar } from 'vant'
export default {
  components: {
    NavBar
  },
  data () {
    return {
      tomato
    }
  },
  created () {
    this.getUserMsg()
  },
  methods: {
    getUserMsg () {
      if (this.token) {
        this.$store.dispatch('getUserData')
      }
    },
    jumpUserMsg () {
      if (this.token) {
        this.$router.push({ name: 'userMsg' })
      }
    }
  },
  computed: {
    daytimeLength () {
      return this.$store.getters.getDayTimeLength
    },
    userData () {
      return this.$store.state.userData.user
    },
    token () {
      return localStorage.getItem('token')
    }
  }
}
</script>

<style scoped lang='scss' src='@/style/scss/person.scss'>
</style>
