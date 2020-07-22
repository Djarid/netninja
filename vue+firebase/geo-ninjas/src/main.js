import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import dv from './firebase/init'

Vue.config.productionTip = false

let app = null;

// wait for firebase auth to init before creating app
firebase.auth().onAuthStateChanged(() => {

  // init app if not already created
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})

