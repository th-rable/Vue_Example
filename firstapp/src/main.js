import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vueCookies from 'vue-cookies'
import globalFx from './assets/globalFx'

createApp(App).use(router).use(vueCookies).use(globalFx).mount('#app')
