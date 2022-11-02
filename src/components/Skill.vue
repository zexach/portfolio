<script setup>
    defineProps(['skill', "icon"])
</script>

<template>
    <div class="skill">
        <div class="skill-content">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="50" height="50"
                viewBox="0 0 128 128"
                style=" fill:#02a9db;">
                <path :d="icon">
                </path>
            </svg>
            <h3 class="skill-title">{{skill}}</h3>
        </div>
    </div>
</template>

<style scoped>
    .skill{
        width: 19rem;
        height: 11.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .skill-content{
        width: 17.5rem;
        height: 10rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        border: 0;
        border-radius: .425rem;
        background-color: #1b1a1a;
        box-shadow: 1px 1px 11px 2px rgba(2,50,148,0.12);
        color: #02a9db;
        transition: 0.3s;
        cursor: pointer;
    }
    .skill-title{
        font-weight: 600;
    }
    .skill-content:hover{
        transform: scale(1.12)
    }
</style>
