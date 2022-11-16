<script setup>
    import ProjectHeader from '../components/ProjectHeader.vue'
    import ProjectInfo from '../components/ProjectInfo.vue'
    import ProjectDescription from '../components/ProjectDescription.vue';
    import ProjectTechnologies from '../components/ProjectTechnologies.vue';
    import { useRoute } from 'vue-router';
    import useProjects from '../assets/projects/projects.json'

    const route = useRoute()
    const projects = useProjects

    const project = projects.find((project) => project.id === route.params.name)

</script>

<template>
    <div class="project">
        <ProjectHeader :project="project" />
        <div class="project-content">
            <div class="project-info">
                <ProjectInfo title="Github" :link="project.github" />
                <ProjectInfo :title="project.workInProgress == 1 ? 'Figma' : 'Demo' " :link="project.workInProgress == 1 ? project.figma : project.demo" />
            </div>
            <ProjectDescription :project="project" />
            <ProjectTechnologies :project="project" />
        </div>
    </div>
</template>

<style scoped>
    .project{
        width: 100%;
        min-height: 100vh;
    }
    .project-content{
        padding: 1.5rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }
    .project-info{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    @media screen and (max-width: 1024px) {
        .project-content{
            flex-direction: column;
            text-align:center
        }
        .project-info{
            order: 2;
        }
    }
</style>