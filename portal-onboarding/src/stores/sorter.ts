import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useSorterStore = defineStore('sorter', () => {
  // State
  const numbers = ref<number[]>([])
  const inputNumber = ref<string>('')

  // Getters (computed properties)
  const arrayLength = computed(() => numbers.value.length)
  const sortedArray = computed(() => [...numbers.value].sort((a, b) => a - b))
  const arraySum = computed(() => numbers.value.reduce((sum, num) => sum + num, 0))
  const arrayAverage = computed(() => 
    arrayLength.value ? arraySum.value / arrayLength.value : 0
  )
  const isEmpty = computed(() => arrayLength.value === 0)

  // Actions
  function addNumber() {
    const num = Number(inputNumber.value)
    if (!isNaN(num)) {
      numbers.value.push(num)
      inputNumber.value = '' // Clear input after adding
    }
  }

  function sortNumbers() {
    numbers.value = [...sortedArray.value]
  }

  function clearArray() {
    numbers.value = []
  }

  return {
    // State
    numbers,
    inputNumber,
    
    // Getters
    arrayLength,
    sortedArray,
    arraySum,
    arrayAverage,
    isEmpty,
    
    // Actions
    addNumber,
    sortNumbers,
    clearArray
  }
})