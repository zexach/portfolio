<script setup>

</script>

<template>
    <div class="contact-form">
        <div class="left-side">
            <div class="input">
                <label for="full-name">Full name</label>
                <input class="full-name" type="text" size="40">
            </div>
            <div class="input">
                <label for="email">Email</label>
                <input class="email" type="email" size="40">
            </div>
        </div>
        <div class="right-side">
            <div class="input-textarea">
                <label class="textarea-label">Your message</label>
                <textarea rows="5" cols="40"></textarea>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .contact-form{
        padding: 2rem 0;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        gap: 4rem;
    }
    .left-side,.right-side{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .right-side{
        align-self: flex-start;
    }
    label{
        font-size: 0.898rem;
    }
    .full-name, .email, textarea{
        font-size: 0.900rem;
        font-family: 'Montserrat', sans-serif;
    }
    .input, .input-textarea{
        display: flex;
        flex-direction: column;
    }
    .input-textarea{
        gap: 0.3rem;
    }
    input{
        background-color: #02a9db;
        color: #0f0f0f;
        border: 0;
        border-bottom: 0.063rem solid #0f0f0f;
    }
    ::placeholder{
        color: #0f0f0f;
        opacity: 0.7;
    }
    textarea,input:focus{
        outline: none;
    }
    textarea{
        padding: 0.53rem;
        border: 0.063rem solid #ffffff;
        border-radius: 0.3rem;
        background-color: #ffffff;
        line-height: 1.3;
        resize: none;
    }
    @media screen and (max-width: 600px) {
        .contact-form{
            flex-direction: column;
        }
    }
</style>