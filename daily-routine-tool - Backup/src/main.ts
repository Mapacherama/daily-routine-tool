import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import { registerPlugins } from './plugins'

const app = createApp(App)
registerPlugins(app)
app.mount('#app')
