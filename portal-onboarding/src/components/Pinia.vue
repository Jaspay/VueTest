<template>
    <v-container fluid :class="theme.isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-red-50 to-red-100'" class="min-h-screen">
      <v-card class="pa-6 mx-auto mt-8" max-width="600" :theme="theme.currentTheme">
        <v-card-title class="text-h4 text-center mb-6 d-flex align-center justify-space-between">
          Pinia Usage
          <v-btn
            :icon="theme.isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'"
            @click="theme.toggleTheme"
            size="small"
          ></v-btn>
        </v-card-title>
        
        <!-- Counter Section -->
        <v-card-text class="text-center mb-8">
          <div class="text-h6 mb-4">Counter: {{ counter.count }}</div>
          <div class="d-flex justify-center gap-2">
            <v-btn
              color="secondary"
              variant="outlined"
              size="small"
              @click="counter.decrement"
            >
              Decrement
            </v-btn>
            <v-btn
              color="primary"
              variant="outlined"
              size="small"
              @click="counter.increment"
            >
              Increment
            </v-btn>
          </div>
        </v-card-text>
  
        <!-- Divider -->
        <v-divider class="mb-8"></v-divider>
        
        <!-- Array Sorter Section -->
        <v-card-text>
          <div class="text-h6 text-center mb-4">Array Sorter</div>
          
          <!-- Input Section -->
          <div class="d-flex gap-4 mb-6">
            <v-text-field
              v-model="sorter.inputNumber"
              label="Enter a number"
              type="number"
              @keyup.enter="sorter.addNumber"
              hide-details
            ></v-text-field>
            <v-btn
              color="primary"
              @click="sorter.addNumber"
              :disabled="!sorter.inputNumber"
            >
              Add Number
            </v-btn>
          </div>
  
          <!-- Array Display -->
          <v-alert
            v-if="sorter.isEmpty"
            color="info"
            class="mb-4"
          >
            No numbers in array yet. Add some numbers to begin!
          </v-alert>
          
          <template v-else>
            <!-- Original Array -->
            <div class="mb-4">
              <div class="text-subtitle-1 font-weight-bold mb-2">Original Array:</div>
              <v-chip-group>
                <v-chip
                  v-for="(num, index) in sorter.numbers"
                  :key="index"
                  color="primary"
                  variant="outlined"
                >
                  {{ num }}
                </v-chip>
              </v-chip-group>
            </div>
  
            <!-- Sorted Array -->
            <div class="mb-4">
              <div class="text-subtitle-1 font-weight-bold mb-2">Sorted Array:</div>
              <v-chip-group>
                <v-chip
                  v-for="(num, index) in sorter.sortedArray"
                  :key="index"
                  color="success"
                  variant="outlined"
                >
                  {{ num }}
                </v-chip>
              </v-chip-group>
            </div>
  
            <!-- Statistics -->
            <v-list>
              <v-list-item>
                <v-list-item-title>Array Length: {{ sorter.arrayLength }}</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Sum: {{ sorter.arraySum }}</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Average: {{ sorter.arrayAverage.toFixed(2) }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </template>
        </v-card-text>
        
        <!-- Actions -->
        <v-card-actions class="mt-6">
          <v-btn 
            @click="$router.push('/')" 
            color="primary"
            variant="text"
          >
            Back Home
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="error"
            variant="outlined"
            @click="sorter.clearArray"
            :disabled="sorter.isEmpty"
          >
            Clear Array
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </template>
  
  <script lang="ts" setup>
  import { useCounterStore } from '@/stores/counter';
  import { useSorterStore } from '@/stores/sorter';
  import { useThemeStore } from '@/stores/theme';
  
  const counter = useCounterStore();
  const sorter = useSorterStore();
  const theme = useThemeStore();
  </script>