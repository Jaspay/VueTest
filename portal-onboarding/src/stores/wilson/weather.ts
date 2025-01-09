import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { CurrentWeather } from './entities/weather'
import type { WeatherForecast } from './entities/forecast'

export const useWeatherStore = defineStore('weather', () => {
  const weather = ref<CurrentWeather | null>(null)
  const forecast = ref<WeatherForecast | null>(null)
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
      error.value = e instanceof Error ? e.message : 'Failed to fetch current weather'
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
      error.value = e instanceof Error ? e.message : 'Failed to fetch weather forecast'
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
