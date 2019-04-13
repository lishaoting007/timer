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
      return this.$store.state.userData.user
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/scss/p2r.scss";
.left {
  height: p2r(154);
  line-height: p2r(154);
  font-size: p2r(40);
  color: #fff;
}

/deep/.van-nav-bar {
  height: p2r(154);
  background-color: #f85648;
}

/deep/.van-nav-bar__right {
  right: 0;
}
.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  .btnWrap {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: p2r(100) p2r(63) p2r(26);
    width: p2r(660);

    .btn {
      height: p2r(90);
      line-height: p2r(90);
      font-size: p2r(40);
      letter-spacing: 4px;
      color: #fff;
      background: #f85648;
    }
  }
}
</style>
