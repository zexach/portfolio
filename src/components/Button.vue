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
        border: 0.125rem solid #f60085;
        border-radius: 1.875rem;
        background-color: #211E22;
        color: #f60085;
        font-size: 1rem;
        transition: 0.3s;
    }
    button:hover{
        width: 18rem;
        height: 3.5rem;
        background-color: #f60085;
        color: #211E22;
    }
</style>
