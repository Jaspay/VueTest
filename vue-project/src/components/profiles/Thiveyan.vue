<template>
  <section id="thiveyan" class="min-h-screen flex items-center justify-center bg-orange-50 p-8">
    <div class="max-w-3xl text-left flex items-center space-x-8">
      <img src="@/assets/Thiveyan.jpeg" alt="Profile Picture" class="profile-picture">
      <div>
        <h2 class="text-3xl font-bold text-black mb-4">Thiveyan</h2>
        <p class="text-lg text-gray-800 mb-6">
        Hi, This is Thiveyan. I am a third-year student at the University of Waterloo, majoring in Stats with a CS minor. I am passionate about exploring new technologies and enjoy spending my free time playing chess and badminton.
      </p>
      <div class="flex space-x-4">
        <a href="https://github.com/Thiveyan" target="_blank" class="text-gray-800 hover:text-black">
          <i class="fab fa-github text-2xl"></i>
        </a>
        <a href="https://www.linkedin.com/in/Thiveyan" target="_blank" class="text-gray-800 hover:text-black">
          <i class="fab fa-linkedin text-2xl"></i>
        </a>
        <a href="mailto:tjegasot@uwaterloo.ca" class="text-gray-800 hover:text-black">
          <i class="fas fa-envelope text-2xl"></i>
        </a>
      </div>
    </div>
  </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

a:hover i {
  color: #ff4500; 
}
.profile-picture {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.profile-picture:hover {
  transform: scale(1.1);
}

</style>
