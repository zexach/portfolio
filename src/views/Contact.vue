<script setup>
import ContactForm from '../components/ContactForm.vue';
import Button from '../components/Button.vue';

</script>

<template>
    <div id="contact" class="contact">
        <h1 class="section-title">Contact</h1>
        <ContactForm />
        <Button buttonText="Send" />
    </div>
</template>

<style scoped>
    .contact{
        width: 100%;
        min-height: 15rem;
        padding: 3rem 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #02a9db;
        color: #0f0f0f;
    }
    .section-title{
        font-weight: 600;
    }
</style>