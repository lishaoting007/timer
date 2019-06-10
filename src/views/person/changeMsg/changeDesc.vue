<template>
  <div>
    <NavBar>
      <div class="left"
           @click="jumpUserMsg"
           slot="left">返回</div>
      <div class="left"
           slot="title">修改个性签名</div>
    </NavBar>
    <div class="wrap">
      <changeInput :value='userData.desc || "千里之行，始于足下"'
                   @change="handleChange"
                   placeholder="请输入个性签名">
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
      desc: ''
    }
  },
  methods: {
    jumpUserMsg () {
      this.$router.push({ name: 'userMsg' })
    },
    handleChange (val) {
      this.desc = val
    },
    handleSave () {
      this.$axios.put(this.$api.changeUser, {
        desc: this.desc
      }).then(res => {
        if (res.code === 200) {
          this.$store.dispatch('getUserData')
          Toast({
            message: '个性签名修改成功',
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
      return this.$store.state.userData
    }
  }
}
</script>

<style lang="scss" scoped src='@/style/scss/change.scss'>
</style>
