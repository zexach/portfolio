<script setup>

</script>

<template>
    <div class="about">
        <h3 class="role">Frontend developer</h3>
        <h1 class="fullname">Emir ZambakoviÄ‡</h1>
        <p class="description">Software engineering student currently studying at the Polytechnic Faculty of the University of Zenica. Enthusiastic and motivated person who has a strong will to learn and improve. Interested in front-end development and design.</p>
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
