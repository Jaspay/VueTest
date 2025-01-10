<template>
    <v-container  fluid class="min-h-screen justify-center p-12 bg-orange-50">
    <v-card
      class="mx-auto"
      max-width="368"
    >
      <v-card-item title="Waterloo, ON">
      </v-card-item>
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
        
        <v-card-text class="py-0">
            <v-row align="center" no-gutters>
                <v-col
                    class="text-h2"
                    cols="6"
                >
                {{ weatherStore.weather.data.temp }}&deg;C
                </v-col>
    
                <v-col class="text-right" cols="6">
                    <v-icon :color="weatherStore.weather.data.color"
                    size="88"
                    >{{ weatherStore.weather.data.icon }}</v-icon>
                </v-col>
            </v-row>
        </v-card-text>
        <div class="d-flex py-3 ma-4">Feels like: {{ weatherStore.weather.data.tempFeelsLike }} &deg;C</div>
        <div class="d-flex py-3 justify-space-between ma-4">
          <v-list-item-subtitle>High: {{ weatherStore.weather.data.high }}</v-list-item-subtitle>
          <v-list-item-subtitle>Low: {{ weatherStore.weather.data.low }}</v-list-item-subtitle>
          <v-list-item-subtitle>Sky: {{ weatherStore.weather.data.hourStatus }}</v-list-item-subtitle>
        </div>
      </template>
      <v-divider></v-divider>
        <v-card
        class="mx-auto"
        max-width="368"
        >
        <v-card-item title="Forecast"></v-card-item>
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
            <v-list-item
            v-for="item in weatherStore.forecast.data.longTerm"
            :key="item.dateLabel"
            :append-icon="item.icon"
            :base-color="item.color"
            :subtitle="item.tempMax + '°C' + '/' + item.tempMin + '°C'" 
            :title="item.dateLabel"
          ></v-list-item>
        </template>
        <v-card-actions class="mt-3 justify-center">
          <v-btn 
            @click="$router.push('/')" 
            color="weatherStore.weather.data.color"
            variant="tonal"
          >
            <v-icon>mdi-arrow-left</v-icon> Back
          </v-btn>
        </v-card-actions>
    </v-card>
     </v-card>
    </v-container>
  </template>

  <script lang="ts" setup>
    import { useWeatherStore } from '@/stores/thiveyan/weather'
    import { onMounted } from 'vue'

    const weatherStore = useWeatherStore()

    onMounted(() => {
        weatherStore.fetchWeather()
        weatherStore.fetchForecast()
    })
  </script>