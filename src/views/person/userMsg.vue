<template>
  <div>
    <NavBar :fixed='true'>
      <div class="left"
           @click="jumpPerson"
           slot="left">返回</div>
      <div class="left"
           slot="title">个人信息</div>
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
              昵称：{{userData.nickName || userData.phone }}
            </div>
            <div class="desc">
              {{userData.desc || "千里之行，始于足下" }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modifyItem"
         @click="showName">
      <div class="text">修改昵称</div>
    </div>
    <div class="modifyItem"
         @click="showDesc">
      <div class="text">修改个性签名</div>
    </div>
    <div class="modifyItem"
         @click="showPsd">
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
import changeInput from '@/views/person/components/changeInput'
export default {
  components: {
    NavBar,
    uploadFile,
    changeInput
  },
  data () {
    return {
      tomato
    }
  },
  methods: {
    jumpPerson () {
      this.$router.push({ name: 'person' })
    },
    logOut () {
      localStorage.removeItem('token')
      this.$store.commit('CHANGE_USER_DATA', {})
      this.$router.push({ name: 'person' })
    },
    changeAvatar (url) {
      this.$axios.put(this.$api.changeUser, { avatar: url }).then(res => {
        if (res.code === 200) {
          new Promise(resolve => {
            this.$store.dispatch('getUserData')
            resolve()
          }).then(() => {
            Toast({
              message: '头像修改成功',
              duration: 1000
            })
            setTimeout(() => {
              this.$router.replace('/userMsg')
            }, 1000)
          })
        } else {
          Toast({
            message: '头像修改失败'
          })
        }
      })
    },
    showName () {
      this.$router.push({ name: 'changeName' })
    },
    showDesc () {
      this.$router.push({ name: 'changeDesc' })
    },
    showPsd () {
      this.$router.push({ name: 'changePsd' })
    }
  },
  computed: {
    userData () {
      return this.$store.state.userData
    }
  }
}
</script>

<style lang="scss" scoped src='@/style/scss/userMsg.scss'>
</style>
