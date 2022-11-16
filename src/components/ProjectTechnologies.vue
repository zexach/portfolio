<script setup>
    defineProps(['project'])
</script>

<template>
    <div class="project-technologies">
        <h3 class="section-name">Technologies</h3>
        <p v-for="technology in project.technologies" class="project-technology">{{technology}}</p>
    </div>
</template>

<style scoped>
    .project-technologies{
        width: 17rem;
        height: 21.11rem;
        padding: 2rem 2rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
        border-radius: 0.6rem;
        background-color: #1b1a1a;
        color: #fff;
        box-shadow: 1px 1px 11px 2px rgba(0, 0, 0, 0.12);
    }
    .section-name{
        padding: 0.5rem 1.5rem;
        border-bottom: 0.03rem solid #02a9db;
        font-weight: 600;
    }
    @media screen and (max-width: 1024px) {
        .project-technologies{
            margin-bottom: 2rem;
            justify-content: center;
            background-color: transparent;
            box-shadow: none;
            order: 1;
        }
    }
</style>