<script setup>
import Orizuru from '../components/Orizuru.vue';
import { ref } from 'vue'

const showNav = ref(false)

const handleClickOutside = () => {
    if(showNav.value){
        showNav.value = false
    }
}

</script>

<template>
    <div class="navbar">
        <div class="navbar-title">
            <h3 class="title">emir<span class="title surname">zambakovic</span></h3>
        </div>
        <div class="pages">
            <a href="#about" class="page">About</a>
            <a href="#skills" class="page">Skills</a>
            <a href="#portfolio" class="page">Portfolio</a>
        </div>
        <div v-click-outside="handleClickOutside" class="sandwich">
            <svg class="toggle-sandwich" @click="showNav = !showNav" width="39" height="39" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 17h8"></path>
                <path d="M5 12h14"></path>
                <path d="M5 7h8"></path>
            </svg>
            <Transition name="slide">
                <div class="mobile-menu" v-if="showNav">
                    <div class="pages-mob">
                        <a @click="showNav = false"  href="#about" class="page">About</a>
                        <a @click="showNav = false"  href="#skills" class="page">Skills</a>
                        <a @click="showNav = false"  href="#portfolio" class="page">Portfolio</a>
                    </div>
                    <h6 class="name">© 2022 Emir Zambaković</h6>
                </div>
            </Transition>
        </div>
    </div>
</template>

<style scoped>
    .navbar{
        width: 100%;
        padding: 1rem 7rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        background-color: rgb(15, 15, 15, 0.6);
        box-shadow: 0px 5px 29px -6px rgba(0, 197, 241, 0.439);
        position: sticky;
        top: 0;
        z-index: 3;
    }
    .navbar-title{
        display:flex;
        flex-direction:row-reverse;
        gap: 1rem;
    }
    .toggle-sandwich{
        display: none;
    }
    .mobile-menu{
        display: none;
    }
    .title{
        font-weight: 600;
        color: #fff;
    }
    .surname{
        color: #02a9db;
    }
    .pages{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .page{
        margin: 0 1rem;
        transition: 0.2s;
        font-weight: 500;
    }
    .page:hover{
        scale: 1.095;
    }
    .sandwich{
        display: none;
    }
    h3{
        font-size: 1.5rem;
    }
    h5{
        font-size: 1rem;
    }
    @media screen and (min-width: 601px) and (max-width: 1024px){
        .navbar{
            padding: 1rem 3rem;
        }
    }
    @media screen and (max-width: 600px) {
        .navbar{
            padding: 1rem 1.5rem;
            justify-content: space-between;
            gap: 0.625rem;
        }
        .toggle-sandwich{
            display:block;
        }
        .pages{
            display: none;
        }
        .pages-mob{
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }
        .page{
            color: #0f0f0f;
            font-size: 1.125rem;
            font-weight: 500;
            border-bottom: 0.05rem solid #0f0f0f69;
        }
        .title{
            font-size: 1.125rem;
        }
        .mobile-menu{
            width: 13.25rem;
            height: 25rem;
            padding: 1.5rem 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background-color: #02a9db;
            color: #0f0f0f;
            box-shadow: 0px 5px 29px -6px rgba(0, 197, 241, 0.441);
            position: absolute;
            top: 3.5rem;
            right: -1.5rem;
            z-index: 2;
        }
        .sandwich{
            display: block;
        }
        .name{
            padding: 0 1.5rem;
            font-weight: 600;
        }
        .slide-enter-active {
            transition: all 0.3s;
        }

        .slide-leave-active {
            transition: all 0.3s linear;
        }

        .slide-enter-from,
        .slide-leave-to {
            transform: translateX(13.25rem);
            opacity: 1;
        }
    }
</style>
