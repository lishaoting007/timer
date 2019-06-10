<template>
  <div>
    <NavBar :fixed='true'>
      <div class="left"
           slot="left">统计数据</div>
      <div class="right"
           slot="right"
           @click='getNewestData'>
        点击获取最新数据

        <!-- <i class="iconfont icon-jiahao"></i> -->
        <!-- <i class="iconfont icon-gengduo"></i> -->
      </div>
    </NavBar>
    <div class="empty"></div>
    <div>
      <dataPage></dataPage>
    </div>
  </div>
</template>

<script>
import { NavBar, Toast } from 'vant'
import dataPage from '@/views/statistics/components/dataPage.vue'
export default {
  components: {
    NavBar,
    dataPage
  },
  data () {
    return {}
  },
  methods: {
    getNewestData () {
      const _this = this
      if (this.token) {
        this.$axios.get(this.$api.getNewestData, { params: {
          userId: _this.userData._id
        } }).then(res => {
          if (res.code === 200) {
            new Promise(resolve => {
              _this.$store.dispatch('updateFinishEvents', res.allTodo)
              _this.$store.dispatch('updateAllData', { time: res.allTime, eventsNum: res.allTodo.length })
              resolve()
            }).then(resolve => {
              _this.$store.dispatch('changeAllDateAverage')
              Toast({
                message: '获取数据成功',
                duration: 1500
              })
              this.$router.push({ name: 'statistics' })
            })
          } else {
            Toast({
              message: '获取数据失败',
              duration: 1000
            })
          }
        })
      } else {
        Toast({
          message: '请先登录',
          duration: 1000
        })
      }
    }
  },
  computed: {
    token () {
      return localStorage.getItem('token')
    },
    userData () {
      return this.$store.state.userData
    }
  }
}
</script>

<style scoped lang='scss'>
@import "@/style/scss/p2r.scss";
.Wrap {
  // position: relative;
}
.empty {
  height: p2r(182);
}
.left {
  height: p2r(154);
  line-height: p2r(154);
  font-size: p2r(40);
  color: #fff;
}

.right {
  display: flex;
  justify-content: space-between;
  width: p2r(240);
  height: p2r(154);
  line-height: p2r(154);
  color: #fff;

  .iconfont {
    font-size: p2r(40);
    color: #fff;
    align-self: center;
    flex: 1;
  }
}
/deep/.van-nav-bar {
  height: p2r(154);
  background-color: #f85648;
}

/deep/.van-nav-bar__right {
  right: 0;
}
</style>
