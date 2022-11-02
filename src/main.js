import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import vClickOutside from "click-outside-vue3"

const app = createApp(App)

app.use(router)
app.use(vClickOutside)

app.mount('#app')
