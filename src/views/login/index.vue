<template>
  <div class="container login">
    <div class="logo">
      <i class="iconfont icon-xuexi12"></i>
    </div>
    <div class="inputs-wrap">
      <dy-input v-model="formData.phone"
                placeholder="请输入您的手机号"></dy-input>
      <dy-input v-model="formData.password"
                placeholder="请输入您的密码"
                :type="type">
        <i class="iconfont icon-yincang"
           @click="toggleType"
           :class="{'icon-yanjing': type == 'text'}"
           slot="icon"></i>
      </dy-input>
    </div>
    <div class="router-wrap">
      <router-link to="/register">没有账号？立即注册</router-link>
    </div>
    <Button type="primary"
            size="large"
            style="margin-top: 30px;"
            @click="handleLogin">立即登录</Button>
  </div>
</template>

<script>
import dyInput from '@/components/P-input'
import { Button, Toast } from 'mint-ui'
import validator from 'validator'

export default {
  name: 'login',
  components: {
    dyInput,
    Button
  },
  data () {
    return {
      formData: {
        phone: '123',
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
      let passwordStatus = validator.isLength(this.formData.password, {
        min: 6
      })
      if (phoneStatus && passwordStatus) {
        this.$axios.post(this.$api.login, this.formData).then(res => {
          if (res.code === 200) {
            let token = res.token
            localStorage.setItem('token', token)
            Toast({
              message: '登录成功'
            })
            setTimeout(() => {
              this.$router.push({
                name: 'person'
              })
            }, 800)
          } else {
            Toast({
              message: res.msg
            })
          }
        })
      } else {
        Toast({
          message: '不是合法的手机号码或者密码长度不够6位'
        })
      }
    }
  }
}
</script>

<style scoped lang="scss" src="./login.scss"></style>
