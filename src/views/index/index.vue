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
            <i class="iconfont icon-shijian"></i>
            <input type="text"
                   class="input"
                   v-model="cellItem.name">
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
                @click="jumpCountdown(item.name)">Start</span>
          <CellGroup>
            <Cell class="cellItem"
                  :title="item.name"
                  value="25min" />
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
import { SwipeCell, Dialog, Cell, CellGroup, NavBar, Toast } from 'vant'
export default {
  name: 'index',
  components: {
    SwipeCell,
    Cell,
    CellGroup,
    NavBar
  },
  data () {
    return {
      isShow: false,
      cellItem: { name: '' }
    }
  },
  methods: {
    showInput () {
      this.isShow = true
    },
    addCell () {
      if (this.cellItem.name) {
        this.$store.dispatch('insertEvent', this.cellItem)
        this.isShow = false
      } else {
        Toast({
          message: '内容不能为空',
          duration: 1000
        })
      }
    },
    clearShow () {
      this.isShow = false
    },
    jumpCountdown (value) {
      this.$store.dispatch('changeEventIndex', value)
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
