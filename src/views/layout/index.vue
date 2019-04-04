<template>
  <div class="container">
    <NavBar></NavBar>
    <router-view></router-view>
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar'
import NavBar from '@/components/NavBar'
export default {
  name: 'layout',
  components: {
    TabBar,
    NavBar
  }
}
</script>

<style scoped></style>
