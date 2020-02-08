import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import { Avatar } from 'element-ui'
import About from '@/components/About'

Vue.use(Router)
  
export default new Router({
  routes: [
    {
      path: '/vue',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/about',
      name:'About',
      component:About
    }
  ]
})
