<template>
  <v-app>
    <v-main>
      <router-view 
        v-if="$route.path === '/pinia' ||
        $route.path === '/thiveyan-pinia' ||
        $route.path === '/wilson-pinia' || 
        $route.path === '/wilson-weather'" 
      />
      <template v-else>
        <Navbar />
        <Hero />
        <Jasper />
        <Thiveyan />
        <Wilson />
      </template>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Jasper from './components/profiles/Jasper.vue'
import Thiveyan from './components/profiles/Thiveyan.vue'
import Wilson from './components/profiles/Wilson.vue'
</script>