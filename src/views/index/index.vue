<template>
  <div class="container">
    <div class="Wrap">
      <Header class="header"
              fixed>
        <div class="left"
             slot="left">待办</div>
        <div class="right"
             slot="right">
          <i class="iconfont icon-jiahao"
             @click="showInput"></i>
          <i class="iconfont icon-gengduo"></i>
        </div>
      </Header>
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
        <Cell class="cellItem"
              :title="item.name"
              label="25min"
              v-for="(item, index) in cellList"
              :key="index">

          <Button class="startBtn"
                  @click="jumpCountdown(item.name)">
            开始
          </Button>

        </Cell>
      </div>
    </div>
  </div>
</template>

<script>
import { CellSwipe, Button, Header } from 'mint-ui'

export default {
  name: 'index',
  components: {
    'Cell': CellSwipe,
    Button,
    Header
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
      this.$store.dispatch('insertEvent', this.cellItem)
      this.isShow = false
    },
    clearShow () {
      this.isShow = false
    },
    jumpCountdown (value) {
      this.$store.dispatch('changeEventIndex', value)
      this.$router.push({ name: 'countdown' })
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
@import "./index.scss";
</style>
