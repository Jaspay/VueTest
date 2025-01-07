<template>
  <v-app-bar 
    color="black" 
    elevation="4"
    height="80"
    app
  >
    <v-container class="d-flex align-center justify-space-between">
      <v-app-bar-title class="text-amber-darken-2 text-h5 font-weight-medium">
        Portal Onboarding Project
      </v-app-bar-title>
      
      <div>
        <v-btn
          v-for="item in navItems"
          :key="item.id"
          @click="scrollToSection(item.id)"
          variant="text"
          class="text-amber-lighten-4 mx-1"
        >
          {{ item.name }}
        </v-btn>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const navItems = ref([
  { id: 'home', name: 'Home' },
  { id: 'jasper', name: 'Jasper' },
  { id: 'thiveyan', name: 'Thiveyan' },
  { id: 'wilson', name: 'Wilson' },
]);

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: 'smooth' });
}
</script>