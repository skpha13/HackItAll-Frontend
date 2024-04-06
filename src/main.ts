import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { plugin, defaultConfig } from '@formkit/vue'
import config from '../formkit.config'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'

library.add(faMagnifyingGlass, faXmark)

const app = createApp(App)

app.use(router)
app.use(plugin, defaultConfig(config))
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app')
