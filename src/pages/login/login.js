// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Login from './login.vue'
import { Button, Switch, Form, FormItem, Input } from 'element-ui'
Vue.use(Button)
Vue.use(Switch)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Login/>',
  components: { Login }
})
