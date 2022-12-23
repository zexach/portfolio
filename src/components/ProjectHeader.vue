<script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter()

    defineProps(['project'])
    
    const goBack = () => router.back()

</script>

<template>
    <div class="image-title">
        <img :src="project.image" class="project-image" alt="text">
        <div @click="goBack" class="back-option">
            <svg width="40" height="40" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14"></path>
                <path d="m5 12 4 4"></path>
                <path d="m5 12 4-4"></path>
            </svg>
            <p>Back to portfolio</p>
        </div>
        <div class="project-name">
            <p class="project-wip" v-if="project.workInProgress == 1">Work in progress</p>
            <h3 class="project-title">{{project.title}}</h3>
            <p class="project-short-description">{{project.shortDesc}}</p>
        </div>
    </div>
</template>

<style scoped>
    .image-title{
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .project-image{
        width: 100%;
        height: 23rem;
        object-fit: cover;
        object-position: 100% 90%;
        filter: brightness(40%);
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
    .project-wip{
        min-width: 3.125rem;
        padding: 0.2rem 0.4rem;
        display: flex;
        justify-content: center;
        border-radius: 0.3rem;
        background-color: #02a9db;
        box-shadow: 1px 1px 11px 2px rgba(0, 5, 14, 0.32);
        color: #1b1a1a;
        font-size: 0.75rem;
        font-weight: 600;
    }
    @media screen and (max-width: 1024px) {
        .project-image{
            object-position: 50% 100%;
        }
        .project-name{
            padding: 0 1.5rem;
        }
        .project-title{
            font-size: 2rem;
        }
        .project-short-description{
            text-align: center;
        }
    }
</style>