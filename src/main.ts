import { createApp } from 'vue'
// import './style.css'
import './assets/css/global.scss'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router'
import { createPinia } from 'pinia'
import PiniaPluginPersistedState from 'pinia-plugin-persistedstate'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component)
}
app.use(createPinia().use(PiniaPluginPersistedState))
app.use(router)
app.mount('#app')
