<script setup>
  import Project from '../components/Project.vue';
  import { ref } from 'vue';

  const projects = ref([
    {
      image: '../src/assets/img/1664210835408.jpg',
      title: 'REST Countries',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      technologies: ['HTML', 'CSS', 'JS', 'Vue3']
    }
  ])

</script>

<template>
  <div id="portfolio" class="portfolio">
    <h1 class="title">Portfolio</h1>
    <div class="portfolio-content">
      <Project v-for="project in projects" :project="project" />
    </div>
  </div>
</template>

<style scoped>
  .portfolio{
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }
  .title{
    font-weight: 600;
  }
</style>
