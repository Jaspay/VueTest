import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import Pinia from '../components/Pinia.vue'

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
    }
  ]
})

export default router