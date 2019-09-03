// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import Iview from 'iview'
import router from './router'
import '../style.css'
import 'iview/dist/styles/iview.css';
import Header from '@/components/Header'
import Footer from '@/components/Footer'

Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(Iview);
Vue.component('Header',Header);
Vue.component('Footer',Footer);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App,Header,Footer },
  template: '<App/>'
})
