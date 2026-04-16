import { createApp } from 'vue'
import './styles/tailwind.css'
import './styles/fonts.scss'
import App from './App.vue'
import { revealDirective } from '@/shared/directives/reveal'
import { router } from './router'

const app = createApp(App)

app.directive('reveal', revealDirective)
app.use(router)

app.mount('#app')
