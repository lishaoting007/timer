<template>
  <div>
    <Header class="header"
            fixed
            title='首页'>
      <router-link to="/"
                   slot="left">
        <Button icon="back">返回</Button>
      </router-link>
      <Button slot="right">杀杀杀</Button>
      <Button icon="more"
              slot="right"></Button>
      <Button icon="more"
              slot="right"></Button>
    </Header>
  </div>
</template>

<script>
import { Header, Button } from 'mint-ui'
export default {
  components: {
    Header,
    Button
  }
}
</script>

<style scoped lang='scss'>
@import "@/style/scss/p2r.scss";

/deep/.mint-header {
  height: p2r(130);
  background-color: #ef6700;
}
</style>
