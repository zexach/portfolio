<script setup>
import Navbar from './components/Navbar.vue'
import HomeView from './views/HomeView.vue';
import SkillsView from './views/SkillsView.vue';
import Orizuru from './components/Orizuru.vue';

</script>

<template>
  <Navbar />
  <Orizuru style="top: 5rem; right: 0;" />
  <HomeView />
  <SkillsView />
  <!-- <RouterView /> -->
</template>

<style scoped>

</style>
