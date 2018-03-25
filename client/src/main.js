// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import firebase from 'firebase'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

var config = {
  apiKey: 'AIzaSyD9CKH68Da40Gimbvfklqaz9rTFNubOffI',
  authDomain: 'to-do-kanban.firebaseapp.com',
  databaseURL: 'https://to-do-kanban.firebaseio.com',
  projectId: 'to-do-kanban',
  storageBucket: 'to-do-kanban.appspot.com',
  messagingSenderId: '339249997355'
}
firebase.initializeApp(config)
Vue.prototype.$fbdb = firebase.database()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
