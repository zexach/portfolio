<script setup>

</script>

<template>
    <div class="image">
        <img src="../assets/img/1664210835408.jpg" alt="">
    </div>
</template>

<style scoped>
    .image{
        display: flex;
        justify-content: center;
    }
    img{
        width: 26rem;
        border: 0.583rem solid #02a9db;
        box-shadow: 1px 1px 11px 2px rgba(12, 12, 12, 0.35);
        border-radius: 12rem;
    }
    @media screen and (max-width: 600px) {
        img{
            width: 20rem;
        }
    }
</style>
