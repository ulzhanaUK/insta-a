import Vue from 'vue'
import Router from 'vue-router'
const General = resolve => require(['@/components/pages/General.vue'], resolve)
const Analyse = resolve => require(['@/components/pages/Analyse.vue'], resolve)
const Register = resolve => require(['@/components/pages/Register.vue'], resolve)
const Login = resolve => require(['@/components/pages/Login.vue'], resolve)
const Aboutus = resolve => require(['@/components/pages/Aboutus.vue'], resolve)
const History = resolve => require(['@/components/pages/History.vue'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'General',
      component: General
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/analyse',
      name: 'Analyse',
      component: Analyse
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/aboutus',
      name: 'Aboutus',
      component: Aboutus
    }
  ]
})
