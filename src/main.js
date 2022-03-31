import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './utils/axios'
// 封装api
import api from './api'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import FooterNav from './components/FooterNav'
import TabBar from './components/TabBar'
import WaresList from './components/WaresList'
import SearchBar from './components/SearchBar'
import SearchBar2 from './components/SearchBar2'
import scroll from '@/mixins/scroll'

import './utils/rem'
import './assets/css/reset.css'
import './assets/font/iconfont.css'
import 'swiper/css/swiper.css'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
// 封装api
Vue.prototype.$api = api
Vue.component('FooterNav', FooterNav)
Vue.component('TabBar', TabBar)
Vue.component('WaresList', WaresList)
Vue.component('SearchBar', SearchBar)
Vue.component('SearchBar2', SearchBar2)
Vue.use(VueAwesomeSwiper)
Vue.mixin(scroll)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
