<template>
  <div class="dataPageWrap">
    <div class="allData bgc bdradius">
      <div class="allDataTop topItem">
        <div class="text">累计数据</div>
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
        <div class="topitem-item">
          <span class="text">当日数据</span>
          <span class="text">2019-04-04</span>
        </div>
        <div class="icons topitem-item">
          <i class="iconfont icon-qianjin-copy"></i>
          <i class="iconfont icon-qianjin"></i>
        </div>
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
    <div class="distribution bgc bdradius">
      <div class="distributionTop topItem">
        <div class="topitem-item">
          <span class="text">番茄时间分布</span>
          <span class="text">2019-04-04</span>
        </div>
        <div class="icons topitem-item">
          <i class="iconfont icon-qianjin-copy"></i>
          <i class="iconfont icon-qianjin"></i>
        </div>
      </div>
      <div class="distributionBottom">
        <div class="pie">
          <pie></pie>
        </div>
      </div>
    </div>
    <div class="distribution bgc bdradius">
      <div class="distributionTop topItem">
        <div class="topitem-item">
          <span class="text">月度时间统计</span>
          <span class="text">2019-04-04</span>
        </div>
        <div class="icons topitem-item">
          <i class="iconfont icon-qianjin-copy"></i>
          <i class="iconfont icon-qianjin"></i>
        </div>
      </div>
      <div class="distributionBottom">
        <div class="line">
          <VeLine></VeLine>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pie from '@/views/statistics/components/pie.vue'
import VeLine from '@/views/statistics/components/line.vue'
export default {
  components: {
    pie,
    VeLine
  }
}
</script>

<style scoped lang='scss'>
@import "@/style/scss/StatisticsData.scss";
</style>
