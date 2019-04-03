<template>
  <div class="container">
    <div class="top">
      <Button type="primary"
              @click="addCell">
        新建
      </Button>
    </div>
    <div class="wrapRadius"></div>
    <div class="cellWrap">
      <Cell class="cellItem"
            title="标题文字"
            label="25min"
            v-for="(item, index) in cellList"
            :key="index">
      </Cell>
    </div>
  </div>
</template>

<script>
import { Cell, Button } from 'mint-ui'
export default {
  name: 'index',
  components: {
    Cell,
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
  background: #eee;
  .top {
    height: p2r(195);
  }
  .wrapRadius {
    margin: 0 p2r(40);
    width: p2r(670);
    height: p2r(33);
    background: #fff;
    border-radius: p2r(30) p2r(30) 0 0;
  }
  .cellWrap {
    margin: 0 p2r(40);
    width: p2r(670);
    background: #fff;
    .cellItem {
      height: p2r(130);
      border-top: 0;
      border-bottom: p2r(2) solid #565656;
      color: #565656;
    }
  }
}
\deep\ .mint-cell-wrapper {
  font-size: p2r(34);
}
</style>
<style>
</style>
