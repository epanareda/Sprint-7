import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'

const routes = [
  // The inicial route in this routing sistem has been changed from home component to welcome, as the result of the interpretation from the exercice 4.
  // // {
  // //   path: '/',
  // //   name: 'home',
  // //   component: Home
  // // },
  {
    path: '/',
    name: 'welcome',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Welcome.vue')
  },
  {
    // As I say at the before, I reset the path of home from "/" to "/home" once reached the exercice 4. On the commits before this exercice is set at "/", as it's said in the exercice 1.
    path: '/home',
    name: 'home',
    component: Home,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
