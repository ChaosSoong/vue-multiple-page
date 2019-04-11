import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Add from '@/components/Add'

Vue.use(Router)
let router = new Router({
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
router.beforeEach((to, from, next) => {
  console.log(to, from)
  if (to.matched.length === 0) {
    window.location.href = '/login.html'
  } else {
    next()
  }
})
export default router
