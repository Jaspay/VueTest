import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import Pinia from '../components/Pinia.vue'
import ThiveyanPinia from '@/components/ThiveyanPinia.vue'
import WilsonPinia from '../components/WilsonPinia.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: App
    },
    {
      path: '/pinia',
      component: Pinia
    },
    {
      path: '/thiveyan-pinia',
      component: ThiveyanPinia
    },
    {
      path: '/wilson-pinia',
      component: WilsonPinia
    }
  ]
})

export default router