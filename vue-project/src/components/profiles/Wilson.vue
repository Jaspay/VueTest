<template>
  <section id="wilson" class="min-h-screen flex items-center justify-center p-12 bg-wilson-gradient">
    <div class="space-y-10 text-center">
      <!-- Main Introduction -->
      <div ref="mainIntroRef" class="section">
        <h1 class="text-white text-5xl font-semibold text-left">
          Wilson Chen
        </h1>
        <p class="text-white text-xl mt-4 max-w-2xl text-left">
          Engineer building at the intersection of fullstack development and AI. Studying Software Engineering at the University of Waterloo. Looking forward to collaborating with the Portal team.
        </p>
      </div>

      <!-- Social Links -->
      <div ref="socialLinksRef" class="section">
        <div class="flex gap-6">
          <a href="https://www.linkedin.com/in/wilson-chen-/" target="_blank" 
             class="text-white/80 hover:text-white transition-colors">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </a>
          <a href="https://github.com/zyrephus" target="_blank"
             class="text-white/80 hover:text-white transition-colors">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"></path>
            </svg>
          </a>
          <a href="https://x.com/_wilsonchenn" target="_blank"
             class="text-white/80 hover:text-white transition-colors">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
          </a>
          <a href="https://wilsonchenn.com" target="_blank"
             class="text-white/80 hover:text-white transition-colors">
            <UserCircleIcon class="w-6 h-6" />
          </a>
          <a href="mailto:wilsonchen315@gmail.com"
             class="text-white/80 hover:text-white transition-colors">
            <EnvelopeIcon class="w-6 h-6" />
          </a>
        </div>
      </div>

      <!-- Languages -->
      <div ref="languagesRef" class="section flex flex-wrap gap-2 max-w-2xl">
        <h2 class="text-white text-xl mb-2">Languages</h2>
        <div class="flex flex-wrap gap-2 max-w-2xl">
          <span v-for="language in languages" :key="language" class="px-3 py-1 bg-white/10 text-white/90 rounded-full text-sm hover:bg-white/25 transition-colors" style="user-select: none;">
            {{ language }}
          </span>
        </div>
      </div>

      <!-- Technologies -->
      <div ref="technologiesRef" class="section flex flex-wrap gap-2 max-w-2xl">
        <h2 class="text-white text-xl mb-2">Technologies</h2>
        <div class="flex flex-wrap gap-2 max-w-2xl">
          <span v-for="technology in technologies" :key="technology" class="px-3 py-1 bg-white/10 text-white/90 rounded-full text-sm hover:bg-white/25 transition-colors" style="user-select: none;">
            {{ technology }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  UserCircleIcon, 
  EnvelopeIcon 
} from '@heroicons/vue/24/outline'
import { ref, onMounted } from 'vue';

const languages = [
  'Python', 
  'TypeScript', 
  'JavaScript', 
  'C', 
  'C++',
  'Scala',
  'Swift',
  'HTML',
  'CSS',
];

const technologies = [
  'Git',
  'React',
  'Next.js',
  'Vue',
  'Node.js',
  'Express',
  'MongoDB',
  'pandas',
  'NumPy',
  'PyTorch',
  'TensorFlow',
  'OpenCV',
];

// Create refs for each section
const mainIntroRef = ref(null);
const socialLinksRef = ref(null);
const languagesRef = ref(null);
const technologiesRef = ref(null);

// Function to handle intersection
const handleIntersection = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Add visible class
    }
  });
};

// Set up observer
onMounted(() => {
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.9 // Trigger when 90% of the section is visible
  });

  // Observe each section
  if (mainIntroRef.value) observer.observe(mainIntroRef.value);
  if (socialLinksRef.value) observer.observe(socialLinksRef.value);
  if (languagesRef.value) observer.observe(languagesRef.value);
  if (technologiesRef.value) observer.observe(technologiesRef.value);
});
</script>

<style scoped>
.section {
  opacity: 0; /* Start hidden */
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease; /* Transition for opacity and transform */
}

.section.visible {
  opacity: 1; /* Fully visible */
  transform: translateY(0);
}
</style>