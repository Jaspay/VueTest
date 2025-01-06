<template>
  <nav class="fixed w-full bg-black text-white shadow-lg z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0">
          <span class="text-yellow-400 text-xl font-semibold">Portal Onboarding Project</span>
        </div>
        
        <div class="flex space-x-4">
          <button
            v-for="item in navItems"
            :key="item.id"
            @click="scrollToSection(item.id)"
            class="px-3 py-2 rounded-md text-sm font-medium transition-colors text-yellow-100 hover:text-yellow-400"
          >
            {{ item.name }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      navItems: [
        { id: 'home', name: 'Home' },
        { id: 'jasper', name: 'Jasper' },
        { id: 'thiveyan', name: 'Thiveyan' },
        { id: 'wilson', name: 'Wilson' },
      ]
    }
  },
  methods: {
    scrollToSection(id) {
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
</script>