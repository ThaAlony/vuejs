<template>
  <button @click="cliccato">er buttonz</button>
  <button @click="save">Salva!</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  data() {
    return {
      isSaved: false
    }
  },
  components: {
    UserItem,
  },
  inject: ['users'],
  methods: {
    save() {
      this.isSaved = true
    },
    cliccato() {
      // robe pazze
      this.$router.push('./teams')   // per cambiare rout quando sei vabbe hai cpaito
      this.$router.back()       //per andare dietro
      this.$router.forward()  // per andare avnati
    }
  },
  beforeRouteEnter(to, from, next) { // VABBE L'ENNESIMA FUNZIONE CHE VIENE ESEGUITA PRIMA DI ENTRARE IN QUESTA ROUTE
    next() // PATENTE E LIBRETTO! ok apposto vai
  },
  beforeRouteLeave(_, _2, next) {  // fratello, prima che lasci questa route, lasciami eseguire questo ultimo pezzo di codice
                // cosa sono questi trattini?!! praticamente dice che ci sono altri 2 parametri in questa funzione,
                // ma non me ne frega un cazzo perché non li uso BELLA
          // in questo caso sto BeforeLeave lo uso per evitare che per sbaglio questo lascia la pagina senza salvare
          // cioe sta roba è utilisisma quante volte per sbaglio ho resettato degli input su quei siti di merda
          // dove devi mettere la carta didentità etc
    if (this.isSaved) return next()
    const choice = confirm('FRATELLO non hai salvato sei sicuro???!!!') // il risultato è boolean
    next(choice)
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>