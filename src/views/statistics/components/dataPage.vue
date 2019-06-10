<template>
  <div class="dataPageWrap">
    <!-- allData start -->
    <div class="allData bgc bdradius">
      <div class="allDataTop topItem">
        <div class="text">累计数据</div>
      </div>
      <div class="allDataBottom">
        <div class="bottom-left">
          <div>番茄个数</div>
          <div class="bigNum bottom-bottom">
            {{ allDate.eventNum }}
          </div>
        </div>
        <div class="bottom-middle">
          <div class="top-top">总计时间</div>
          <div>
            <span class="bigNum">
              {{ Math.floor(allDate.time / 60) }}
            </span>
            <span>小时</span>
            <span class="bigNum">
              {{ Math.round(allDate.time % 60) }}
            </span>
            <span>分钟</span>
          </div>
        </div>
        <div class="bottom-right">
          <div class="top-top">单次平均专注</div>
          <div>
            <span class="bigNum">
              {{ Math.floor(allDate.average / 60) }}
            </span>
            <span>小时</span>
            <span class="bigNum">
              {{ Math.round(allDate.average % 60) }}
            </span>
            <span>分钟</span>
          </div>
        </div>
      </div>
    </div>
    <!-- allData end -->
    <!-- todayData start -->
    <div class="todayData bgc bdradius">
      <div class="todayDataTop topItem">
        <div class="topitem-item">
          <span class="text">当日数据</span>
          <span class="text">
            {{daytimeDate}}
          </span>
        </div>
        <div class="icons topitem-item">
          <i class="iconfont icon-qianjin-copy"
             @click="minusDate"></i>
          <i class="iconfont icon-qianjin"
             @click="addDate"></i>
        </div>
      </div>
      <div class="todayDataBottom">
        <div class="bottom-left">
          <div>番茄个数</div>
          <div class="bigNum bottom-bottom">
            {{ todayDate.eventNum || 0 }}
          </div>
        </div>
        <div class="bottom-right">
          <div class="top-top">总计时间</div>
          <div>
            <span class="bigNum">
              {{ Math.floor(todayDate.time/60) || 0 }}
            </span>
            <span>小时</span>
            <span class="bigNum">
              {{ Math.round(todayDate.time%60) || 0 }}
            </span>
            <span>分钟</span>
          </div>
        </div>
      </div>
    </div>
    <!-- todayData end -->
    <!-- distribution pie start -->
    <div class="distribution bgc bdradius">
      <div class="distributionTop topItem">
        <div class="topitem-item">
          <span class="text">番茄时间分布</span>
          <span class="text">
            {{ finishdateDate }}
          </span>
        </div>
        <div class="icons topitem-item">
          <i class="iconfont icon-qianjin-copy"
             @click="minusFinishDate"></i>
          <i class="iconfont icon-qianjin"
             @click="addFinishDate"></i>
        </div>
      </div>
      <div class="distributionBottom">
        <div class="pie">
          <pie :sendDate='finishdateDate'></pie>
        </div>
      </div>
    </div> -->
    <!-- distribution pie end -->
    <!-- distribution line start -->
    <div class="distribution bgc bdradius">
      <div class="distributionTop topItem">
        <div class="topitem-item">
          <span class="text">月度时间统计</span>
          <span class="text">
            {{ dayTimeMonth }}
          </span>
        </div>
        <div class="icons topitem-item">
          <i class="iconfont icon-qianjin-copy"
             @click="minusMonth"></i>
          <i class="iconfont icon-qianjin"
             @click="addMonth"></i>
        </div>
      </div>
      <div class="distributionBottom">
        <div class="line">
          <VeLine :sendThisMonth='dayTimeMonth'></VeLine>
        </div>
      </div>
    </div>
    <!-- distribution line end -->
  </div>
</template>

<script>
import pie from '@/views/statistics/components/pie.vue'
import VeLine from '@/views/statistics/components/line.vue'
import moment from 'moment'
export default {
  components: {
    pie,
    VeLine
  },
  data () {
    return {
      today: new Date(),
      today2: new Date(),
      thisMonth: new Date(),
      todayDate: { eventNum: 0, time: 0 },
      allDate: null
    }
  },
  beforeMount () {
    this.getTodayDate()
    this.getAll()
  },
  methods: {
    addDate () {
      let addDate = moment(this.today).add(1, 'd')
      this.today = addDate
    },
    minusDate () {
      let minusDate = moment(this.today).subtract(1, 'd')
      this.today = minusDate
    },
    minusFinishDate () {
      let minusDate = moment(this.today2).subtract(1, 'd')
      this.today2 = minusDate
    },
    addFinishDate () {
      let addDate = moment(this.today2).add(1, 'd')
      this.today2 = addDate
    },
    minusMonth () {
      let minusDate = moment(this.thisMonth).subtract(1, 'M')
      this.thisMonth = minusDate
    },
    addMonth () {
      let addDate = moment(this.thisMonth).add(1, 'M')
      this.thisMonth = addDate
    },
    getTodayDate () {
      let istrue = this.$store.getters.filterDayTime(this.daytimeDate)
      if (istrue.length > 0) {
        let initialTime = 0
        for (let i = 0; i < istrue.length; i++) {
          initialTime = initialTime + istrue[i].time
        }
        this.todayDate.eventNum = istrue.length
        this.todayDate.time = initialTime
      } else {
        this.todayDate = [{ eventNum: 0, time: 0 }]
      }
    },
    getAll () {
      this.allDate = this.$store.getters.getAllDate
    }
  },
  computed: {
    daytimeDate () {
      return moment(this.today).format('YYYY-MM-DD')
    },
    finishdateDate () {
      return moment(this.today2).format('YYYY-MM-DD')
    },
    dayTimeMonth () {
      return moment(this.thisMonth).format('YYYY-MM')
    }
  },
  watch: {
    daytimeDate () {
      this.getTodayDate()
    }
  }
}
</script>

<style scoped lang='scss'>
@import "@/style/scss/StatisticsData.scss";
</style>
