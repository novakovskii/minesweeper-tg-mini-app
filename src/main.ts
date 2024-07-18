import { createApp } from 'vue'
import './scss/colors.scss'
import './scss/typography.scss'
import './scss/reset.scss'
import './fonts/CabinetGrotesk/stylesheet.css'
import './fonts/Inter/stylesheet.css'
import router from './router'
import App from './App.vue'

const app = createApp(App)

app.use(router)
app.mount('#app')
