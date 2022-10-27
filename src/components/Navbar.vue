<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <div class="navbar">
        <h3 class="title">Emir Zambaković</h3>
        <div class="pages">
            <RouterLink to="/"><h5 class="page">About</h5></RouterLink>
            <RouterLink to="/skills"><h5 class="page">Skills</h5></RouterLink>
            <h5 class="page">Portfolio</h5>
        </div>
    </div>
</template>

<style scoped>
    .navbar{
        width: 100%;
        padding: 1rem 5rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        background-color: #0F0D10;
        box-shadow: 0px 5px 29px -6px rgba(255,0,194,0.43);
    }
    .pages{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .page{
        margin: 0 1rem;
    }
    h3{
        font-size: 1.5rem;
    }
    h5{
        font-size: 1rem;
    }
</style>
