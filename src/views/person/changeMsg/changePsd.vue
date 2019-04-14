<template>
  <div>
    <NavBar>
      <div class="left"
           @click="jumpUserMsg"
           slot="left">返回</div>
      <div class="left"
           slot="title">修改密码</div>
    </NavBar>
    <div class="wrap">
      <changeInput placeholder="请输入原密码"
                   :title='"原密码："'
                   :type='oldPsdType'
                   v-model="formData.password">
        <i slot="icon"
           class="iconfont"
           :class="oldPsdType==='password'?'icon-biyanjing':'icon-yanjingzheng'"
           @click="toggleOldPsdType"></i>
      </changeInput>
      <changeInput placeholder="请输入新密码"
                   :title='"新密码："'
                   :type='newPsdType'
                   ref="changePsd"
                   v-model="formData.changePassword">
        <i slot="icon"
           class="iconfont"
           :class="newPsdType==='password'?'icon-biyanjing':'icon-yanjingzheng'"
           @click="toggleNewPsdType"></i>
      </changeInput>
      <div class="btnWrap">
        <Button class="btn"
                size='large'
                round
                @click="handleSave">
          确定修改
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import changeInput from '@/views/person/components/changeInput'
import { NavBar, Button, Toast } from 'vant'
export default {
  components: {
    changeInput,
    NavBar,
    Button
  },
  data () {
    return {
      oldPsdType: 'password',
      newPsdType: 'password',
      formData: {
        password: '',
        changePassword: ''
      }
    }
  },
  methods: {
    jumpUserMsg () {
      this.$router.push({ name: 'userMsg' })
    },
    handleSave () {
      this.$axios.post(this.$api.changePassword, this.formData).then(res => {
        if (res.code === 200) {
          Toast({
            message: '密码修改成功,需要重新登录',
            duration: 1000
          })
          localStorage.removeItem('token')
          this.$store.commit('CHANGE_USER_DATA', {})
          setTimeout(() => {
            this.$router.push({ name: 'login' })
          }, 1000)
        } else {
          Toast({
            message: res.msg,
            duration: 1000
          })
        }
      })
    },
    toggleOldPsdType () {
      this.oldPsdType = this.oldPsdType === 'password' ? 'text' : 'password'
    },
    toggleNewPsdType () {
      this.newPsdType = this.newPsdType === 'password' ? 'text' : 'password'
    }
  }
}
</script>

<style lang="scss" scoped src='@/style/scss/change.scss'>
</style>
