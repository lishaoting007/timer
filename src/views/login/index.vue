<template>
  <div>
    <div class="loginWrap">
      <img class="bgimg"
           src="@/assets/fengguang.jpg"
           alt="@/assets/fengguang.jpg">
      <Logo></Logo>
      <div class="text">
        番茄Todo 你的自我提升助手
      </div>
      <div class="inputWrap">
        <label class="phoneWrap">
          <p>请输入手机号</p>
          <lr-input class="phone"
                    v-model="formData.phone"
                    :type='"text"'>
            <i class="iconfont icon-shouji1"
               slot='icon'></i>
          </lr-input>
        </label>
        <label class="psdWrap">
          <p>请输入密码</p>
          <lr-input class="psd"
                    v-model="formData.password"
                    :type='type'>
            <i class="iconfont"
               @click="toggleType"
               :class="type==='password'?'icon-yanjing1':'icon-yanjing'"
               slot="icon"></i>
          </lr-input>
        </label>
      </div>
      <Button class="btn"
              @click="handleLogin">登录</Button>
      <router-link class="jumpRegister"
                   :to="{name: 'register'}">
        <div>没有账号？立即注册</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo/tomato.vue'
import { Button, Toast } from 'vant'
import lrInput from '@/components/Lr-input'
import validator from 'validator'
export default {
  components: {
    Logo,
    Button,
    lrInput
  },
  data () {
    return {
      formData: {
        phone: '',
        password: ''
      },
      type: 'password'
    }
  },
  methods: {
    toggleType () {
      this.type = this.type === 'password' ? 'text' : 'password'
    },
    handleLogin () {
      let phoneStatus = validator.isMobilePhone(this.formData.phone, 'zh-CN')
      let passwordStatus = validator.isLength(this.formData.password, { min: 6, max: 20 })
      if (phoneStatus && passwordStatus) {
        this.$axios.post(this.$api.login, this.formData).then(res => {
          if (res.code === 200) {
            localStorage.setItem('token', res.token)
            Toast({
              message: '登录成功',
              duration: 1000
            })
            setTimeout(() => {
              this.$router.push({ name: 'person' })
            }, 1000)
          } else {
            Toast({
              message: res.msg,
              duration: 800
            })
          }
        })
      } else {
        if (!phoneStatus) {
          Toast({
            message: '请输入合法手机号',
            duration: '800'
          })
        } else if (!passwordStatus) {
          Toast({
            message: '请输入6位以上20位以下密码',
            duration: 800
          })
        }
      }
    }
  }
}
</script>

<style scoped lang='scss' src='@/style/scss/login.scss'></style>
