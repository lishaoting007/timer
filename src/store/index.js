import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    toDoEvent: [{ name: '向右滑动开始' }, { name: '向左滑动删除' }], // [{name}]
    eventIndex: '', // {name}
    finishEvent: [], // [{date: xxxx年xx月xx日, name, time, year, month, day}]
    dayTime: [], // [{date:, eventNum, month: xxxx年xx月, time}]
    allDate: { eventNum: 0, time: 0, average: 0 }
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
    }
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
        finishEventItem.time += 25
      } else {
        finishEvent.push(payload)
      }
    },
    INSERT_DAY_TIME ({ dayTime }, payload) {
      let dayItem = dayTime.find(n => n.date === payload.date)
      if (dayItem) {
        dayItem.time += 25
        dayItem.eventNum += 1
      } else {
        dayTime.push(payload)
      }
    },
    CHANGE_ALL_DATE ({ allDate }) {
      allDate.time += 25
      allDate.eventNum += 1
      allDate.average = allDate.time / allDate.eventNum
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
