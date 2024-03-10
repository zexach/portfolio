<script setup>
import Image from '../components/Image.vue'
import About from '../components/About.vue'
import Button from '../components/Button.vue'

</script>

<template>
  <div id="about" class="home">
    <div class="content">
      <Image />
      <div class="home-content">
        <About />
        <div class="home-buttons">
          <a href="https://drive.google.com/uc?export=download&id=16DH4-HfOR4w4Pyksj-drKdTXohZWOlG8" download="EmirZambakovic.pdf">
            <Button buttonText="Download CV" />
          </a>
          <a href="#contact">
            <Button buttonText="Contact me" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .home{
    width: 100%;
    height: calc(100vh - 10vh);
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
    z-index: 1;
    position: relative;
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
    gap: 1rem;
  }

  @media screen and (min-width: 601px) and (max-width: 1024px){
    .content{
      flex-direction: column;
    }
    .home-buttons{
      flex-direction: column;
      gap: 1.5rem;
    }
  }

  @media screen and (max-width: 600px) {
    .home{
    min-height: 0;
    padding: 1.5rem;
  }
  .content{
    flex-direction: column;
  }
  
  .home-content{
    width: 100%;
    justify-content: center;
    gap: 2rem;
  }
  .home-buttons{
    justify-content: center;
    gap: 1rem;
  }
  }
</style>
