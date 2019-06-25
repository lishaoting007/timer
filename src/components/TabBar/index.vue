<template>
  <div>
    <Tabbar class="tabBarWrap"
            v-model="selected"
            :fixed="true">
      <TabItem id="index">
        <i class="iconfont icon-xiangmubianhao-"
           slot="icon"></i>
        待办
      </TabItem>
      <TabItem id="todoGather">
        <i class="iconfont icon-xiangmuliebiao"
           slot="icon"></i>
        待办集
      </TabItem>
      <TabItem id="statistics">
        <i class="iconfont icon-tongji"
           slot="icon"></i>
        统计
      </TabItem>
      <TabItem id="calendar">
        <i class="iconfont icon-rili"
           slot="icon"></i>
        历史记录
      </TabItem>
      <TabItem id="plan">
        <i class="iconfont icon-bazi"
           slot="icon"></i>
        未来计划
      </TabItem>
      <TabItem id="person">
        <i class="iconfont icon-gerenzhongxin"
           slot="icon"></i>
        个人中心
      </TabItem>
    </Tabbar>
  </div>
</template>

<script>
import { Tabbar, TabItem } from 'mint-ui'

export default {
  name: 'tab-bar',
  components: {
    Tabbar,
    TabItem
  },
  data () {
    return {
      selected: 'index'
    }
  },
  watch: {
    selected (val) {
      this.$router.push({
        name: val
      })
    }
  },
  created () {
    this.selected = this.$route.name
  }
}
</script>

<style scoped lang='scss'>
@import "@/style/scss/p2r.scss";
.tabBarWrap {
  height: p2r(110);
}
.iconfont {
  font-size: p2r(30);
}

/deep/ .mint-tab-item-label {
  font-size: p2r(20);
}
/deep/ .mint-tab-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>
