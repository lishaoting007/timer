<template>
  <div v-click-outside>
    <input type="text"
           :value="formatDate">
    <div class="pannel"
         v-if='true'>
      <div class="pannel-nav">
        <span>&lt;</span>
        <span @click="prevMonth">&lt;&lt;</span>
        <span>
          {{time.year}}年
        </span>
        <span>
          {{time.month + 1}}月
        </span>
        <span @click="nextMonth">&gt;&gt;</span>
        <span>&gt;</span>
      </div>
      <div class="pannel-content">
        <div class="days">
          <span v-for="j in 7"
                :key="'_'+j"
                class="cell">
            {{week[j-1]}}
          </span>
          <div v-for="i in 6"
               :key="i">
            <span v-for="j in 7"
                  :key="j"
                  @click="chooseDate(visibleDays[(i-1) * 7 + (j-1)])"
                  class="cell"
                  :class="[
                    {notCurrentMonth: !isCurrentMonth(visibleDays[(i-1) * 7 + (j-1)])},
                    {today: isToday(visibleDays[(i-1) * 7 + (j-1)])},
                    {select: isSelect(visibleDays[(i-1) * 7 + (j-1)])}
                  ]">
              {{visibleDays[(i-1) * 7 + (j-1)].getDate()}}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as utils from './utils'
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
      time: { year, month, day }
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
    isToday (date) { // 是否时今天
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
    }
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

<style lang="scss" scoped>
.pannel {
  width: 32 * 7px;
  position: absolute;
  background: #fff;
  box-shadow: 2px 2px 2px pink, 2px 2px 2px pink;

  .pannel-nav {
    display: flex;
    justify-content: space-around;
    height: 30px;

    span {
      cursor: pointer;
      user-select: none;
    }
  }

  .pannel-content {
    .cell {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      font-weight: bold;
      box-sizing: border-box;
    }
    .select {
      border: 1px solid #f00;
      border-radius: 50%;
    }
  }
  .pannel-footer {
    height: 30px;
    text-align: center;
  }
}

.notCurrentMonth {
  color: #ccc;
}
.today {
  background: #f00;
  color: #fff;
  border-radius: 50%;
}
</style>
