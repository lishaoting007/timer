<template>
  <div>
    <NavBar>
      <div class="left"
           @click="jumpUserMsg"
           slot="left">返回</div>
      <div class="left"
           slot="title">修改昵称</div>
    </NavBar>
    <div class="wrap">
      <changeInput :value='userData.username || userData.phone'
                   :title="'昵称：'"
                   @change="handleChange"
                   placeholder="请输入昵称">
        <i class="iconfont icon-xiugai1"
           slot="icon"></i>
      </changeInput>
      <div class="btnWrap">
        <Button class="btn"
                size='large'
                round
                @click="handleSave">
          确定修改
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import changeInput from '@/views/person/components/changeInput'
import { NavBar, Button, Toast } from 'vant'
export default {
  components: {
    changeInput,
    NavBar,
    Button
  },
  data () {
    return {
      username: ''
    }
  },
  methods: {
    jumpUserMsg () {
      this.$router.push({ name: 'userMsg' })
    },
    handleChange (val) {
      this.username = val
    },
    handleSave () {
      this.$axios.put(this.$api.changeUser, {
        username: this.username
      }).then(res => {
        if (res.code === 200) {
          this.$store.dispatch('getUserData')
          Toast({
            message: '昵称修改成功',
            duration: 1000
          })
          setTimeout(() => {
            this.$router.push({ name: 'userMsg' })
          }, 1000)
        } else {
          Toast({
            message: res.msg,
            duration: 1000
          })
        }
      })
    }
  },
  computed: {
    userData () {
      return this.$store.state.userData.user
    }
  }
}
</script>

<style lang="scss" scoped src='@/style/scss/change.scss'>
</style>
