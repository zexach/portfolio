<script setup>
defineProps(['buttonText'])
</script>

<template>
    <div class="btn">
        <button>{{buttonText}}</button>
    </div>
</template>

<style scoped>
    .btn{
        min-width: 18rem;
        min-height: 3.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    button{
        width: 17rem;
        height: 3rem;
        border: 0;
        border-radius: 1.875rem;
        background-color: #1b1a1a;
        box-shadow: 1px 1px 11px 2px rgba(2,50,148,0.15);
        color: #02a9db;
        font-size: 1rem;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        transition: 0.3s;
    }
    button:hover{
        width: 18rem;
        height: 3.5rem;
        background-color: #02a9db;
        color: #0f0f0f;
    }
</style>
