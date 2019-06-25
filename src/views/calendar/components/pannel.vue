<template>
  <div>
    <div class="pannel">
      <div class="pannel-nav">
        <div class="nav-left">
          <div class="monthAndDay">
            <span>
              {{this.time.month+1}}月
            </span>
            <span>
              {{this.time.day}}日
            </span>
          </div>
          <div class="year">
            {{this.time.year}}年
          </div>
        </div>
        <i class="iconfont icon-qianjin-copy"
           @click="prevMonth"></i>
        <i class="iconfont icon-qianjin"
           @click="nextMonth"></i>
        <div class="nav-right"
             @click="chooseToday">今天</div>
      </div>
      <div class="pannel-content">
        <div class="days">
          <span v-for="j in 7"
                :key="'_'+j"
                class="cell week">
            {{week[j-1]}}
          </span>
          <div v-for="i in 6"
               :key="i">
            <span v-for="j in 7"
                  :key="j"
                  @click="[chooseDate(visibleDays[(i-1) * 7 + (j-1)]), getFinishTodo(visibleDays[(i-1) * 7 + (j-1)])]"
                  class="cell"
                  :class="[
                    {notCurrentMonth: !isCurrentMonth(visibleDays[(i-1) * 7 + (j-1)])},
                    {today: isToday(visibleDays[(i-1) * 7 + (j-1)])},
                    {select: isSelect(visibleDays[(i-1) * 7 + (j-1)])&&!backToday},
                    {haveTodo: haveTodo(visibleDays[(i-1) * 7 + (j-1)])}
                  ]">
              {{visibleDays[(i-1) * 7 + (j-1)].getDate()}}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="finish"
         v-for="item in finishTodo"
         :key="item._id">
      <div class="finish-left">
        <div class="circle">
          <div class="small-circle"></div>
        </div>
      </div>
      <div class="finish-right">
        <div class="right-top">
          <div class="right-top-left">
            {{item.name}}
          </div>
          <div>已完成</div>
        </div>
        <div class="right-middle">点击填写心得</div>
        <div class="right-footer">
          <div>{{item.time}}分钟</div>
          <div class="right-footer-right">100%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as utils from './utils'
import moment from 'moment'
export default {
  directives: {
    clickOutside: { // 指令的生命周期
      bind (el, binding, vnode) {
        let handler = (e) => {
          if (el.contains(e.target)) { // 是否包含这个dom
            if (!vnode.context.isShow) {
              vnode.context.focus() // 当前虚拟dom上下文的方法
            }
          } else {
            if (vnode.context.isShow) {
              vnode.context.blur()
            }
          }
        }
        el.handler = handler
        document.addEventListener('click', handler)
      },
      unbind (el) {
        document.removeEventListener('click', el.handler)
      }
    }
  },
  props: {
    value: {
      type: Date,
      default: () => new Date()
    }
  },
  data () {
    let { year, month, day } = utils.getYearMonthDay(this.value)
    return {
      isShow: false,
      week: ['日', '一', '二', '三', '四', '五', '六'],
      time: { year, month, day },
      backToday: false,
      finishTodo: [],
      finishiTodoDate: []
    }
  },
  methods: {
    focus () {
      this.isShow = true
    },
    blur () {
      this.isShow = false
    },
    isCurrentMonth (date) { // 是否是当前月
      let { year, month } = utils.getYearMonthDay(utils.getDate(this.time.year, this.time.month, 1))
      let { year: y, month: m } = utils.getYearMonthDay(date)
      return year === y && month === m
    },
    isToday (date) { // 是否是今天
      let { year, month, day } = utils.getYearMonthDay(new Date())
      let { year: y, month: m, day: d } = utils.getYearMonthDay(date)
      return year === y && month === m && day === d
    },
    chooseDate (date) { // 选择日期
      this.time = utils.getYearMonthDay(date)
      this.$emit('input', date)
    },
    isSelect (date) {
      let { year, month, day } = utils.getYearMonthDay(this.value)
      let { year: y, month: m, day: d } = utils.getYearMonthDay(date)
      this.backToday = false
      return year === y && month === m && day === d
    },
    prevMonth () {
      let d = utils.getDate(this.time.year, this.time.month, this.time.day)
      d.setMonth(d.getMonth() - 1)
      this.time = utils.getYearMonthDay(d)
    },
    nextMonth () {
      let d = utils.getDate(this.time.year, this.time.month, 1)
      d.setMonth(d.getMonth() + 1)
      this.time = utils.getYearMonthDay(d)
    },
    chooseToday () {
      this.time = utils.getYearMonthDay(new Date())
      this.backToday = true
    },
    getFinishTodo (date) {
      // let { year, month, day } = utils.getYearMonthDay(date)
      let selectDate = moment(date).format('YYYY-MM-DD')
      this.finishTodo = this.$store.getters.filterFinishEvent(selectDate)
    },
    getFinishDate () {
      let data = this.$store.getters.getAllFinishDate
      this.finishiTodoDate = data
    },
    haveTodo (date) {
      let thisDate = moment(date).format('YYYY-MM-DD')
      return this.finishiTodoDate.includes(thisDate)
    }
  },
  mounted () {
    this.getFinishDate()
  },
  computed: {
    formatDate () {
      let { year, month, day } = utils.getYearMonthDay(this.value)
      return `${year}--${month + 1}--${day}`
    },
    visibleDays () {
      // 获取当前月的第一天
      let { year, month } = utils.getYearMonthDay(utils.getDate(this.time.year, this.time.month, this.time.day))
      let currentFirstDay = utils.getDate(year, month, 1)
      // 获取到的第一天是星期几
      let week = currentFirstDay.getDay()
      let startDay = currentFirstDay - week * 60 * 60 * 1000 * 24
      let arr = []
      // 循环42次
      for (let i = 0; i < 42; i++) {
        arr.push(new Date(startDay + i * 60 * 60 * 24 * 1000))
      }
      return arr
    }
  }
}
</script>

<style scoped lang='scss'>
@import "@/style/scss/p2r.scss";

.pannel {
  padding-top: p2r(154);
  .pannel-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: p2r(94);
    background-color: #f85648;
    color: #fff;

    .nav-left {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-left: p2r(33);

      .monthAndDay {
        font-size: p2r(44.8);
        margin-right: p2r(18);
      }
    }

    .nav-right {
      margin-right: p2r(33.6);
    }
  }
  .pannel-content {
    .cell {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin: p2r(12) p2r(28);
      width: p2r(49);
      height: p2r(49);
      font-weight: bold;
      box-sizing: border-box;
    }
    .week {
      margin-top: p2r(30);
      color: #f85648;
    }
    .haveTodo {
      border: 1px solid #f85648;
      border-radius: 50%;
    }
  }
}
.line {
  height: p2r(2);
  background-color: #f85648;
}
.finish {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .finish-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 p2r(42);
    width: p2r(5.6);
    height: p2r(171.4);
    background-color: #cfd8dc;

    .circle {
      width: p2r(28.6);
      height: p2r(28.6);
      background-color: #ff7466;
      border-radius: 50%;

      .small-circle {
        margin: p2r(5.55);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: p2r(17.5);
        height: p2r(17.5);
        border-radius: 50%;
        background-color: #f85648;
      }
    }
  }

  .finish-right {
    width: p2r(620);
    height: p2r(160);
    background-color: #f85648;
    border-radius: 8px;
    color: #fff;

    .right-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: p2r(18) p2r(20.3) p2r(16) p2r(34.3);

      .right-top-left {
        font-size: p2r(25.2);
        font-weight: bold;
      }
    }

    .right-middle {
      font-size: p2r(18.6);
      margin: 0 p2r(20.3) p2r(16) p2r(34.3);
    }

    .right-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 p2r(20.3) 0 p2r(34.3);
      font-size: p2r(19.6);
    }
  }
}

.notCurrentMonth {
  color: #ccc;
}

.today {
  color: #f85648;
  border-radius: 50%;
}
.select {
  background: #f85648;
  color: #fff;
  border-radius: 50%;
}
</style>
