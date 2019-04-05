<template>
  <div>
    <Header class="header">
      <div class="left"
           slot="left">统计</div>
    </Header>
  </div>
</template>

<script>
import { Header } from 'mint-ui'
export default {
  components: {
    Header
  }
}
</script>

<style scoped lang='scss'>
@import "@/style/scss/p2r.scss";
/deep/.mint-header {
  height: p2r(154);
  background-color: #f85648;
}
</style>
