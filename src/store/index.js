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
    dayTime: [], // [{date:, eventNum, month: xxxx年xx月, time}]
    allDate: { eventNum: 0, time: 0, average: 0 },
    userData: ''
  },
  getters: {
    filterFinishEvent: ({ finishEvent }) => today => {
      return finishEvent.filter(item => item.date === today)
    },
    getAllFinishDate: ({ finishEvent }) => {
      let arr = []
      for (let i = 0; i < finishEvent.length; i++) {
        arr.push(finishEvent[i].date)
      }
      let newArr = new Set(arr)
      return Array.from(newArr)
    },
    filterDayTime: ({ finishEvent }) => today => {
      return finishEvent.filter(item => item.date === today)
    },
    getAllDate: ({ allDate }) => allDate,
    filterDayTimeasMonth: ({ finishEvent }) => today => {
      const monthDataArray = finishEvent.filter(item => item.month === today)
      let newObj = {}
      let newArray = []
      for (let i = 0; i < monthDataArray.length; i++) {
        let item = monthDataArray[i]
        if (!newObj[item.date]) {
          newArray.push({
            date: item.date,
            time: item.time
          })
          newObj[item.date] = item
        } else {
          for (let j = 0; j < newArray.length; j++) {
            let dj = newArray[j]
            if (dj.date === item.date) {
              dj.time = dj.time + item.time
            }
          }
        }
      }
      return newArray
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
      // let finishEventItem = finishEvent.find(
      //   n => n.name === payload.name && n.date === payload.date
      // )
      // if (finishEventItem) {
      //   finishEventItem.time += this.getters.parseEventIndex
      // } else {
      //   finishEvent.push(payload)
      // }
      finishEvent.push(payload)
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
      allDate.average = parseInt(allDate.time / allDate.eventNum)
    },
    CHANGE_ALLDATE_AVERAGE ({ allDate }) {
      allDate.average = parseInt(allDate.time / allDate.eventNum)
    },
    CHANGE_USER_DATA (state, payload) {
      state.userData = payload
    },
    CHANGE_EVENT_STATUS (state, payload) {
      state.toDoEvent[payload].status = 0
    },
    UPDATE_FINISHEVENT (state, payload) {
      state.finishEvent = payload
    },
    UPDATE_ALLDATA (state, payload) {
      state.allDate.time = payload.time
      state.allDate.eventNum = payload.eventsNum
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
    changeAllDateAverage ({ commit }) {
      commit('CHANGE_ALLDATE_AVERAGE')
    },
    getUserData ({ commit }) {
      return new Promise(resolve => {
        instance.get(api.getUser).then(res => {
          if (res.code === 200) {
            // this.userData = res.data
            commit('CHANGE_USER_DATA', res.userData)
            resolve(res.userData)
          }
        })
      })
    },
    changeEventStatus ({ commit }, payload) {
      commit('CHANGE_EVENT_STATUS', payload)
    },
    updateFinishEvents ({ commit }, payload) {
      commit('UPDATE_FINISHEVENT', payload)
    },
    updateAllData ({ commit }, payload) {
      commit('UPDATE_ALLDATA', payload)
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
