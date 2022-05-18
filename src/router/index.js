import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthComponent from '@/components/Auth.vue'
import MainComponent from '@/components/Main.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainComponent
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/cv',
    name:'cv',
    component:MainComponent
  },
  {
    path:'/auth',
    name:'auth',
    component:AuthComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

//home
//animated-section start-page ps
//animated-section start-page ps ps--theme_default

//resume
// animated-section ps section-active ps--theme_default ps--active-y
// animated-section ps section-active ps--theme_default
