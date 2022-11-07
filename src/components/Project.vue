<script setup>

defineProps(['project'])

</script>

<template>
    <div class="project">
        <img :src="project.image" class="project-img">
        <h3 class="project-title">{{project.title}}</h3>
        <p class="project-description">{{project.desc}}</p>
        <p v-for="technology in project.technologies" class="technologies">{{technology}}</p>
    </div>
</template>

<style scoped>
    .project{
        width: 20rem;
        height: 30rem;
        border-radius: .425rem;
        background-color: #1b1a1a;
        box-shadow: 1px 1px 11px 2px rgba(2,50,148,0.12);
        color: #02a9db;
    }
    .project-img{
        width: 20rem;
        border-radius: .425rem .425rem 0 0;
    }
</style>