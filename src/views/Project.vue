<script setup>
    import { useRoute } from 'vue-router';
    import useProjects from '../assets/projects/projects.json'

    const route = useRoute()
    const projects = useProjects

    const project = projects.find((project) => project.id === route.params.name)

</script>

<template>
    <div class="project">
        <p>{{project.title}}</p>
    </div>
</template>

<style scoped>
    .project{
        width: 100%;
        min-height: 100vh;
    }
</style>