<template>
  <div class="container">
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
            :key="index"
            :right="[{content: 'Delete',
            style: { background: 'red', color: '#fff' },
            handler: () => cellList.splice(index,1)}]">
        <slot>
          <router-link :to='{path: "/countdown"}'>
            <button class="startBtn">开始</button>
          </router-link>
        </slot>
      </Cell>
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
      cellList: [{ name: '学习' }],
      isShow: false,
      cellItem: { name: '' }
    }
  },
  methods: {
    showInput () {
      this.isShow = true
    },
    addCell () {
      this.cellList.push(this.cellItem)
      this.isShow = false
    },
    clearShow () {
      this.isShow = false
    }
  }
}
</script>

<style scoped lang='scss'>
@import "@/style/scss/p2r.scss";
.container {
  position: relative;
  .left {
    font-size: p2r(36);
  }
  .right {
    display: flex;
    justify-content: space-between;
    width: p2r(200);
    height: p2r(154);
    padding-right: p2r(20);
    .iconfont {
      font-size: p2r(40);
      color: #fff;
      align-self: center;
      flex: 1;
    }
  }
  .empty {
    height: p2r(182);
  }
  .masking {
    z-index: 1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    width: p2r(750);
    height: p2r(1334);
  }
  .addToDo {
    position: absolute;
    top: p2r(436);
    left: p2r(100);
    z-index: 2;
    width: p2r(554);
    height: p2r(176);
    .addTop {
      display: flex;
      justify-content: space-between;
      height: p2r(96);
      background: #f85648;
      font-size: p2r(33);
      color: #fff;
      .addTopLeft {
        margin-left: p2r(30);
        height: p2r(96);
        line-height: p2r(96);
      }
      .icons {
        height: p2r(96);
        line-height: p2r(96);
        .iconfont {
          margin-right: p2r(30);
        }
      }
    }
    .addBottom {
      display: flex;
      justify-content: flex-start;
      width: p2r(554);
      height: p2r(80);
      background: #fff;
      .iconfont {
        width: p2r(36);
        height: p2r(80);
        line-height: p2r(80);
        color: #eee;
        font-size: p2r(36);
      }
      .input {
        width: p2r(484);
        height: p2r(80);
        border: 0;
        border-bottom: p2r(2) solid #f85648;
      }
    }
  }
  .cellWrap {
    margin: 0 p2r(40);
    padding-bottom: p2r(106);
    width: p2r(670);
    .cellItem {
      margin-bottom: p2r(20);
      height: p2r(130);
      border: p2r(2) solid #aaa;
      // border-bottom: p2r(2) solid #aaa;
      color: #565656;
      background: #fff;
      .startBtn {
        width: p2r(160);
        height: p2r(130);
        border: 0;
        background: #f85648;
        color: #fff;
      }
    }
  }
}
.iconfont {
  width: p2r(88);
  // height: p2r(88);
  color: #fff;
}
/deep/ .mint-cell-wrapper {
  font-size: p2r(34);
}
/deep/.mint-header {
  height: p2r(154);
  background-color: #f85648;
}
/deep/ .mint-header-button {
  flex: 0;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: all ease 0.8s;
}
</style>
