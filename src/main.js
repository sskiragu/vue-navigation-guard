import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Vuetify
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})


createApp(App).use(store).use(router).use(vuetify).mount('#app')
