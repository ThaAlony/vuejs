<template>
  <base-container title="Vuex" v-if="isAuthenticated">
  <!-- <button @click="addOne">Add 2</button> -->
  <button @click="increase({value: 2})">Add 2</button>
  <h3>{{  finalCounter }}</h3> 
  <change-counter></change-counter>
  <favorite-value></favorite-value>
</base-container>
<base-container title="Auth">
<user-auth></user-auth>
</base-container>
 
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue'
import UserAuth from './components/UserAuth.vue'

export default {
  components: {
    BaseContainer,
    ChangeCounter,
    FavoriteValue,
    UserAuth
  },
  computed: {
    /*counter() {
      // return this.$store.state.counter // <$store variabile GLOBALE che fa riferimento allo store
      //return this.$store.getters.finalCounter // usa il getter
     
    }, */
    ...mapGetters(['isAuthenticated']),   // AGGIUNGE I getters!
    ...mapGetters('counter', ['finalCounter']) // aggiunge i getters ma con i moduli che hanno namespaced:true
  },
  methods: {
    // addOne() {              // fratello questo metodo non va bene! deve essere lo store che ti da i metodi per 
                                // modificarlo
    //   this.$store.state.counter++    
    // }
    /*addOne() {                    // ecco come si fa fratmo!!
            // this.$store.commit('increment', { value: 2})   // questo è il modo per i beta
            // this.$store.commit({    // fra questo è il modo per i chaddoni
            //     type: 'increase',
            //     value: 2
            // })
            this.$store.dispatch({   // questa è la stessa cosa ma usa un action anziché un mutation
              type: 'increase',
              value: 2
            })
        }*/
        ...mapActions('counter', ['increase'])   // AGGIUNGE le actionss!!!  
        /*...mapActions({
          inc: 'increase' // puoi fare pure cosi e praticamente l'action increase ora la chiami con il metodo inc
        })*/
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>