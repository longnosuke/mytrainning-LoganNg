import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router/index.ts'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import i18n from '@/plugins/i18n.ts'

createApp(App).use(router).use(i18n).mount('#app')
