import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLikeRatio = defineStore('likeratio', () => {
  const likecount = ref(0)
  const totalcount = ref(0)

  function increment() {
    likecount.value++
    totalcount.value++
  }

  function decrement() {
    totalcount.value++
  }
  const ratio = computed(() => {
    const raw = 100 * likecount.value/totalcount.value || 0
    return raw.toFixed(2)
  })

  return { ratio, increment, decrement }
})
