<template>
    <v-container fluid class="min-h-screen flex items-center justify-center p-12 bg-orange-50">
      <v-card class="pa-6 mx-auto mt-8" max-width="600">
        <v-card-title class="text-xl font-bold text-black text-center mb-2">Did you like my Portfolio?</v-card-title>
        <p class="text-xl text-center">Like to Dislike Ratio</p>
        <div class="flex items-center justify-center">
          <v-btn icon class="ma-2 hover-green" size="x-large" @click="counter.increment"> 
            <v-icon>mdi-thumb-up-outline</v-icon> 
          </v-btn>
          <div class="text-3xl font-bold text-black text-center mx-4">{{ counter.ratio }} %</div>
          <v-btn icon class="ma-2 hover-red" size="x-large" @click="counter.decrement"> 
            <v-icon>mdi-thumb-down-outline</v-icon> 
          </v-btn>
        </div>
        <v-card-actions class="mt-3 justify-center">
          <v-btn 
            @click="$router.push('/')" 
            color="orange"
            variant="tonal"
          >
            <v-icon>mdi-arrow-left</v-icon> Back
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="pa-6 mx-auto mt-8" max-width="600">
        <v-card-title class="text-xl font-bold text-black text-center mb-2">What should I learn next?</v-card-title>
        <v-card-text>
        <div class="flex items-center justify-center">
          <v-text-field
            class="ma-2"
            v-model="stringSorter.inputString"
            label="Your suggestion"
            outlined
          ></v-text-field> 
          <v-btn icon @click="stringSorter.addString" color="primary" style="margin-top: -15px;"> <v-icon>mdi-plus</v-icon> </v-btn>
        </div>
        <p class="text-xl">Total: {{stringSorter.arrayLength}}</p>
        <p class="text-xl">
              Sorted Suggestions: 
              <span v-if="!stringSorter.isEmpty">
                [{{ stringSorter.sortedArray.join(', ') }}]
              </span>
              <span v-else class="">
              </span>
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import { useLikeRatio } from '@/stores/likeratio'
import { useStringSorterStore } from '@/stores/stringsorter'
const counter = useLikeRatio();
const stringSorter = useStringSorterStore();  


</script>

<style scoped>
.hover-green:hover {
  background-color: green;
}
.hover-red:hover {
  background-color: red;
}
</style>