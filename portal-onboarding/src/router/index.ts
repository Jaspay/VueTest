import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import Pinia from '../components/Pinia.vue'
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
      path: '/wilson-pinia',
      component: WilsonPinia
    }
  ]
})

export default router