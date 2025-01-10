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
              <v-btn value="current">Current</v-btn>
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
            <!-- Current Weather -->
            <v-col v-if="forecastType === 'current'" cols="12">
              <v-card elevation="2" :color="current.data.color">
                <v-card-title class="text-h5 pb-0">
                  Current Weather
                </v-card-title>
                
                <v-card-text>
                  <div class="d-flex align-center mb-4">
                    <v-icon 
                      :icon="getWeatherIcon(current.data.icon)" 
                      size="x-large"
                      class="mr-4"
                    ></v-icon>
                    <div class="text-h4">{{ current.data.temp }}°C</div>
                  </div>
                  
                  <v-list density="compact">
                    <v-list-item>
                      <template v-slot:prepend>
                        <v-icon icon="mdi-thermometer" color="red"></v-icon>
                      </template>
                      <v-list-item-title>
                        <div class="text-body-1">Feels like: {{ current.data.tempFeelsLike }}°C</div>
                        <div class="text-body-1">High: {{ current.data.high }}°C</div>
                        <div class="text-body-1">Low: {{ current.data.low }}°C</div>
                      </v-list-item-title>
                    </v-list-item>
                    
                    <v-list-item>
                      <template v-slot:prepend>
                        <v-icon icon="mdi-white-balance-sunny" color="orange"></v-icon>
                      </template>
                      <v-list-item-title>
                        <div class="text-body-1">UV Index: {{ current.data.uvIndex }}</div>
                        <div class="text-body-1">Status: {{ current.data.dayStatus }}</div>
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-card-text>
              </v-card>
            </v-col>

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
                        <div>Precipitation: {{ (day.pop * 100).toFixed(0) }}%</div>
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
                        <div>Precipitation: {{ (day.pop * 100).toFixed(0) }}%</div>
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
              @click="refreshData"
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
import { ref, onMounted, watch } from 'vue';

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

interface CurrentForecast {
  meta: {
    status: number;
    type: string;
    message: string | null;
    errors: any | null;
    datetime: string | null;
  };
  data: {
    temp: number;
    tempFeelsLike: number;
    high: number;
    low: number;
    uvIndex: number;
    uvIndexHigh: number;
    hourStatus: string;
    dayStatus: string;
    icon: string;
    appIcon: string;
    color: string;
    hourly: number[];
  };
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

const current = ref<CurrentForecast>({
  meta: {
    status: 0,
    type: "",
    message: null,
    errors: null,
    datetime: null,
  },
  data: {
    temp: 0,
    tempFeelsLike: 0,
    high: 0,
    low: 0,
    uvIndex: 0,
    uvIndexHigh: 0,
    hourStatus: "",
    dayStatus: "",
    icon: "",
    appIcon: "",
    color: "",
    hourly: [],
  },
});

const loading = ref(false);
const error = ref<string | null>(null);
const forecastType = ref('current'); // Default to current weather

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
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'An error occurred while fetching weather data';
  } finally {
    loading.value = false;
  }
};

const fetchCurrentData = async () => {
  loading.value = true;
  error.value = null;
  
  try {
    const response = await fetch(
      'https://func-portal-external-apis.azurewebsites.net/api/Weather/CurrentWeather');
    if (!response.ok) {
      throw new Error('Failed to fetch current weather data');
    }
    current.value = await response.json();
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'An error occurred while fetching current weather data';
  } finally {
    loading.value = false;
  }
};

const refreshData = async () => {
  if (forecastType.value === 'current') {
    await fetchCurrentData();
  } else {
    await fetchWeatherData();
  }
};

// Watch for changes in forecast type
watch(forecastType, async (newType) => {
  if (newType === 'current') {
    await fetchCurrentData();
  } else {
    await fetchWeatherData();
  }
});

onMounted(async () => {
  await fetchCurrentData();
});
</script>