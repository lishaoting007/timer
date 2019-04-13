<template>
  <div>
    <NavBar :fixed='true'>
      <div class="left"
           slot="left">个人信息</div>
    </NavBar>
    <div class="empty"></div>
    <div class="person-top">
      <div class="imgWrap">
        <img src="@/assets/qiu.jpg"
             alt="@/assets/qiu.jpg">
      </div>
      <div class="wrap">
        <div class="wrap-top">
          <uploadFile @success='changeAvatar'
                      class="avatar">
            <img class="img"
                 :src="userData.avatar || tomato"
                 :alt="tomato">
          </uploadFile>
          <div class="messageWrap">
            <div class="user">
              账号：{{ userData.phone }}
            </div>
            <div class="username">
              昵称：{{userData.username || userData.phone }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modifyItem">
      <div class="text">修改昵称</div>
    </div>
    <div class="modifyItem">
      <div class="text">修改个性签名</div>
    </div>
    <div class="modifyItem">
      <div class="text">修改密码</div>
    </div>
    <div class="modifyItem"
         @click="logOut">
      <div class="text">退出登录</div>
    </div>
  </div>
</template>

<script>
import { NavBar, Toast } from 'vant'
import uploadFile from './components/uploadFile'
import tomato from '@/assets/tomato.jpg'
export default {
  components: {
    NavBar,
    uploadFile
  },
  data () {
    return {
      tomato
    }
  },
  methods: {
    logOut () {
      localStorage.removeItem('token')
      this.$store.commit('CHANGE_USERDATA', {})
      this.$router.push({ name: 'person' })
    },
    changeAvatar (url) {
      this.$axios.put(this.$api.changeUser, { avatar: url }).then(res => {
        if (res.code === 200) {
          new Promise(resolve => {
            this.$store.dispatch('getUserData')
            console.log(111)
            resolve()
          }).then(() => {
            console.log(222)
            Toast({
              message: '头像修改成功',
              duration: 1000
            })
          })
        } else {
          Toast({
            message: '头像修改失败'
          })
        }
      })
    }
  },
  computed: {
    userData () {
      return this.$store.state.userData.user
    }
  }
}
</script>

<style lang="scss" scoped src='@/style/scss/userMsg.scss'>
</style>
