<template>
  <div class="container">
    <div class="Wrap">
      <NavBar :fixed='true'>
        <div class="left"
             slot="left">待办</div>
        <div class="right"
             slot="right">
          <i class="iconfont icon-jiahao"
             @click="showInput"></i>
          <i class="iconfont icon-gengduo"></i>
        </div>
      </NavBar>
      <div class="empty"></div>
      <transition-group>
        <div class="masking"
             v-show="isShow"
             key="masking"></div>
        <div class="addToDo"
             v-show="isShow"
             key="addToDo">
          <div class="addTop">
            <div class="addTopLeft">添加待办</div>
            <div class="icons">
              <i class="iconfont icon-duihao"
                 @click="addCell"></i>
              <i class="iconfont icon-cuohao"
                 @click="clearShow"></i>
            </div>
          </div>
          <div class="addBottom">
            <div class="iconInputWrap">
              <i class="iconfont icon-jiahao"></i>
              <input type="text"
                     class="input"
                     placeholder="请输入待办事项（最高8位）"
                     v-model="cellItem.name">
            </div>
            <div class="iconInputWrap">
              <i class="iconfont icon-shijian"></i>
              <input type="text"
                     class="input"
                     placeholder="请输入25以内整数"
                     v-model="cellItem.time">
            </div>
            <div class="iconInputWrap">
              <i class="iconfont icon-riqi"></i>
              <input type="text"
                     @focus='createPicker'
                     ref='input3'
                     class="input"
                     placeholder="预计开始日期"
                     v-model="cellItem.wantDate">
            </div>
            <DatetimePicker v-show='showPicker'
                            v-model="currentDate"
                            type="datetime"
                            @cancel='concealPicker'
                            @confirm='changeDate'
                            :min-date="minDate"
                            :max-date="maxDate" />
          </div>
        </div>
      </transition-group>
      <div class="cellWrap">
        <SwipeCell class="cellItemWrap"
                   :right-width="80"
                   :left-width="65"
                   v-for="(item, index) in cellList"
                   :key="index">
          <span slot="left"
                class="left"
                @click="jumpCountdown(item, index)">Start</span>
          <CellGroup>
            <Cell :class="item.status === 1 ? 'cellItem' : 'done'"
                  :label='`预计在${item.wantDate}开始`'
                  :title="item.name"
                  :value="item.time+'分' || '25分'" />
          </CellGroup>
          <span slot="right"
                class="right"
                @click="reduceCell(index)">
            Delete
          </span>
        </SwipeCell>
      </div>
    </div>
  </div>
</template>

<script>
import { SwipeCell, Dialog, Cell, CellGroup, NavBar, Toast, DatetimePicker } from 'vant'
import Validator from 'validator'
import moment from 'moment'
export default {
  name: 'index',
  components: {
    SwipeCell,
    Cell,
    CellGroup,
    NavBar,
    DatetimePicker
  },
  data () {
    return {
      isShow: false,
      cellItem: {
        name: '',
        time: '',
        wantDate: this.currentDate,
        status: 1 // 1表示未完成 0表示已经完成
      },
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      maxDate: new Date(2019, 10, 1),
      currentDate: new Date(),
      showPicker: false
    }
  },
  methods: {
    showInput () {
      this.isShow = true
    },
    createPicker () {
      this.showPicker = true
    },
    concealPicker () {
      this.showPicker = false
    },
    changeDate () {
      this.cellItem.wantDate = moment(this.currentDate).format('YYYY/MM/DD hh:mm')
    },
    addCell () {
      let name = Validator.isLength(this.cellItem.name, { min: 1, max: 8 })
      let time = Validator.isInt(this.cellItem.time, { min: 1, max: 25 })
      if (name && time) {
        this.$store.dispatch('insertEvent', this.cellItem)
        this.isShow = false
        this.cellItem = { name: '', time: '', wantDate: '' }
      } else {
        Toast({
          message: '请按提示输入正确内容',
          duration: 1000
        })
      }
    },
    clearShow () {
      this.isShow = false
    },
    jumpCountdown (item, index) {
      this.$store.dispatch('changeEventIndex', { item, index })
      this.$router.push({ name: 'countdown' })
    },
    reduceCell (index) {
      Dialog.confirm({
        message: '确定删除此事项吗？'
      }).then(() => {
        this.$store.dispatch('reduceEvent', index)
      })
    }
  },
  computed: {
    cellList () {
      return this.$store.state.toDoEvent
    }
  }
}
</script>

<style scoped lang='scss'>
@import "@/style/scss/index.scss";
</style>
