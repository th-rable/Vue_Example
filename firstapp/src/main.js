import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vueCookies from 'vue-cookies'
import globalFx from './assets/globalFx'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(vuetify).use(router).use(vueCookies).use(globalFx).mount('#app')
