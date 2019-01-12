import Vue from 'vue'
import App from './App'
import Fly from './utils/fly'

Vue.config.productionTip = false
App.mpType = 'app'
// 设置请求基地址
Vue.prototype.$http = Fly

const app = new Vue(App)
app.$mount()
