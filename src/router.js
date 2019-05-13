import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/homePage/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/LogIn',
      name: 'logIn',
      component: () => import('./views/logpage/LogIn.vue') 
    },
    {
      path: '/dataSet',
      name: 'dataSet',
      component: () => import('./views/analysisPage/dataSet.vue') 
    }
  ],
  scrollBehavior(){
    return{ x:0,y:0}
  }
})
