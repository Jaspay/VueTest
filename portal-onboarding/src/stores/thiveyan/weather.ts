import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { CurrentWeather } from './interfaces/today'
import type { Forecast } from './entities/forecast'

export const useWeatherStore = defineStore('weather', () => {
  const weather = ref<CurrentWeather | null>(null)
  const forecast = ref<Forecast | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchWeather() {
    loading.value = true
    error.value = null

    try {
      const response = await fetch('https://func-portal-external-apis.azurewebsites.net/api/Weather/CurrentWeather')
      const data = await response.json()
      weather.value = data
    }
    catch (e) {
      error.value = e instanceof Error ? e.message : 'There was an error fetching the current weather. Please try again.'
    }
    finally {
      loading.value = false
    }
  }

  async function fetchForecast() {
    loading.value = true
    error.value = null

    try {
      const response = await fetch('https://func-portal-external-apis.azurewebsites.net/api/Weather/Forecast')
      const data = await response.json()
      forecast.value = data

    }
    catch (e) {
      error.value = e instanceof Error ? e.message : 'There was an error fetching the current weather. Please try again.'
    }
    finally {
      loading.value = false
    }
  }

  return {
    weather,
    forecast,
    loading,
    error,
    fetchWeather,
    fetchForecast
  }
})
