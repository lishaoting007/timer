<template>
  <div>
    <Tabbar v-model="selected"
            :fixed="true">
      <TabItem id="index">
        <i class="iconfont icon-xiangmubianhao-"
           slot="icon"></i>
        待办
      </TabItem>
      <TabItem id="countdown">
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

<style scoped>
.iconfont {
  font-size: 26px;
}
</style>
