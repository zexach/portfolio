<script setup>

defineProps(['project'])

</script>

<template>
    <div class="project">
        <img :src="project.image" class="project-img">
        <h2 class="project-title">{{project.title}}</h2>
        <p class="project-description">{{project.desc}}</p>
        <div class="project-technologies">
            <p v-for="technology in project.technologies" class="project-technology">{{technology}}</p>
        </div>
    </div>
</template>

<style scoped>
    .project{
        width: 20rem;
        min-height: 30rem;
        padding: 0 1.5rem 1.5rem 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        border-radius: .425rem;
        background-color: #1b1a1a;
        box-shadow: 1px 1px 11px 2px rgba(2,50,148,0.12);
        color: #02a9db;
        cursor: pointer;
        transition: 0.3s;
    }
    .project:hover{
        scale: 1.02;
    }
    .project-img{
        width: 20rem;
        height: 13rem;
        border-radius: .425rem .425rem 0 0;
        object-fit: cover;
        filter: brightness(90%);
    }
    .project-title{
        font-weight: 600;
    }
    .project-description{
        color: #fff;
        font-size: 0.875rem;
    }
    .project-technologies{
        display: flex;
        flex-direction: row;
        align-self: flex-start;
        flex-wrap: wrap;
        gap: 1rem;
    }
    .project-technology{
        min-width: 3.125rem;
        padding: 0.2rem;
        display: flex;
        justify-content: center;
        border-radius: 0.3rem;
        background-color: #02a9db;
        box-shadow: 1px 1px 11px 2px rgba(0, 5, 14, 0.32);
        color: #1b1a1a;
        font-size: 0.75rem;
        font-weight: 600;
    }
</style>