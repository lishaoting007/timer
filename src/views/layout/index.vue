<template>
  <div>
    <router-view></router-view>
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar'
export default {
  name: 'layout',
  components: {
    TabBar
  }
}
</script>

<style scoped>
</style>
