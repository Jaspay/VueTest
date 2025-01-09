<template>
  <v-container fluid class="bg-wilson-gradient min-h-screen py-12">
    <v-row justify="center">
      <!-- Current Weather Card -->
      <v-col cols="12" md="6" lg="4">
        <v-card class="pa-6 mx-auto h-100" elevation="8" rounded="lg">
          <v-card-title class="text-h4 font-weight-bold text-center mb-6">Current Weather</v-card-title>
          
          <template v-if="weatherStore.loading">
            <div class="d-flex justify-center pa-4">
              <v-progress-circular size="64" indeterminate color="primary"></v-progress-circular>
            </div>
          </template>

          <template v-else-if="weatherStore.error">
            <v-alert type="error" class="mb-4" prominent border="start">
              {{ weatherStore.error }}
            </v-alert>
          </template>

          <template v-else-if="weatherStore.weather">
            <div class="d-flex align-center justify-center">
              <v-icon :color="weatherStore.weather.data.color" size="96" class="mr-4">
                {{ weatherStore.weather.data.icon }}
              </v-icon>
              <div class="text-center">
                <div class="text-h2 font-weight-bold">{{ weatherStore.weather.data.temp }}°C</div>
                <div class="text-h6">Feels like {{ weatherStore.weather.data.tempFeelsLike }}°C</div>
              </div>
            </div>
            <v-divider class="my-6"></v-divider>
            <v-list>
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon color="red-lighten-1">mdi-thermometer-high</v-icon>
                </template>
                <v-list-item-title>High: {{ weatherStore.weather.data.high }}°C</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon color="blue-lighten-1">mdi-thermometer-low</v-icon>
                </template>
                <v-list-item-title>Low: {{ weatherStore.weather.data.low }}°C</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon color="orange">mdi-white-balance-sunny</v-icon>
                </template>
                <v-list-item-title>UV Index: {{ weatherStore.weather.data.uvIndex }}/{{ weatherStore.weather.data.uvIndexHigh }}</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon color="primary">mdi-information</v-icon>
                </template>
                <v-list-item-title>Status: {{ weatherStore.weather.data.hourStatus }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </template>
        </v-card>
      </v-col>

      <!-- Weekly Forecast Card -->
      <v-col cols="12" md="6" lg="8">
        <v-card class="pa-6 h-100" elevation="8" rounded="lg">
          <v-card-title class="text-h4 font-weight-bold text-center mb-6">Weekly Forecast</v-card-title>

          <template v-if="weatherStore.loading">
            <div class="d-flex justify-center pa-4">
              <v-progress-circular size="64" indeterminate color="primary"></v-progress-circular>
            </div>
          </template>

          <template v-else-if="weatherStore.error">
            <v-alert type="error" class="mb-4" prominent border="start">
              {{ weatherStore.error }}
            </v-alert>
          </template>

          <template v-else-if="weatherStore.forecast">
            <v-row dense>
              <v-col v-for="day in weatherStore.forecast.data.longTerm" :key="day.dateLabel" cols="12" sm="6" md="3">
                <v-card :color="day.color" variant="elevated" class="h-100">
                  <v-card-title class="text-h6 font-weight-bold">{{ day.dateLabel }}</v-card-title>
                  <v-card-text>
                    <div class="d-flex align-center mb-4">
                      <v-icon size="36" class="mr-2">{{ day.icon }}</v-icon>
                      <span class="text-subtitle-1">{{ day.summary }}</span>
                    </div>
                    <v-list density="compact">
                      <v-list-item>
                        <template v-slot:prepend>
                          <v-icon size="small" color="red-lighten-1">mdi-thermometer-high</v-icon>
                        </template>
                        <v-list-item-title>{{ day.tempMax }}°C</v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <template v-slot:prepend>
                          <v-icon size="small" color="blue-lighten-1">mdi-thermometer-low</v-icon>
                        </template>
                        <v-list-item-title>{{ day.tempMin }}°C</v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <template v-slot:prepend>
                          <v-icon size="small" color="orange">mdi-white-balance-sunny</v-icon>
                        </template>
                        <v-list-item-title>{{ (day.pop * 100).toFixed(0) }}%</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </template>
        </v-card>
      </v-col>

      <!-- Hourly Forecast -->
      <v-col cols="12">
        <v-card class="pa-4">
          <v-card-title class="text-h5 mb-4">Hourly Forecast</v-card-title>

          <template v-if="weatherStore.loading">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
          </template>

          <template v-else-if="weatherStore.error">
            <v-alert type="error" class="mb-4">
              {{ weatherStore.error }}
            </v-alert>
          </template>

          <template v-else-if="weatherStore.forecast">
            <v-row>
              <v-col v-for="hour in weatherStore.forecast.data.shortTerm" :key="hour.dateLabel" cols="6" sm="4" md="2">
                <v-card :color="hour.color" variant="outlined" class="text-center">
                  <v-card-title class="text-subtitle-1">{{ hour.dateLabel }}</v-card-title>
                  <v-card-text>
                    <v-icon size="32">{{ hour.icon }}</v-icon>
                    <div class="text-h6 mt-2">{{ hour.temp }}°C</div>
                    <div class="text-caption">Feels like {{ hour.apparentTemp }}°C</div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </template>
        </v-card>
      </v-col>
    </v-row>
    <!-- Back Home Button -->
    <v-card-actions class="mt-6 justify-center">
        <v-btn 
          @click="$router.push('/')" 
          color="primary"
          variant="tonal"
        >
          Back Home
        </v-btn>
      </v-card-actions>
  </v-container>
</template>

<script lang="ts" setup>
import { useWeatherStore } from '@/stores/wilson/weather'
import { onMounted } from 'vue'

const weatherStore = useWeatherStore()

onMounted(() => {
  weatherStore.fetchWeather()
  weatherStore.fetchForecast()
})
</script>