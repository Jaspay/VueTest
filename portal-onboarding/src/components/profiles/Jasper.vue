<template>
  <v-container fluid class="bg-gradient-to-br from-red-50 to-red-100 min-h-screen" id="jasper">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="pa-6 border-thin rounded-shaped custom-hover-card" 
          bg-color="transparent" 
          :elevation="isHovered ? 16 : 0" 
          @mouseover="isHovered = true"
          @mouseleave="isHovered = false"
          >
          <v-card-title class="text-h4 text-center mb-4">
            {{ displayedText }}<span v-if="isTyping" class="cursor">|</span>
          </v-card-title>
          
          <v-card-text class="text-body-1 text-center">
            Hi, I'm Jasper! I just finished my second year of computer engineering at the University of Waterloo. 
            In my spare time, I enjoy learning new technology, playing basketball, and video games.
          </v-card-text>

          <v-card-actions>
            <div class="d-flex w-100 justify-space-between align-center">
              <!-- Social Media Icons on the left -->
              <div>
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
              </div>
              
              <div>
                <v-btn
                  color="primary"
                  @click="dialog = true"
                  variant="outlined"
                  size="small"
                  class="mx-2"
                >
                  Skills
                </v-btn>
                <v-btn
                  color="secondary"
                  variant="outlined"
                  size="small"
                  class="mx-2"
                >
                  <RouterLink to ="/pinia">Pinia Test</RouterLink>
                </v-btn>
              </div>
            </div>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Skills Dialog -->
    <v-dialog v-model="dialog" width="auto">
      <v-card class="pa-6" min-width="300">
        <v-card-title class="text-h5 mb-4">
          My Skills
        </v-card-title>
        
        <v-card-text class="text-body-1">
          <div class="mb-4">
            <strong>Languages</strong>: JavaScript, Python, Java, C++
          </div>
          <div class="mb-4">
            <strong>Frameworks</strong>: Vue.js, React, Node.js
          </div>
          <div class="mb-4">
            <strong>Tools</strong>: Git, Docker, VS Code
          </div>
        </v-card-text>
        
        <v-card-actions class="justify-end">
          <v-btn
            color="primary"
            variant="text"
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import {computed} from 'vue'
import {useRoute, useRouter} from 'vue-router'

const text = "Jasper";
const displayedText = ref("");
const index = ref(0);
const isTyping = ref(true);
const isHovered = ref(false);
const dialog = ref(false);

const router = useRouter()
const route = useRoute()

const search = computed({
  get() {
    return route.query.search ?? ''
  },
  set(search) {
    router.replace({query: {search}})
  }
})

function typeText() {
  if (index.value < text.length) {
    displayedText.value += text.charAt(index.value);
    index.value++;
    setTimeout(typeText, 150);
  } else {
    isTyping.value = false;
    setTimeout(startUntyping, 3000);
  }
}

function startUntyping() {
  if (displayedText.value.length > 1) {
    displayedText.value = displayedText.value.slice(0, -1);
    setTimeout(startUntyping, 100);
  } else {
    isTyping.value = true;
    index.value = 0;
    displayedText.value = "";
    typeText();
  }
}

onMounted(() => {
  typeText();
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
  transform: translateY(120px);
  transition: all 0.3s ease;
}

.custom-hover-card:hover {
  transform: translateY(120px) scale(1.02);
}
</style>