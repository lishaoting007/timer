<template>
  <div>
    <NavBar>
      <div class="left"
           @click="jumpUserMsg"
           slot="left">返回</div>
      <div class="left"
           slot="title">修改密码</div>
    </NavBar>
    <changeInput placeholder="请输入旧密码"
                 :type='"password"'></changeInput>
  </div>
</template>

<script>
import changeInput from '@/views/person/components/changeInput'
import { NavBar } from 'vant'
export default {
  components: {
    changeInput,
    NavBar
  },
  methods: {
    jumpUserMsg () {
      this.$router.push({ name: 'userMsg' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/scss/p2r.scss";
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
</style>
