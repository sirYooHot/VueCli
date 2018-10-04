import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'

Vue.use(Router)

var routes = []
var indexRoutes = [
  {
    path: '/',
    name: 'index',
    component: index
  }
]
routes = routes.concat(indexRoutes)
export default new Router({
  routes: routes
})
