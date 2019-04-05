<template>
  <div class="container">
    <transition>
      <router-view></router-view>
    </transition>
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

<style scoped lang='scss'>
.container {
  overflow-x: hidden;
}
.v-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.v-leave-to {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all ease 0.5s;
}
</style>
