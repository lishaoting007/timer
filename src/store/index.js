import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    toDoEvent: [{ name: '向右滑动开始' }, { name: '向左滑动删除' }],
    eventIndex: '',
    finishEvent: [],
    dayTime: []
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
        finishEventItem.eventNum += 1
      } else {
        finishEvent.push(payload)
      }
    },
    INSERT_DAY_TIME ({ dayTime }, payload) {
      let dayItem = dayTime.find(n => n.date === payload.date)
      if (dayItem) {
        dayItem.time += 25
      } else {
        dayTime.push(payload)
      }
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
    }
  }
})

export default store
