<template>
  <div class="person-top">
    <div class="imgWrap">
      <img src="@/assets/qiu.jpg"
           alt="@/assets/qiu.jpg">
    </div>
    <div class="wrap">
      <div class="wrap-top">
        <div class="jumpLogin">
          <img src="@/assets/tomato.jpg"
               alt="@/assets/tomato.jpg">
        </div>
        <div class="numText">
          共专注1天
        </div>
      </div>
      <div class="wrap-bottom">
        <div>未登录</div>
        <div>点击默认头像登录</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='scss'>
@import "@/style/scss/p2r.scss";

.person-top {
  // position: relative;
  height: p2r(280);
  clear: both;

  .imgWrap {
    z-index: -100;
    position: absolute;
    top: p2r(154);
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    height: p2r(280);
  }

  .wrap {
    margin-left: p2r(50);
    height: p2r(280);

    .wrap-top {
      margin-top: p2r(30);
      display: flex;
      justify-content: flex-start;

      .jumpLogin {
        overflow: hidden;
        width: p2r(126);
        height: p2r(126);
        border-radius: 50%;
        background: #fff;
      }

      .numText {
        align-self: flex-end;
        margin-left: p2r(40);
        width: p2r(110);
        height: p2r(30);
        line-height: p2r(30);
        text-align: center;
        font-size: p2r(16);
        color: #d84315;
        background: #ffe7e0;
        border-radius: p2r(6);
      }
    }

    .wrap-bottom {
      margin-top: p2r(24);
      color: #fff;

      div:nth-child(1) {
        margin-left: p2r(12);
        font-size: p2r(30);
        font-weight: bold;
      }

      div:nth-child(2) {
        margin: p2r(10) 0 0 p2r(12);
      }
    }
  }
}
</style>
