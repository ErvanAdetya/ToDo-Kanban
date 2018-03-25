import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    backLog: null,
    toDo: null,
    doing: null,
    done: null
  },
  getters: {
    getBackLog: (state) => {
      return state.backLog
    },
    getToDo: (state) => {
      return state.toDo
    },
    getDoing: (state) => {
      return state.doing
    },
    getDone: (state) => {
      return state.done
    }
  },
  mutations: {
    setBacklog (state, payload) {
      state.backLog = payload
    },
    setToDo (state, payload) {
      state.toDo = payload
    },
    setDoing (state, payload) {
      state.doing = payload
    },
    setDone (state, payload) {
      state.done = payload
    },
    setNull (state) {
      state.backLog = null
      state.toDo = null
      state.doing = null
      state.done = null
    }
  },
  actions: {
    addTask (context, payload) {
      let task = {
        title: payload.title,
        description: payload.description,
        point: payload.point,
        assignedTo: payload.assignedTo
      }
      firebase.database().ref().child(`${payload.status}/`).push(task)
    },
    deleteTask (context, payload) {
      firebase.database().ref().child(`${payload.status}/${payload.child}`).remove()
    },
    updater (context) {
      firebase.database().ref().child('/').on('value', (snapshot) => {
        let val = snapshot.val()
        if (val) {
          context.commit('setBacklog', val.backLog)
          context.commit('setToDo', val.todo)
          context.commit('setDoing', val.doing)
          context.commit('setDone', val.done)
        } else {
          context.commit('setNull')
        }
      })
    }
  }
})

export default store
