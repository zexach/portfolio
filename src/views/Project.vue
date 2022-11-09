<script setup>
    import ProjectInfo from '../components/ProjectInfo.vue'
    import { useRoute, useRouter } from 'vue-router';
    import useProjects from '../assets/projects/projects.json'

    const router = useRouter()
    const route = useRoute()
    const projects = useProjects

    const project = projects.find((project) => project.id === route.params.name)

    const goBack = () => router.back()

</script>

<template>
    <div class="project">
        <div class="image-title">
            <img :src="project.image" class="project-image">
            <div @click="goBack" class="back-option">
                <svg width="40" height="40" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12h14"></path>
                    <path d="m5 12 4 4"></path>
                    <path d="m5 12 4-4"></path>
                </svg>
                <p>Back to portfolio</p>
            </div>
            <div class="project-name">
                <h3 class="project-title">{{project.title}}</h3>
                <p class="project-description">{{project.desc}}</p>
            </div>
        </div>
        <div class="project-content">
            <div class="project-info">
                <ProjectInfo title="Github" :link="project.github" />
                <ProjectInfo title="Demo" :link="project.demo" />
            </div>

        </div>
    </div>
</template>

<style scoped>
    .project{
        width: 100%;
        min-height: 100vh;
    }
    .project-image{
        width: 100%;
        height: 23rem;
        object-fit: cover;
        filter: brightness(40%);
    }
    .image-title{
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .back-option{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        top: 5%;
        left: 2%;
        position: absolute;
        color: white;
        cursor: pointer;
    }
    .project-name{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        bottom: 10%;
        color: white;
    }
    .project-title{
        font-size: 3rem;
        font-weight: 700;
    }
    .project-content{
        display: flex;
        flex-direction: row;
    }
    .project-info{
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>