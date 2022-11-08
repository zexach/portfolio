<script setup>
  import ProjectCard from '../components/ProjectCard.vue';
  import { ref } from 'vue';
  import { useRouter } from "vue-router";

  const router = useRouter()

  const projects = ref([
    {
      id: 'restCountries',
      image: '../src/assets/img/orizuru.png',
      title: 'REST Countries',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      technologies: ['HTML', 'CSS', 'JS', 'Vue3']
    },
    {
      id: 'rockPaperScissors',
      image: '../src/assets/img/orizuru.png',
      title: 'Rock Paper Scissors',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      technologies: ['HTML', 'CSS', 'JS', 'Vue3']
    },
    {
      id: 'passwordGenerator',
      image: '../src/assets/img/orizuru.png',
      title: 'Password Generator',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      technologies: ['HTML', 'CSS', 'JS', 'Vue3']
    }
  ])


</script>

<template>
  <div id="portfolio" class="portfolio">
    <h1 class="title">Portfolio</h1>
    <div class="portfolio-content">
      <ProjectCard v-for="project in projects" :project="project" />
    </div>
  </div>
</template>

<style scoped>
  .portfolio{
    width: 100%;
    min-height: 100vh;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }
  .title{
    font-weight: 600;
  }
  .portfolio-content{
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5rem;
  }
</style>
