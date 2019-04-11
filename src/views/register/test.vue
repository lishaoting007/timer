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
        <label class="phoneWrap"
               for="phone">
          <p>请输入手机号</p>
          <input id="phone"
                 type="text">
        </label>
        <label class="psdWrap"
               for="psd">
          <p>请输入密码</p>
          <input id="psd"
                 type="password">
        </label>
        <label class="codeWrap"
               for="code">
          <p>请输入验证码</p>
          <div class="codeWrap-bottom">
            <input id="code"
                   type="text">
            <button class="code-btn">获取验证码</button>
          </div>
        </label>
      </div>
      <Button class="btn">注册</Button>
      <router-link class="jumpLogin"
                   :to="{name: '111'}">
        <div>已有账号？立即登录</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo/tomato.vue'
import { Button } from 'vant'
export default {
  components: {
    Logo,
    Button
  }
}
</script>

<style scoped lang='scss'>
@import "@/style/scss/p2r.scss";
.loginWrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .bgimg {
    z-index: -100;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: p2r(750);
    height: p2r(1334);
  }

  .text {
    height: p2r(36);
    font-size: p2r(18);
    text-align: center;
  }

  .inputWrap {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: p2r(672);
    height: p2r(568);
    background: #fff;
    .phoneWrap {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: p2r(46);
      width: p2r(586);
      height: p2r(104);
      border-bottom: p2r(2) solid #515160;

      #phone {
        border: none;
      }
    }
    // .phoneWrap::

    .psdWrap {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: p2r(62);
      width: p2r(586);
      height: p2r(104);
      border-bottom: p2r(2) solid #515160;

      #psd {
        border: none;
      }
    }

    .codeWrap {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: p2r(62);
      width: p2r(586);
      height: p2r(104);
      border-bottom: p2r(2) solid #515160;

      .codeWrap-bottom {
        display: flex;
        justify-content: space-between;

        .code-btn {
          align-self: center;
          height: p2r(50);
          border: none;
        }
      }

      #code {
        border: none;
      }
    }
  }

  .btn {
    position: absolute;
    top: p2r(828);
    width: p2r(564);
    height: p2r(120);
    background: #293550;
    font-size: p2r(40);
    color: #fff;
    border: none;
  }

  .jumpLogin {
    position: absolute;
    top: p2r(988);
    color: #fff;
  }
}
</style>
