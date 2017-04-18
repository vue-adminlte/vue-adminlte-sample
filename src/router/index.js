import Vue from 'vue'
import Router from 'vue-router'
import AppRouter from './app-sample-router.js'
import WebRouter from './web-sample-router.js'

import WebStarterRouter from './web-sample-router.js'
import AppSampleRouter from './app-sample-router.js'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Default',
    component: require('@/components/AppSample'),
    children: [{
      path: '',
      component: require('@/components/AppSample/Home')
    }]
  },
  AppSampleRouter, 
  {
    path: '/WebStarter',
    name: 'WebStarter',
  // component: WebStarter
  }]
})
