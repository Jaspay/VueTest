import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useStringSorterStore = defineStore('stringsorter', () => {
// State
const strings = ref<string[]>([]);
const inputString = ref<string>('');

// Getters (computed properties)
const arrayLength = computed(() => strings.value.length);
const sortedArray = computed(() => [...strings.value].sort());
const isEmpty = computed(() => arrayLength.value === 0);

// Actions
function addString() {
  const str = inputString.value.trim();
  if (str) {
    strings.value.push(str);
    inputString.value = ''; // Clear input after adding
  }
}

function sortStrings() {
  strings.value = [...sortedArray.value];
}

function clearArray() {
  strings.value = [];
}

return {
  // State
  strings,
  inputString,
  
  // Getters
  arrayLength,
  sortedArray,
  isEmpty,
  
  // Actions
  addString,
  sortStrings,
  clearArray
};
});