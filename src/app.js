import { createApp } from 'vue'
import { router } from './router'
import App from './app.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from './store';


const app = createApp(App)
app.use(router);
app.use(ElementPlus)
app.use(store)
app.mount('#app')