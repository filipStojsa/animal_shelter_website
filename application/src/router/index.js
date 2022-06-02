import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// zivotinje
import VrstaView from '../views/zivotinje/VrstaView.vue'
import ZivotinjeView from '../views/zivotinje/ZivotinjeView.vue'
import ZivotinjaView from '../views/zivotinje/ZivotinjaView.vue'

import ONamaView from '../views/ONamaView.vue'
import MojNalogView from '../views/MojNalogView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/zivotinje/:vrsta',
    name: 'vrsta',
    component: VrstaView
  },
  {
    path: '/zivotinje',
    name: 'zivotinje',
    component: ZivotinjeView
  },
  {
    path: '/zivotinje/:vrsta/:id',
    name: 'zivotinja',
    component: ZivotinjaView
  },
  {
    path: '/onama',
    name: 'onama',
    component: ONamaView
  },
  {
    path: '/mojnalog',
    name: 'mojnalog',
    component: MojNalogView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
