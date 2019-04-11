<template>
  <div>
    <NavBar :fixed='true'>
      <div class="left"
           slot="left">个人中心</div>
      <div class="right"
           slot="right">
        <i class="iconfont icon-jiahao"></i>
        <i class="iconfont icon-gengduo"></i>
      </div>
    </NavBar>
    <div class="empty"></div>
    <page></page>
  </div>
</template>

<script>
import { NavBar } from 'vant'
import page from './components/test'
export default {
  components: {
    NavBar,
    page
  }
}
</script>

<style scoped lang='scss'>
@import "@/style/scss/p2r.scss";
.Wrap {
  position: relative;
}
.empty {
  height: p2r(154);
}
.left {
  height: p2r(154);
  line-height: p2r(154);
  font-size: p2r(40);
  color: #fff;
}

.right {
  display: flex;
  justify-content: space-between;
  width: p2r(200);
  height: p2r(154);

  .iconfont {
    font-size: p2r(40);
    color: #fff;
    align-self: center;
    flex: 1;
  }
}
/deep/.van-nav-bar {
  height: p2r(154);
  background-color: #f85648;
}

/deep/.van-nav-bar__right {
  right: 0;
}
</style>
