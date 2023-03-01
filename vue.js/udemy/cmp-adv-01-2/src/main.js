import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
import BaseCard from './components/UI/BaseCard'



const app = createApp(App);

  // GLOBAL COMPONENT! cioe li puoi usare OVUNQUE in ogni template holy shit! è utilissimo,
  // per esempio il component qui sotto viene usato in più component diversi quidni averlo global è good
app.component('base-badge', BaseBadge);  // MA c'è una DOWNSIDE! Allo start Vue carica tutti i global component
app.component('base-card', BaseCard)     // ed è un casino di performance quindi se un component non deve essere globale 
                                        // è meglio metterlo locale


app.mount('#app');
