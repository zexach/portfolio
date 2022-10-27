<script setup>
import Image from '../components/Image.vue'
import About from '../components/About.vue'
import Button from '../components/Button.vue'
import Linea from '../components/Linea.vue'

</script>

<template>
  <div class="home">
    <div class="content">
      <Linea />
      <Image />
      <div class="home-content">
        <About />
        <div class="home-buttons">
          <Button buttonText="Download CV" />
          <Button buttonText="Contact me" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .home{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }
  .home-content{
    width: 50%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 1rem;
  }
  .home-buttons{
    min-height: 3.5rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 3rem;
  }
</style>
