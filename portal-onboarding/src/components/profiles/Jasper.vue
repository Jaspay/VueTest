<template>
  <v-container fluid class="bg-gradient-to-br from-red-50 to-red-100 min-h-screen">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="pa-6 border-thin rounded-shaped custom-hover-card" 
          bg-color="transparent" 
          :elevation="isHovered ? 16 : 0" 
          @mouseover="isHovered = true"
          @mouseleave="isHovered = false">
          <v-card-title class="text-h4 text-center mb-4">
            {{ displayedText }}<span v-if="isTyping" class="cursor">|</span>
          </v-card-title>
          
          <v-card-text class="text-body-1 text-center">
            Hi, I'm Jasper! I just finished my second year of computer engineering at the University of Waterloo. 
            In my spare time, I enjoy learning new technology, playing basketball, and video games.
          </v-card-text>

          <v-card-actions class="justify-center">
            <v-btn 
              icon="mdi-linkedin" 
              href="https://linkedin.com/in/j4fei" 
              target="_blank"
              variant="text"
              class="mx-2"
            ></v-btn>
            <v-btn 
              icon="mdi-instagram" 
              href="https://instagram.com/jaspay" 
              target="_blank"
              variant="text"
              class="mx-2"
            ></v-btn>
            <v-btn 
              icon="mdi-email" 
              href="mailto:j4fei@uwaterloo.ca"
              variant="text"
              class="mx-2"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const text = "Jasper";
const displayedText = ref("");
const index = ref(0);
const isTyping = ref(true);
const isHovered = ref(false); // Track hover state

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
  if (displayedText.value.length > 1) {
    displayedText.value = displayedText.value.slice(0, -1); // Remove the last character
    setTimeout(startUntyping, 100); // Adjust untyping speed here (in milliseconds)
  } else {
    isTyping.value = true; // Start typing again
    index.value = 0; // Reset the index
    displayedText.value = "";
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

.custom-hover-card {
  transition: all 0.3s ease; /* Smooth transition for hover effects */
}
</style>