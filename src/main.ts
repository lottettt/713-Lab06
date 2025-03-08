// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app') // CSS selector ให้ไปใช้ id อะไรก็ได้ที่มีชื่อว่า app
