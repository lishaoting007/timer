<template>
  <div class="dataPageWrap">
    <div class="allData bgc bdradius">
      <div class="allDataTop topItem">
        <div class="topText text">累计数据</div>
      </div>
      <div class="allDataBottom">
        <div class="bottom-left">
          <div>番茄个数</div>
          <div class="bigNum">14</div>
        </div>
        <div class="bottom-middle">
          <div>总计时间</div>
          <div>
            <span class="bigNum">5</span>
            <span>小时</span>
            <span class="bigNum">26</span>
            <span>分钟</span>
          </div>
        </div>
        <div class="bottom-right">
          <div>日均专注</div>
          <div>
            <span class="bigNum">54</span>
            <span>分钟</span>
          </div>
        </div>
      </div>
    </div>
    <div class="todayData bgc bdradius">
      <div class="todayDataTop topItem">
        <span class="topText text">当日数据</span>
        <span class="topText text">2019-04-04</span>
      </div>
      <div class="todayDataBottom">
        <div class="bottom-left">
          <div>番茄个数</div>
          <div class="bigNum">3</div>
        </div>
        <div class="bottom-right">
          <div>总计时间</div>
          <div>
            <span class="bigNum">1</span>
            <span>小时</span>
            <span class="bigNum">15</span>
            <span>分钟</span>
          </div>
        </div>
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
.dataPageWrap {
  width: p2r(716);
  margin: 0 p2r(17);
  color: #fff;

  .allData {
    height: p2r(150);
    margin-top: p2r(20);

    .allDataBottom {
      display: flex;
      justify-content: space-between;
      width: p2r(660);
      height: p2r(112);
      margin: 0 p2r(28);

      .bottom-left,
      .bottom-middle,
      .bottom-right {
        height: p2r(112);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
      }
    }
  }
  .todayData {
    height: p2r(176);
    margin-top: p2r(20);
    .todayDataTop {
      height: p2r(54);
    }
    .todayDataBottom {
      display: flex;
      justify-content: space-between;
      width: p2r(546);
      height: p2r(122);
      margin: 0 p2r(85);

      .bottom-left,
      .bottom-right {
        height: p2r(122);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
      }
    }
  }
}
.text {
  margin-left: p2r(20);
}
.bigNum {
  font-size: p2r(38);
}
.topText {
  align-self: flex-end;
}
.topItem {
  display: flex;
  width: p2r(702);
  height: p2r(38);
  border-bottom: p2r(2) solid rgba(255, 255, 255, 0.3);
  font-size: p2r(21);
}
.bdradius {
  border-radius: p2r(10);
}
</style>
