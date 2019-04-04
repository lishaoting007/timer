<template>
  <div class="container">
    <div></div>
    <div class="btns">
      <Button class="btn1"
              @click="addCell">
        <i class="iconfont icon-xinjianwenjianjia"></i>
        新建
      </Button>
      <Button class="btn2">
        <i class="iconfont "></i>
        学习
      </Button>
      <Button class="btn3">
        <i class="iconfont "></i>
        学习
      </Button>
    </div>
    <div class="wrapRadius"></div>
    <div class="cellWrap">
      <Cell class="cellItem"
            title="标题文字"
            label="25min"
            v-for="(item, index) in cellList"
            :key="index"
            :right="[{content: 'Delete',
            style: { background: 'red', color: '#fff' },
            handler: () => cellList.splice(index,1)}]">
      </Cell>
    </div>
  </div>
</template>

<script>
import { CellSwipe, Button } from 'mint-ui'
export default {
  name: 'index',
  components: {
    'Cell': CellSwipe,
    Button
  },
  data () {
    return {
      cellList: [{}, {}, {}]
    }
  },
  methods: {
    addCell () {
      this.cellList.push({})
    }
  }
}
</script>

<style scoped lang='scss'>
@import "@/style/scss/p2r.scss";
.container {
  .btns {
    display: flex;
    justify-content: space-between;
    margin: 0 p2r(40);
    width: p2r(672);
    height: p2r(96);
    .iconfont {
      font-size: p2r(44);
      color: #fff;
    }

    .btn1,
    .btn2,
    .btn3 {
      display: flex;
      justify-content: center;
      align-content: center;
      width: p2r(216);
      height: p2r(96);
      color: #fff;
      font-size: p2r(30);
      border-radius: p2r(20);
    }
    .btn1 {
      background: #31cc7f;
    }
    .btn2 {
      background: #7148e4;
    }
    .btn3 {
      background: #fae60f;
    }
  }
  .wrapRadius {
    margin: p2r(52) p2r(40) 0;
    width: p2r(670);
    height: p2r(33);
    background: #fff;
    border-radius: p2r(30) p2r(30) 0 0;
  }
  .cellWrap {
    margin: 0 p2r(40);
    padding-bottom: p2r(106);
    width: p2r(670);
    .cellItem {
      margin-bottom: p2r(20);
      height: p2r(130);
      border-top: 0;
      border-bottom: p2r(2) solid #aaa;
      color: #565656;
      background: #fff;
    }
  }
}

.iconfont {
  width: p2r(88);
  height: p2r(88);
  color: #fff;
}
// #7148E4 #31CC7F #FAE60F
/deep/ .mint-cell-wrapper {
  font-size: p2r(34);
}
</style>
<style>
</style>
