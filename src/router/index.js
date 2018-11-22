import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
import Home from "../components/home.vue"
import Class from "../components/class.vue"
import Cart from "../components/cart.vue"
import My from "../components/my.vue"
import Banner from "../components/banner.vue"
import List from "../components/list.vue"
import Detail from "../components/detail.vue"
import Search from "../components/search.vue"
export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path:'*',
      redirect:'/home'
    },
    {
      path: '/class',
      component: Class
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/banner',
      component: Banner
    },
    {
      path: '/list/:str',
      component: List
    },
    {
      path: '/detail/:id',
      component: Detail
    },
    {
      path:  '/search',
      component: Search
    }
  ]
})
