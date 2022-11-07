<script setup>
    import emailjs from 'emailjs-com';
    import Spinner from './Spinner.vue';
    import { ref } from 'vue';
    import { useToast } from "vue-toastification";

    const toast = useToast();

    const isMailSent = ref(true)

    const form = ref({
        fullName: '',
        email: '',
        message: ''
    })

    const handleSendMail = () => {
        isMailSent.value = false
        emailjs.send("service_tpgwqtt","template_1tayn0d",{
            to_name: form.value.fullName,
            from_name: form.value.email,
            message: form.value.message,
        }, 'eyjHM7vPS1VsYrbD4')
        .then(() => {
            isMailSent.value = true
            toast.success('Message sent successfully')
            form.value.fullName = ''
            form.value.email = ''
            form.value.message = ''
        }, (error) => {
            toast.error('Oops! Something went wrong, please try again later.')
        }); 
    }

</script>

<template>
    <div class="contact-form">
        <form @submit.prevent="handleSendMail" class="form">
            <div class="contact-form">
                <div class="left-side">
                    <div class="input">
                        <label for="full-name">Full name</label>
                        <input class="full-name" type="text" size="35" v-model="form.fullName" required>
                    </div>
                    <div class="input">
                        <label for="email">Email</label>
                        <input class="email" type="email" size="35" v-model="form.email" required>
                    </div>
                </div>
                <div class="right-side">
                    <div class="input-textarea">
                        <label class="textarea-label">Your message</label>
                        <textarea rows="5" cols="35" v-model="form.message" required></textarea>
                    </div>
                </div>
            </div>
            <div class="submit-section">
                <input v-if="isMailSent" class="submit" type="submit" name="send" />
                <Spinner v-if="!isMailSent" />
            </div>
        </form>
    </div>
</template>

<style scoped>
    .form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
    }
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
        background-color: transparent;
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
    .submit-section{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 6.25rem;
    }
    .submit{
        width: 17rem;
        height: 3rem;
        border: 0;
        border-radius: 1.875rem;
        background-color: #1b1a1a;
        box-shadow: 1px 1px 11px 2px rgba(2,50,148,0.15);
        color: #02a9db;
        font-size: 1rem;
        transition: 0.3s;
        cursor: pointer;
    }
    .submit:hover{
        scale: 1.07;
    }
    @media screen and (max-width: 1024px) {
        .contact-form{
            width: 100%;
            padding: 1.5rem;
            flex-direction: column;
            gap: 2rem;
        }
        .right-side{
            align-self: center;
        }
    }
</style>