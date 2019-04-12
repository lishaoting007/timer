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
      <TabItem id="statistics">
        <i class="iconfont icon-tongji"
           slot="icon"></i>
        统计
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
  font-size: p2r(40);
}

/deep/ .mint-tab-item-label {
  font-size: p2r(32);
}
/deep/ .mint-tab-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>
