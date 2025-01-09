<template>
    <v-container fluid class="bg-gradient-to-br from-red-50 to-red-100 min-h-screen">
      <v-row justify="center">
        <v-col cols="12" sm="10" md="8">
          <v-card class="pa-6 mx-auto mt-8">
            <v-card-title class="text-h4 text-center mb-6">
              Weather Forecast
            </v-card-title>
  
            <!-- Forecast Type Toggle -->
            <div class="text-center mb-4">
              <v-btn-toggle
                v-model="forecastType"
                mandatory
                color="primary"
              >
                <v-btn value="short">Hourly</v-btn>
                <v-btn value="long">Weekly</v-btn>
              </v-btn-toggle>
            </div>
  
            <!-- Loading State -->
            <div v-if="loading" class="d-flex justify-center align-center py-8">
              <v-progress-circular
                indeterminate
                color="primary"
                size="64"
              ></v-progress-circular>
            </div>
  
            <!-- Error State -->
            <v-alert
              v-else-if="error"
              type="error"
              class="mb-4"
            >
              {{ error }}
            </v-alert>
  
            <!-- Weather Data -->
            <v-row v-else>
              <!-- Short Term Forecast -->
              <v-col 
                v-if="forecastType === 'short'"
                v-for="(day, index) in forecast.data.shortTerm" 
                :key="index"
                cols="12" 
                sm="6" 
                md="4"
              >
                <v-card elevation="2" :color="day.color">
                  <v-card-title class="text-h6 pb-0">
                    {{ day.dateLabel }}
                  </v-card-title>
                  
                  <v-card-text>
                    <div class="d-flex align-center mb-2">
                      <v-icon 
                        :icon="getWeatherIcon(day.icon)" 
                        size="large"
                        class="mr-2"
                      ></v-icon>
                    </div>
                    
                    <v-list density="compact">
                      <v-list-item>
                        <template v-slot:prepend>
                          <v-icon icon="mdi-thermometer" color="red"></v-icon>
                        </template>
                        <v-list-item-title>
                          <div>Temperature: {{ day.temp }}°C</div>
                          <div>Feels like: {{ day.apparentTemp }}°C</div>
                          <div>Precipitation: {{ day.pop }}%</div>
                        </v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-card-text>
                </v-card>
              </v-col>
  
              <!-- Long Term Forecast -->
              <v-col 
                v-if="forecastType === 'long'"
                v-for="(day, index) in forecast.data.longTerm" 
                :key="index"
                cols="12" 
                sm="6" 
                md="4"
              >
                <v-card elevation="2" :color="day.color">
                  <v-card-title class="text-h6 pb-0">
                    {{ day.dateLabel }}
                  </v-card-title>
                  
                  <v-card-text>
                    <div class="d-flex align-center mb-2">
                      <v-icon 
                        :icon="getWeatherIcon(day.icon)" 
                        size="large"
                        class="mr-2"
                      ></v-icon>
                      <span class="text-body-1">{{ day.summary }}</span>
                    </div>
                    
                    <v-list density="compact">
                      <v-list-item>
                        <template v-slot:prepend>
                          <v-icon icon="mdi-thermometer" color="red"></v-icon>
                        </template>
                        <v-list-item-title>
                          <div>Min: {{ day.tempMin }}°C</div>
                          <div>Max: {{ day.tempMax }}°C</div>
                        </v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
  
            <!-- Refresh Button -->
            <v-card-actions class="justify-center mt-4">
              <v-btn 
                @click="$router.push('/')" 
                color="primary"
                variant="text"
              >
                Back Home
              </v-btn>
              <v-btn
                color="primary"
                @click="fetchWeatherData"
                :loading="loading"
                :disabled="loading"
              >
                Refresh Forecast
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  
  interface WeatherForecast {
    meta: {
      status: number;
      type: string;
      message: string | null;
      errors: any;
      datetime: string | null;
    };
    data: {
      shortTerm: ShortTermForecast[];
      longTerm: LongTermForecast[];
    };
  }
  
  interface ShortTermForecast {
    dateLabel: string;
    icon: string;
    appIcon: string;
    color: string;
    temp: number;
    apparentTemp: number;
    pop: number;
  }
  
  interface LongTermForecast {
    dateLabel: string;
    icon: string;
    appIcon: string;
    color: string;
    summary: string;
    sunrise: number;
    sunset: number;
    pop: number;
    tempMin: number;
    tempMax: number;
    apparentTempMin: number;
    apparentTempMax: number;
  }
  
  const forecast = ref<WeatherForecast>({
    meta: {
      status: 200,
      type: 'success',
      message: null,
      errors: null,
      datetime: null,
    },
    data: {
      shortTerm: [],
      longTerm: [],
    },
  });
  const loading = ref(false);
  const error = ref<string | null>(null);
  const forecastType = ref('long'); // Default to long-term forecast
  
  const getWeatherIcon = (summary: string) => {
    const summaryLower = summary?.toLowerCase() ?? '';
    if (summaryLower.includes('sun') || summaryLower.includes('hot')) {
      return 'mdi-weather-sunny';
    } else if (summaryLower.includes('rain')) {
      return 'mdi-weather-rainy';
    } else if (summaryLower.includes('cloud')) {
      return 'mdi-weather-cloudy';
    } else if (summaryLower.includes('snow')) {
      return 'mdi-weather-snowy';
    } else if (summaryLower.includes('wind')) {
      return 'mdi-weather-windy';
    } else {
      return 'mdi-weather-partly-cloudy';
    }
  };
  
  const fetchWeatherData = async () => {
    loading.value = true;
    error.value = null;
    
    try {
      const response = await fetch(
        'https://func-portal-external-apis.azurewebsites.net/api/Weather/Forecast');
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      forecast.value = await response.json();
      console.log(forecast.value);
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'An error occurred while fetching weather data';
    } finally {
      loading.value = false;
    }
  };
  
  onMounted(() => {
    fetchWeatherData();
  });
  </script>