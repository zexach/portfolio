<script setup>

</script>

<template>
    <div class="image">
        <img src="../assets/img/1664210835408.webp" width="416" alt="emir">
    </div>
</template>

<style scoped>
    .image{
        display: flex;
        justify-content: center;
    }
    img{
        border: 0.583rem solid #02a9db;
        box-shadow: 1px 1px 11px 2px rgba(12, 12, 12, 0.35);
        border-radius: 12rem;
        transition: 0.3s;
        box-shadow: 0px 0px 55px 2px rgba(2,50,148,0.52);
    }
    @media screen and (max-width: 600px) {
        img{
            width: 20rem;
        }
    }
</style>
