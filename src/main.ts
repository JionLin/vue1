import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/index.less'
import configUse from './config'
let app: any = createApp(App)
configUse(app)
app.use(store).use(router).mount('#app')
