import Vue from 'vue'
import Router from 'vue-router'
import mineRouter from './mine'
import indexPageRouter from './indexPage'
import discoverRouter from './discover'
import searchRouter from './search'

Vue.use(Router)

export default new Router({
  mode:'history',
  props:true,
  routes: [
    indexPageRouter,
    discoverRouter,
    mineRouter,
    searchRouter,
    {
      path: '*',
      redirect:'/indexPage' //地址处均采用驼峰式命名
    }
  ]
})
