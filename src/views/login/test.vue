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
      <Button class="btn">登录</Button>
      <router-link class="jumpRegister"
                   :to="{name: '222'}">
        <div>没有账号？立即注册</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo/tomato.vue'
import { Button } from 'vant'
import lrInput from '@/components/Lr-input'
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
    }
  }
}
</script>

<style scoped lang='scss' src='./test.scss'></style>
