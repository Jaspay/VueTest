<template>
  <v-container fluid class="bg-wilson-gradient min-h-screen py-12 d-flex align-center justify-center">
    <v-card class="pa-6 mx-auto w-2/5">
      <v-card-title class="text-h4 text-center mb-6">Wilson's Pinia Demo</v-card-title>
      
      <!-- Counter Demo -->
      <div ref="counterRef" class="flex flex-col gap-2 items-center mx-auto">
        <h2 class="text-xl mb-2 text-center">Counter Demo Using Pinia</h2>
        <div class="flex items-center gap-4 justify-center">
          <v-btn
            color="error"
            @click="counterStore.decrement"
            icon="mdi-minus"
          ></v-btn>
          
          <v-card class="px-6 py-2">
            <span class="text-2xl">{{ counterStore.count }}</span>
          </v-card>
          
          <v-btn
            color="success"
            @click="counterStore.increment"
            icon="mdi-plus"
          ></v-btn>
        </div>
      </div>

      <!-- Array Sorter Demo -->
      <div ref="sorterRef" class="flex flex-col gap-2 items-center mx-auto mt-8">
        <h2 class="text-xl mb-2 text-center">Array Sorter Demo Using Pinia</h2>
  
        <!-- Input Section -->
        <div class="flex justify-center gap-4 mb-4 w-full">
          <v-text-field
            v-model="sorterStore.inputNumber"
            type="number"
            variant="outlined"
            density="compact"
            bg-color="white/10"
            class="w-32"
          ></v-text-field>
          
          <v-btn
            color="primary"
            @click="sorterStore.addNumber"
          >
            Add Number
          </v-btn>
        </div>

        <!-- Array Display -->
        <v-card class="bg-white/10 px-6 py-4 mb-4 w-full max-w-md">
          <div class="space-y-2 text-center">
            <p class="text-xl">
              Current Array: 
              <span v-if="!sorterStore.isEmpty" class="font-mono">
                [{{ sorterStore.numbers.join(', ') }}]
              </span>
              <span v-else class="">
                (empty)
              </span>
            </p>
            
            <!-- Stats Section -->
            <div v-if="!sorterStore.isEmpty" class="space-y-1">
              <p>Length: {{ sorterStore.arrayLength }}</p>
              <p>Sum: {{ sorterStore.arraySum }}</p>
              <p>Average: {{ sorterStore.arrayAverage.toFixed(2) }}</p>
              <p class="font-mono">
                Sorted: [{{ sorterStore.sortedArray.join(', ') }}]
              </p>
            </div>
          </div>
        </v-card>

        <v-btn
          color="error"
          @click="sorterStore.clearArray"
          :disabled="sorterStore.isEmpty"
        >
          Clear Array
        </v-btn>
      </div>

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
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { useSorterStore } from '@/stores/sorter'

const counterStore = useCounterStore()
const sorterStore = useSorterStore()

// Refs for intersection observer
const counterRef = ref(null)
const sorterRef = ref(null)

// Function to handle intersection
const handleIntersection = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    }
  })
}

// Set up observer
onMounted(() => {
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1
  })

  if (counterRef.value) observer.observe(counterRef.value)
  if (sorterRef.value) observer.observe(sorterRef.value)
})
</script>

<style scoped>
.section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.section.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>