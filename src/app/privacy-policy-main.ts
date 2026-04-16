import { createApp } from 'vue'
import './styles/tailwind.css'
import './styles/fonts.scss'
import { revealDirective } from '@/shared/directives/reveal'
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage.vue'

const app = createApp(PrivacyPolicyPage)

app.directive('reveal', revealDirective)

app.mount('#app')
