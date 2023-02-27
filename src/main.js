import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
// include primevue css
// import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/themes/bootstrap4-dark-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
// include primeflex
import 'primeflex/primeflex.css'
// include primevue components
import Divider from 'primevue/divider'
import Splitter from 'primevue/splitter'
import SplitterPanel from 'primevue/splitterpanel'
import Chart from 'primevue/chart'

const app = createApp(App)
app.component('Divider', Divider)
app.component('Splitter', Splitter)
app.component('SplitterPanel', SplitterPanel)
app.component('Chart', Chart)

// include socket
import { io } from 'socket.io-client'
const socket = io('http://localhost:3000')

app.mount('#app')
