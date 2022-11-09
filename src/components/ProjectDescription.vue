<script setup>
    defineProps(['project'])
</script>

<template>
    <div class="project-description">
        <h3 class="section-name">Description</h3>
        <p class="project-long-description">{{project.desc}}</p>        
    </div>
</template>

<style scoped>
    .project-description{
        height: 19.610rem;
        padding: 2rem 2rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
        border-radius: 0.6rem;
        color: #fff;
    }
    .section-name{
        padding: 0.5rem 1.5rem;
        border-bottom: 0.03rem solid #02a9db;
        font-weight: 600;
    }
    @media screen and (max-width: 1024px) {
        .project-description{
            order: 0;
        }
    }
</style>