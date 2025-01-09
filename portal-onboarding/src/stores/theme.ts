import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  // State
  const isDark = ref(false)

  // Getters
  const currentTheme = computed(() => isDark.value ? 'dark' : 'light')
  const backgroundColor = computed(() => isDark.value ? 'bg-gray-900' : 'bg-gradient-to-br from-red-50 to-red-100')
  const textColor = computed(() => isDark.value ? 'text-white' : 'text-black')

  // Actions
  function toggleTheme() {
    isDark.value = !isDark.value
  }

  function setDarkMode() {
    isDark.value = true
  }

  function setLightMode() {
    isDark.value = false
  }

  return {
    // State
    isDark,
    
    // Getters
    currentTheme,
    backgroundColor,
    textColor,
    
    // Actions
    toggleTheme,
    setDarkMode,
    setLightMode
  }
})