<script setup>
import Navbar from './components/Navbar.vue'
import HomeView from './views/HomeView.vue';
import SkillsView from './views/SkillsView.vue';
import Orizuru from './components/Orizuru.vue';
import Contact from './views/Contact.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <Navbar />
  <Orizuru style="top: 5rem; right: 0;" />
  <HomeView />
  <SkillsView />
  <Contact />
  <Footer />
  <!-- <RouterView /> -->
</template>

<style scoped>

</style>
