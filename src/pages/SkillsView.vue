<script setup>
  import Skill from '../components/Skill.vue'
  import useSkills from '../assets/skills/skills.json'

  const skills = useSkills

</script>

<template>
  <div id="skills" class="skills">
    <div class="skills-content">
      <h1 class="title">Skills</h1>
      <div class="skills-item">
        <Skill v-for="(skill, index) in skills" :key="index" :skill="skill.skillName" :icon="skill.icon" />
      </div>  
    </div>
  </div>
</template>

<style scoped>
  .skills{
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .skills-content{
    width: 100%;
    padding: 5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }
  .title{
    font-weight: 600;
  }
  .skills-item{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    z-index: 1;
  }
  @media screen and (max-width: 1024px) {
    .skills-item{
      display: grid;
      grid-template-columns: auto auto;
    }  
  }
</style>
