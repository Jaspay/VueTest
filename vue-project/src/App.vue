<template>
  <div class="app">
    <nav class="sidebar">
      <ul class="nav-items">
        <li 
          v-for="item in menuItems" 
          :key="item.id"
          @click="currentSection = item.id"
          :class="{ active: currentSection === item.id }"
        >
          {{ item.name }}
        </li>
      </ul>
    </nav>

    <div class="content">
      <div v-if="currentSection === 'jasper'" class="section">
        <h2>About Jasper</h2>
        <p>Hi, I'm Jasper! I just finished my second year of computer engineering at the University of Waterloo.
            In my spare time, I enjoy learning new technology, playing basketball, and video games.
        </p>
    </div>
    <div v-if="currentSection === 'home'" class="section">
      <h1>This site will introduce the 3 co-op students</h1>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      currentSection: 'home',
      menuItems: [
        { id: 'home', name: 'Home'},
        { id: 'jasper', name: 'Jasper' },
      ]
    }
  }
}
</script>

<style>
.app {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 250px;
  background: #2c3e50;
  color: white;
  padding: 2rem 0;
}

.nav-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-items li {
  padding: 1rem 2rem;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 1.1rem;
}

.nav-items li:hover {
  background-color: #34495e;
}

.nav-items li.active {
  background-color: #3498db;
}

.content {
  flex: 1;
  padding: 2rem;
}

.section {
  max-width: 100%;
  margin: 0 auto;
}

.section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}
</style>