import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import vClickOutside from "click-outside-vue3"
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";


const app = createApp(App)

app.use(router)
app.use(vClickOutside)
app.use(Toast)

app.mount('#app')
