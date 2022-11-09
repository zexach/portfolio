<script setup>
    defineProps(['title', 'link'])
</script>

<template>
    <div class="project-info">
        <h3 class="info-title">{{title}}</h3>
        <a :href="link" target="_blank">{{link}}</a>
    </div>
</template>

<style scoped>
    .project-info{
        width: 25rem;
        padding: 2rem 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        gap: 1rem;
        border-radius: 0.6rem;
        background-color: #1b1a1a;
        color: #fff;
        box-shadow: 1px 1px 11px 2px rgba(0, 0, 0, 0.12);
    }
    .info-title{
        padding: 0.5rem 1.5rem;
        border-bottom: 0.03rem solid #02a9db;
        font-weight: 600;
    }
    a{
        color: #fff;
    }
    @media screen and (max-width: 600px) {
        .project-info{
            width: 100%;
        }
    }
</style>