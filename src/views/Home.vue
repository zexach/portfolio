<script setup>
import Navbar from '../components/Navbar.vue'
import HomeView from '../pages/HomeView.vue';
import SkillsView from '../pages/SkillsView.vue';
import Portfolio from '../pages/Portfolio.vue';
import Orizuru from '../components/Orizuru.vue';
import Contact from '../pages/Contact.vue';
import Footer from '../components/Footer.vue';

</script>

<template>
  <Navbar />
  <Orizuru style="top: 5rem; right: 0;" />
  <HomeView />
  <SkillsView />
  <Portfolio />
  <Contact />
  <Footer />
</template>

<style scoped>

</style>
