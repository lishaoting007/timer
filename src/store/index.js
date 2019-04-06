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
    CHANGE_EVENT_INDEX (state, payload) {
      state.eventIndex = payload
    }
  },
  actions: {
    insertEvent ({ commit }, payload) {
      commit('INSTER_EVENT', payload)
    },
    changeEventIndex ({ commit }, payload) {
      commit('CHANGE_EVENT_INDEX', payload)
    }
  }
})

export default store