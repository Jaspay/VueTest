<template>
    <v-container fluid class="bg-gradient-to-br from-red-50 to-red-100 min-h-screen">
      <v-card class="pa-6 mx-auto mt-8" max-width="600">
        <v-card-title class="text-h4 text-center mb-6">Pinia Counter</v-card-title>
        
        <!-- Counter Section - Centered -->
        <v-card-text class="text-center">
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
        
        <!-- Back Home Button - Bottom Left -->
        <v-card-actions class="mt-6">
          <v-btn 
            @click="$router.push('/')" 
            color="primary"
            variant="text"
          >
            Back Home
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </template>
  
  <script lang="ts" setup>
  import { useCounterStore } from '@/stores/counter';
  
  const counter = useCounterStore()
  </script>