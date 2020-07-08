import Vue from 'vue'
import App from './App.vue'
import './assets/icon/iconfont.css'
import './assets/icon/icomoon.css'
import { Lazyload, Button, Icon } from 'vant'
Vue.use(Lazyload)
Vue.use(Button)
Vue.use(Icon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
