import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Add from '@/components/Add'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index.html',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    }
  ]
})
