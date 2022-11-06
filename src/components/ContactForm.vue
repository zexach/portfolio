<script setup>
    import emailjs from 'emailjs-com';
    import { ref } from 'vue';
    import { useToast } from "vue-toastification";

    const toast = useToast();

    const form = ref({
        fullName: '',
        email: '',
        message: ''
    })

    const handleSendMail = () => {
        emailjs.send("service_tpgwqtt","template_1tayn0d",{
            to_name: "emir.zambakovic7@gmail.com",
            from_name: form.value.email,
            message: form.value.message,
        }, 'eyjHM7vPS1VsYrbD4')
        .then(() => {
            toast.success('Message sent successfully')
            form.value.fullName = ''
            form.value.email = ''
            form.value.message = ''
        }, (error) => {
            toast.error('Oops! Something went wrong, please try again later.')
        }); 
    }

    const show = () => {
        console.log(form.value)
    }
/*
    const formData = new FormData();
    formData.append('service_id', 'service_tpgwqtt');
    formData.append('template_id', 'template_1tayn0d');
    formData.append('user_id', 'eyjHM7vPS1VsYrbD4');

    const handleSendMail = async() => {
        const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', 
        formData,
        {
            Headers:{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        }
        )
        console.log(response)
    }
*/
</script>

<template>
    <div class="contact-form">
        <form @submit.prevent="handleSendMail" class="contact-form">
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
            <input class="submit" type="submit" name="send" />
        </form>
    <button @click="show">abc</button>    
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