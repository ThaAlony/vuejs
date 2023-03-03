import { createApp } from 'vue';
//import { createStore } from 'vuex'

import App from './App.vue';

import store from './store/index'


/* BELLISSIMO MA... troppo codice! splittiamolo! ( store folder )
const counterModule = {   // modulo SOLO per counter! cosi abbiamo spezzato il codice che era shigante
    namespaced: true, // che cazo fa? praticamente tutta sta roba è apparte dallo store di base ( quello più giu )
                        // perché? perché ci potrebbero essere problemi di nomi o altre cose in ogni caso è
                        // per evitare problemini
    state() {
        return {
            counter: 0,
        }
    },
    mutations: {
        increment(state) {
            state.counter++
        },
        increase(state, payload) {  // ua fra il payload.. c re? bo tipo un parametro di qualsiasi tipo
            state.counter = state.counter + payload.value           // in questo caso è un oggetto con .value
        },
    },
    actions:{
        increment(context) {  // servono per poter far cose asincrone ( che è meglipo non fare nei mutations)
            setTimeout(() => {
                context.commit('increment')
            }, 2000)
        },
        increase(context, payload) {  
            if(payload == 0) return  // TIE ci fa pure un controllo
            context.commit('increase', payload)
        },
    },
    getters: {
       // testauth(state, getters, rootState, rootGetters) {
                                    // sti parametri sono l'unico modo per prendere le cose dagli altri moduli
                                    // anche se di solito non usi le robe di altri moduli 
        //},
        finalCounter(state) {  
            return state.counter * 2
},
normalizedCounter(_, getters) {   // i getters prendono getters come parametro?? si.
 const finaleCounter = getters.finalCounter
 if(finaleCounter < 0) return 0 
  if(finaleCounter > 100) return 100 
  return finaleCounter
},
    }
}

const store = createStore({
    modules: {
        counter: counterModule  // counter = namespace!
    },
    state() {               // data!
        return {
            
            isLogged: false
        }
    },
    mutations: {            // metodi per gestire il data!
      
        setAuth(state, payload) {
            state.isLogged = payload.isLogged
        }
    },
    actions: {
       
        login(context) {
            context.commit('setAuth', {isLogged: true})
        },
        logout(context) {
            context.commit('setAuth', {isLogged: false})
        }
    },
    getters: {  // metodi per pigliare il data!
       
        isAuthenticated(state) {
            console.log(state.isLogged)
            return state.isLogged
        }
    }
});
*/

const app = createApp(App);

app.use(store);

app.mount('#app');
