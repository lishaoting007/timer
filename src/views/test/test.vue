<template>
  <div>
    <button class="btn"
            @click="showpop">
      按钮
    </button>
    <van-popup v-model="show"
               position="bottom"
               :style="{ height: '10%' }">
      删除
    </van-popup>
  </div>
</template>

<script>
import { Popup } from 'vant'
export default {
  components: {
    'van-popup': Popup
  },
  data () {
    return {
      labelList: ['1', '2'],
      Loop: null,
      show: false
    }
  },
  methods: {
    showpop () {
      this.show = true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
