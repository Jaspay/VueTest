<template>
  <section id="jasper" class="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 p-8">
    <div class="max-w-3xl text-center">
      <h2 class="text-3xl font-bold text-black mb-4">{{ displayedText }}<span v-if="isTyping" class="cursor">|</span></h2>
      <p class="text-lg text-gray-800 mb-6">
        Hi, I'm Jasper! I just finished my second year of computer engineering at the University of Waterloo. 
        In my spare time, I enjoy learning new technology, playing basketball, and video games.
      </p>
      <div class="flex justify-center gap-6">
        <a 
          href="https://linkedin.com/in/j4fei" 
          target="_blank" 
          rel="noopener noreferrer"
          class="text-gray-700 hover:text-blue-600 transition-colors hover:scale-110"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
        <a 
          href="https://instagram.com/jaspay" 
          target="_blank" 
          rel="noopener noreferrer"
          class="text-gray-700 hover:text-pink-600 transition-colors hover:scale-110"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        <a 
          href="mailto:j4fei@uwaterloo.ca" 
          target="_blank" 
          rel="noopener noreferrer"
          class="text-gray-700 hover:text-black-600 transition-colors hover:scale-110"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const text = "Jasper";
const displayedText = ref("");
const index = ref(0);
const isTyping = ref(true);

function typeText() {
  if (index.value < text.length) {
    displayedText.value += text.charAt(index.value);
    index.value++;
    setTimeout(typeText, 150); // Adjust typing speed here (in milliseconds)
  } else {
    isTyping.value = false; // Stop showing the cursor after typing is done
    setTimeout(startUntyping, 3000);
  }
}

function startUntyping() {
  if (displayedText.value.length > 0) {
    displayedText.value = displayedText.value.slice(0, -1); // Remove the last character
    setTimeout(startUntyping, 100); // Adjust untyping speed here (in milliseconds)
  } else {
    isTyping.value = true; // Start typing again
    index.value = 0; // Reset the index
    typeText(); // Restart the typing effect
  }
}

onMounted(() => {
  typeText(); // Start the typing effect when the component is mounted
});
</script>

<style>
.cursor {
  animation: blink 1s steps(1) infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>