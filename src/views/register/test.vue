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
      <div class="inputWrap1">
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
        <label class="codeWrap"
               for="code">
          <p>请输入验证码</p>
          <div class="codeWrap-bottom">
            <lr-input v-model="code"
                      :max='6'>
              <i class="iconfont icon-yanzhengma4"
                 slot="icon"></i>
              <Button class="code-btn"
                      @click="sendCode"
                      size='small'
                      type="default"
                      slot="right">
                {{codeText}}
              </button>
            </lr-input>
          </div>
        </label>
      </div>
      <Button class="btn1">注册</Button>
      <router-link class="jumpLogin"
                   :to="{name: '111'}">
        <div>已有账号？立即登录</div>
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
      type: 'password',
      code: '',
      codeText: '获取验证码',
      isSendCode: false
    }
  },
  methods: {
    toggleType () {
      this.type = this.type === 'password' ? 'text' : 'password'
    },
    sendCode () {
      if (validator.isMobilePhone(this.formData.phone, 'zh-CN')) {
        this.isSendCode = true
        let seconds = 3
        let timer = setInterval(() => {
          seconds--
          this.codeText = `再次获取${seconds}s`
          if (seconds === 0) {
            clearInterval(timer)
            this.codeText = '获取验证码'
          }
        }, 1000)
        this.$axios.post(this.$api.sendCode, {
          phone: this.formData.phone
        }).then(res => {
          if (res.code === 200) {
            Toast({
              message: res.msg,
              duration: 1000
            })
          }
        })
      } else {
        Toast({
          message: '不是合法手机号',
          duration: 800
        })
      }
    }
  }
}
</script>

<style scoped lang='scss' src='../login/test.scss'></style>
