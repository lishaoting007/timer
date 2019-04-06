import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    toDoEvent: [{ name: '学习' }, { name: '跑步' }],
    eventIndex: ''
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
    }
  }
})

export default store
