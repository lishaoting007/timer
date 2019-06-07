import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { instance } from '@/utils'
import api from '@/utils/api.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    toDoEvent: [
      { name: '向右滑动开始', time: 1, wantDate: '2019/6/2 10:52', status: 1 },
      { name: '向左滑动删除', time: 1, wantDate: '2019/6/2 10:52', status: 1 }
    ], // [{name}]
    eventIndex: '', // {{name: '', time: ''}, index: ''}
    finishEvent: [], // [{date: xxxx年xx月xx日, name, time}]
    dayTime: [
      { date: '2019年5月1日', time: 50 },
      { date: '2019年5月2日', time: 150 },
      { date: '2019年5月3日', time: 75 },
      { date: '2019年5月4日', time: 200 },
      { date: '2019年5月5日', time: 50 }
    ], // [{date:, eventNum, month: xxxx年xx月, time}]
    allDate: { eventNum: 0, time: 0, average: 0 },
    userData: ''
  },
  getters: {
    filterFinishEvent: ({ finishEvent }) => today => {
      return finishEvent.filter(item => item.date === today)
    },
    filterDayTime: ({ dayTime }) => today => {
      return dayTime.filter(item => item.date === today)
    },
    getAllDate: ({ allDate }) => allDate,
    filterDayTimeasMonth: ({ dayTime }) => today => {
      return dayTime.filter(item => item.month === today)
    },
    getDayTimeLength: ({ dayTime }) => dayTime.length,
    parseEventIndex: ({ eventIndex }) => parseInt(eventIndex.item.time)
  },
  mutations: {
    INSTER_EVENT ({ toDoEvent }, payload) {
      toDoEvent.push(payload)
    },
    REDUE_EVEN ({ toDoEvent }, payload) {
      toDoEvent.splice(payload, 1)
    },
    CHANGE_EVENT_INDEX (state, payload) {
      state.eventIndex = payload
    },
    INSERT_FINISH_EVENT ({ finishEvent }, payload) {
      let finishEventItem = finishEvent.find(
        n => n.name === payload.name && n.date === payload.date
      )
      if (finishEventItem) {
        finishEventItem.time += this.getters.parseEventIndex
      } else {
        finishEvent.push(payload)
      }
    },
    INSERT_DAY_TIME ({ dayTime }, payload) {
      let dayItem = dayTime.find(n => n.date === payload.date)
      if (dayItem) {
        dayItem.time += this.getters.parseEventIndex
        dayItem.eventNum += 1
      } else {
        dayTime.push(payload)
      }
    },
    CHANGE_ALL_DATE ({ allDate }) {
      allDate.time += this.getters.parseEventIndex
      allDate.eventNum += 1
      allDate.average = parseInt(allDate.time / this.getters.getDayTimeLength)
    },
    CHANGE_USER_DATA (state, payload) {
      state.userData = payload
    },
    CHANGE_EVENT_STATUS (state, payload) {
      state.toDoEvent[payload].status = 0
    }
  },
  actions: {
    insertEvent ({ commit }, payload) {
      commit('INSTER_EVENT', payload)
    },
    reduceEvent ({ commit }, payload) {
      commit('REDUE_EVEN', payload)
    },
    changeEventIndex ({ commit }, payload) {
      commit('CHANGE_EVENT_INDEX', payload)
    },
    insertFinishEvent ({ commit }, payload) {
      commit('INSERT_FINISH_EVENT', payload)
    },
    insertDayTime ({ commit }, payload) {
      commit('INSERT_DAY_TIME', payload)
    },
    changeAllDate ({ commit }) {
      commit('CHANGE_ALL_DATE')
    },
    getUserData ({ commit }) {
      return new Promise(resolve => {
        instance.get(api.getUser).then(res => {
          if (res.code === 200) {
            // this.userData = res.data
            commit('CHANGE_USER_DATA', res.data)
            resolve(res.data)
          }
        })
      })
    },
    changeEventStatus ({ commit }, payload) {
      commit('CHANGE_EVENT_STATUS', payload)
    }
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => localStorage.getItem(key),
        setItem: (key, value) =>
          localStorage.setItem(key, value, { expires: 3, secure: true }),
        removeItem: key => localStorage.removeItem(key)
      }
    })
  ]
})

export default store
