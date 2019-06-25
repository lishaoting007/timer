<template>
  <div>
    <NavBar :fixed='true'>
      <div class="left"
           slot="left">未来计划</div>
      <div class="right"
           slot="right">
        <i class="iconfont icon-jiahao"
           @click="showAddPanel"></i>
        <i class="iconfont icon-gengduo"></i>
      </div>
    </NavBar>
    <div class="empty"></div>
    <div class="plan-wrap">
      <div class="plan-item"
           v-for="(item, index) in getFuturePlan"
           :key='index'
           :class="`bbc${index+1}`">
        <div class='plan-item-left'>
          <div class="big-text">{{item.name}}</div>
          <div class="small-text">{{item.desc}}</div>
        </div>
        <div class='plan-item-middle'>
          <div class="middle-top"></div>
          <div class="middle-container">已过{{`${(new Date(today)- new Date(item.createTime))/ 24 / 60 / 60 / 1000}/${(new Date(item.date) - new Date(item.createTime)) / 24 / 60 / 60 / 1000 }`}}天</div>
        </div>
        <div class='plan-item-right'>
          <div class="big-text">还剩
            <span class="big-num">{{(new Date(item.date)- new Date(today))/ 24 / 60 / 60 / 1000}}</span>天
          </div>
          <div class="small-text">{{item.date}}</div>
        </div>
      </div>
    </div>
    <transition-group>
      <div class="masking"
           v-show="isShowAddPanel"
           key="masking"></div>
      <div class="addToDo"
           v-show="isShowAddPanel"
           key="addToDo">
        <div class="addTop">
          <div class="addTopLeft">添加待办</div>
          <div class="icons">
            <i class="iconfont icon-duihao"
               @click="addPlan"></i>
            <i class="iconfont icon-cuohao"
               @click="closePlanPanel"></i>
          </div>
        </div>
        <div class="addBottom">
          <div class="iconInputWrap">
            <i class="iconfont icon-jiahao"></i>
            <input type="text"
                   class="input"
                   placeholder="请输入目标名称"
                   v-model="onePlan.name">
          </div>
          <div class="iconInputWrap">
            <i class="iconfont icon-shijian"></i>
            <input type="text"
                   class="input"
                   placeholder="请输入目标描述"
                   v-model="onePlan.desc">
          </div>
          <div class="iconInputWrap">
            <i class="iconfont icon-riqi"></i>
            <input type="text"
                   @focus='createPicker'
                   ref='input3'
                   class="input"
                   placeholder="目标日期"
                   v-model="onePlan.date">
          </div>
          <DatetimePicker v-show='showPicker'
                          v-model="currentDate"
                          type="date"
                          @cancel='concealPicker'
                          @confirm='changeDate'
                          :min-date="minDate" />
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { NavBar, DatetimePicker } from 'vant'
import moment from 'moment'
export default {
  components: {
    NavBar,
    DatetimePicker
  },
  data () {
    return {
      onePlan: { name: '', date: '', desc: '', createTime: '' },
      isShowAddPanel: false,
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      currentDate: new Date(),
      showPicker: false
    }
  },
  methods: {
    showAddPanel () {
      this.isShowAddPanel = true
    },
    createPicker () {
      this.showPicker = true
    },
    concealPicker () {
      this.showPicker = false
    },
    changeDate () {
      this.onePlan.date = moment(this.currentDate).format('YYYY-MM-DD')
      this.showPicker = false
    },
    closePlanPanel () {
      this.isShowAddPanel = false
      this.onePlan = { name: '', date: '', desc: '', createTime: '' }
    },
    addPlan () {
      this.onePlan.createTime = moment(new Date()).format('YYYY-MM-DD')
      // let time = new Date(this.onePlan.date)
      // let now = new Date(this.onePlan.createTime)
      // let day = (time - now) / 60 / 60 / 24 / 1000
      // console.log(day)
      this.$store.dispatch('addFuturePlan', this.onePlan)
      this.isShowAddPanel = false
    }
  },
  computed: {
    getFuturePlan () {
      let data = this.$store.state.futurePlan
      return data
    },
    today () {
      return moment(new Date()).format('YYYY-MM-DD')
    }
  }
}
</script>

<style lang="scss" scoped src='@/style/scss/plan.scss'>
</style>
