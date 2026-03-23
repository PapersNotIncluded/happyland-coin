import { createApp } from 'vue'
import './styles/tailwind.css'
import './styles/fonts.scss'
import App from './App.vue'
import { revealDirective } from '@/shared/directives/reveal'

const app = createApp(App)

app.directive('reveal', revealDirective)

app.mount('#app')
