<template>
  <div>
    <NavBar :fixed='true'>
      <div class="left"
           slot="left">待办集</div>
      <div class="right"
           slot="right">
        <i class="iconfont icon-jiahao"
           @click="showAddGather"></i>
        <i class="iconfont icon-gengduo"></i>
      </div>
    </NavBar>
    <div class="empty"></div>
    <div class="todo-gather-wrap">
      <div class="accordion-wrap"
           v-for="(i, index) in getTodoGather"
           :key="index">
        <Accordion class="todo-gather"
                   :Accordionindex="0"
                   :isSlotSecond="2"
                   :AccordionData="i.name"
                   @click="test(index)">
          <i class="iconfont icon-editor"
             @click="showDeleteGatherPanel(index)"
             slot="Second"></i>
          <i class="iconfont icon-jiahao"
             @click="showAddGatherItem(index)"
             slot="Second"></i>
          <div class="gather-item"
               slot="First"
               v-for="(item, ind) in i.data"
               :key="ind"
               :class="`bbc${ind+1}`"
               @click="showDeleteItemPanel(index, ind)">
            <div class="gather-item-left">
              <div class="item-name">{{item.name}}</div>
              <div class="item-time">{{item.time}}分钟</div>
            </div>
            <div class="gather-item-right"
                 @click="startTodo(item, index)">开始</div>
          </div>
        </Accordion>
      </div>
    </div>
    <transition-group>
      <div class="masking"
           v-show="isShowAddGatherItem"
           key="masking"></div>
      <div class="addToDo"
           v-show="isShowAddGatherItem"
           key="addToDo">
        <div class="addTop">
          <div class="addTopLeft">添加待办</div>
          <div class="icons">
            <i class="iconfont icon-duihao"
               @click="addGatherItem"></i>
            <i class="iconfont icon-cuohao"
               @click="closeAddGatherItem"></i>
          </div>
        </div>
        <div class="addBottom">
          <div class="iconInputWrap">
            <i class="iconfont icon-jiahao"></i>
            <input type="text"
                   class="input"
                   placeholder="请输入待办事项（最高8位）"
                   v-model="gatherItem.name">
          </div>
          <div class="iconInputWrap">
            <i class="iconfont icon-shijian"></i>
            <input type="text"
                   class="input"
                   placeholder="请输入25以内整数"
                   v-model="gatherItem.time">
          </div>
        </div>
      </div>
    </transition-group>
    <transition-group>
      <div class="masking"
           v-show="isShowAddGather"
           key="masking"></div>
      <div class="addToDo"
           v-show="isShowAddGather"
           key="addToDo">
        <div class="addTop">
          <div class="addTopLeft">添加待办集</div>
          <div class="icons">
            <i class="iconfont icon-duihao"
               @click="addGather"></i>
            <i class="iconfont icon-cuohao"
               @click="closeAddGather"></i>
          </div>
        </div>
        <div class="addBottom">
          <div class="iconInputWrap">
            <i class="iconfont icon-jiahao"></i>
            <input type="text"
                   class="input"
                   placeholder="请输入待办集名称"
                   v-model="gatherName.name">
          </div>
        </div>
      </div>
    </transition-group>
    <Popup class="delete-gather"
           v-model='isShowDeleteGatherPanel'
           position="bottom">
      <div class="delete"
           @click="deleteGather">删除</div>
    </Popup>
    <Popup class="delete-gather-item"
           v-model="isShowDeleteItemPanel"
           position="bottom">
      <div class="delete"
           @click="deleteGatherItem">删除</div>
    </Popup>
  </div>
</template>
<script>
import Accordion from '@/views/todo-gather/components/Accordion'
import { NavBar, Popup } from 'vant'
export default {
  components: {
    Accordion,
    NavBar,
    Popup
  },
  data () {
    return {
      bodyScroll: '',
      // baseInformation: [{ gather: '考研', data: [{ name: '学习', time: 25 }, { name: '跑步', time: 25 }, { name: '始到发', time: 25 }, { name: '水电费', time: 25 }] }, { gather: '写项目', data: [{ name: '学习', time: 25 }, { name: '跑步', time: 25 }] }],
      isShowAddGather: false,
      isShowAddGatherItem: false,
      gatherName: { name: '', data: [] },
      gatherItem: { name: '', time: null },
      gatherIndex: null,
      Loop: null,
      isShowDeleteGatherPanel: false,
      isShowDeleteItemPanel: false,
      gatherItemIndex: null
    }
  },
  mounted () {
  },
  methods: {
    addGather () { // 添加待办集
      if (this.gatherName.name) {
        console.log(this.gatherName)
        this.$store.dispatch('addTodoGather', this.gatherName)
        this.isShowAddGather = false
        this.gatherName = { name: '', data: [] }
      }
    },
    addGatherItem () { // 添加待办
      if (this.gatherItem.name && this.gatherItem.time) {
        this.$store.dispatch('addTodoToGather', { index: this.gatherIndex, gatherItem: this.gatherItem })
        this.isShowAddGatherItem = false
        this.gatherItem = { name: '', time: null }
      }
    },
    showAddGather () { // 显示待办集添加框
      this.isShowAddGather = true
    },
    closeAddGather () { // 关闭待办集添加框
      this.isShowAddGather = false
    },
    showAddGatherItem (index) { // 显示待办添加框
      this.gatherIndex = index
      this.isShowAddGatherItem = true
    },
    closeAddGatherItem () { // 关闭待办添加框
      this.isShowAddGatherItem = false
    },
    showDeleteGatherPanel (index) { // 显示删除待办集面板
      this.isShowDeleteGatherPanel = true
      this.gatherIndex = index
    },
    showDeleteItemPanel (index, ind) { // 显示删除待办面板
      this.isShowDeleteItemPanel = true
      this.gatherItemIndex = ind
      this.gatherIndex = index
    },
    deleteGather () { // 删除待办集
      this.$store.dispatch('deleteGather', this.gatherIndex)
      this.isShowDeleteGatherPanel = false
    },
    deleteGatherItem () { // 删除待办
      this.$store.dispatch('deleteGatherItem', { gatherItemIndex: this.gatherItemIndex, gatherIndex: this.gatherIndex })
      this.isShowDeleteItemPanel = false
    },
    startTodo (item, index) { // 开始待办集中的待办
      this.$store.dispatch('changeEventIndex', { item, index })
      this.$router.push({ name: 'countdown' })
    }
  },
  computed: {
    getTodoGather () {
      return this.$store.state.allTodoGather
    }
  }
}
</script>
<style scoped lang="scss" src='@/style/scss/todo-gather.scss'>
</style>
