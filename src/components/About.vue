<script setup>
import useAbout from '../assets/about/about.json'

const about = useAbout;
</script>

<template>
    <div class="about">
        <h3 class="role">{{ about.role }}</h3>
        <h1 class="fullname">{{ about.fullName }}</h1>
        <p class="description">{{ about.description }}</p>
    </div>
</template>

<style scoped>
    .fullname{
        font-weight: 700;
    }
    .description{
        justify-self: center;
        color: #fff;
    }
    @media screen and (min-width: 601px) and (max-width: 1024px){
        .about{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .description{
            text-align: center;
        }
    }
    @media screen and (max-width: 600px) {
        .about{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .description{
            text-align: center;
        }
    }
</style>
