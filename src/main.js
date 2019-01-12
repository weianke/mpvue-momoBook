import Vue from 'vue'
import App from './App'
import Fly from './utils/fly'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$http = Fly

const app = new Vue(App)
app.$mount()
