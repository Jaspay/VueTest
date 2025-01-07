<template>
  <v-container id="home" class="min-h-screen d-flex align-center justify-center relative overflow-hidden pa-8" fluid>
    <!-- Decorative Blurs -->
    <div class="absolute w-[85vw] h-[40vw] min-w-[300px] min-h-[300px] -top-[10vh] -left-[15vw] rounded-full bg-[rgba(255,200,0,0.15)] blur-[120px] z-0"></div>
    
    <div class="absolute w-[45vw] h-[45vw] min-w-[250px] min-h-[250px] top-[40vh] -right-[10vw] rounded-full bg-[rgba(255,180,0,0.2)] blur-[90px] z-0"></div>
    
    <div class="absolute w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] top-[20vh] left-[20vw] rounded-full bg-[rgba(255,160,0,0.1)] blur-[70px] z-0"></div>

    <div class="max-w-3xl text-center relative z-10">
      <h1 class="text-4xl font-bold text-black mb-6">Welcome to our onboarding project.</h1>
      <p class="text-xl text-gray-800">
        We're excited to introduce ourselves to the team.
      </p>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'Hero'
})
</script>