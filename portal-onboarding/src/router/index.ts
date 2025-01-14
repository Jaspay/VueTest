import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import Pinia from '../components/Pinia.vue'
import ThiveyanPinia from '@/components/ThiveyanPinia.vue'
import WilsonPinia from '../components/WilsonPinia.vue'
import JasperWeather from '../components/JasperWeather.vue'
import WilsonWeather from '@/components/WilsonWeather.vue'
import ThiveyanWeather from '../components/ThiveyanWeather.vue'

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
    },
    {
      path:'/jasper-weather',
      component: JasperWeather
    },
    {
      path: '/wilson-weather',
      component: WilsonWeather
    },
    {
      path: '/thiveyan-weather',
      component: ThiveyanWeather
    }
    
  ]
})

export default router