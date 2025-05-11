import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vueCookies from 'vue-cookies'
import globalFx from './assets/globalFx'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(ElementPlus).use(router).use(vueCookies).use(globalFx).mount('#app')
