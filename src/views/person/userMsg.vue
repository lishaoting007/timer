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
          <div class="jumpLogin">
            <img :src=" userData.avatar || '@/assets/tomato.jpg'"
                 alt="@/assets/tomato.jpg">
          </div>
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
import { NavBar } from 'vant'
export default {
  components: {
    NavBar
  },
  methods: {
    logOut () {
      localStorage.removeItem('token')
      this.$store.commit('CHANGE_USERDATA', {})
    }
  },
  computed: {
    userData () {
      return this.$store.state.userData
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/scss/p2r.scss";

.empty {
  height: p2r(154);
}
.left {
  height: p2r(154);
  line-height: p2r(154);
  font-size: p2r(40);
  color: #fff;
}

/deep/.van-nav-bar {
  height: p2r(154);
  background-color: #f85648;
}

/deep/.van-nav-bar__right {
  right: 0;
}

.person-top {
  position: relative;
  height: p2r(360);
  clear: both;

  .imgWrap {
    z-index: -100;
    position: absolute;
    // top: p2r(154);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    height: p2r(360);
  }

  .wrap {
    display: flex;
    justify-content: center;
    align-content: center;
    height: p2r(360);

    .wrap-top {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: p2r(560);
      height: p2r(360);

      .jumpLogin {
        overflow: hidden;
        width: p2r(160);
        height: p2r(160);
        border-radius: 50%;
        background: #fff;
      }

      .messageWrap {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: p2r(70);
        height: p2r(160);
        color: #fff;
      }
    }
  }
}

.modifyItem {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: p2r(40);
  height: p2r(100);
  // background: #f0f5f5;
  font-size: p2r(30);
  font-weight: bolder;

  .text {
    flex: 1;
    padding-left: p2r(40);
  }
}
</style>
