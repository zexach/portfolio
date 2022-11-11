<script setup>
  import ProjectCard from '../components/ProjectCard.vue';
  import useProjects from '../assets/projects/projects.json'

  const projects = useProjects

</script>

<template>
  <div id="portfolio" class="portfolio">
    <h1 class="title">Portfolio</h1>
    <div class="portfolio-content">
    <template v-for="project in projects">
      <router-link :to="{name: 'Project', params: {name: project.id}}">
        <ProjectCard :project="project" />
      </router-link>
    </template>
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
