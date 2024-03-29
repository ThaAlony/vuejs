import { createApp, defineAsyncComponent } from 'vue';

import App from './App'

import router from './routes'
import store from './store/index'

import BaseCard from './components/UI/BaseCard'
import BaseButton from './components/UI/BaseButton'
import BaseBadge from './components/UI/BaseBadge'
import BaseSpinner from './components/UI/BaseSpinner'
//import BaseDialog from './components/UI/BaseDialog'

 // ASYBNC COMPONENT! cioe? quando mi serve lo carico cosi l'utente non scarica tutta sta roba nel sito
const BaseDialog = defineAsyncComponent(() => import('./components/UI/BaseDialog'));

const app = createApp(App)

app.use(router)
app.use(store)

app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-badge', BaseBadge)
app.component('base-spinner', BaseSpinner)
app.component('base-dialog', BaseDialog)

app.mount('#app');