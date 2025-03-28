import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import { routes } from './router/index'
import { createRouter, createWebHashHistory } from 'vue-router'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button';
import Aura from '@primeuix/themes/aura';

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)
app.component('Dialog', Dialog)
app.component('Button', Button)
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.my-app-dark',
    }
  }
})
app.mount('#app')
