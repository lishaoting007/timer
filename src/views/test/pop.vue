<template>
  <div>
    <Button class="btn1"
            @click="showPopup">按钮</Button>
    <Popup v-model="show">
      <changeInput placeholder="请输入旧密码"></changeInput>
    </Popup>
  </div>
</template>

<script>
import { Popup, Button } from 'vant'
import changeInput from '@/views/person/components/changeInput'
export default {
  components: {
    Popup,
    Button,
    changeInput
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    showPopup () {
      this.show = true
    },
    concealPopup () {
      this.show = false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
