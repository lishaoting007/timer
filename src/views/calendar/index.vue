<template>
  <div>
    <NavBar :fixed='true'>
      <div class="left"
           @click="jumpIndex"
           slot="left">返回</div>
      <div class="left"
           slot="title">日历</div>
    </NavBar>
    <div class="empty"></div>
    <fullcalendar :events="fcEvents"
                  lang='zh'
                  @eventClick='eventsClick'>
    </fullcalendar>
  </div>
</template>

<script>
import fullcalendar from 'vue-fullcalendar'
import { NavBar } from 'vant'
// var demoEvents = [
//   {
//     title: '跑步',
//     start: '2019-06-11',
//     end: '2019-06-11'
//   }
// ]
export default {
  components: {
    fullcalendar,
    NavBar
  },
  data () {
    return {
      fcEvents: [],
      Show: true,
      eventItemData: {}
    }
  },
  methods: {
    eventsClick (event, jsEvent, pos) {
      this.eventItemData = event
      console.log(this.eventItemData)
    },
    changeFcevents () {
      this.fcEvents = this.finishEvents
    },
    jumpIndex () {
      this.$router.push({ name: 'index' })
    }
  },
  beforeMount () {
    this.changeFcevents()
  },
  computed: {
    finishEvents () {
      const events = this.$store.state.finishEvent
      const result = events.map(item => {
        return { title: item.name, start: item.date }
      })
      return result
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
.empty {
  height: p2r(154);
}
</style>
