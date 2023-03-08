<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    {{ age }}
    <p>{{  user.Name }} {{  user.age }}</p>
    <p>{{  u.Name }} {{  u.age }}</p>
  </section>
</template>

<script>
import { ref, reactive, isReactive, isRef, toRefs} from 'vue'  // sempre per usare la compostion api

export default {
  // data() {            OPTIONS API! fino ad ora abbiamo usato questo tipo di pattern senza saperlo!
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },

  // COMPOSITION API!?? si! non è obbligatorio anzi è completamente opzionale ma il bro ha detto che saperlo potrebbe essere utile
  // la composition api cambia: data, methods, computed, watch E i lifecycle hook, il resto è uguale
  setup() { // ah tralalto qua non puoi scrivere this. percé il componenete ancora non esiste quindi no sense usare this
    const Name = ref('Juan'); // ref() = crea una reactive value! assurda! vue gestisce come cambia e cosa è e come la usa nel template cioe è proprio pazza è dinamica AF
    //const age = ref(19)    // EFFETTIVAMENTE... perché creare due ref? sono entrambi attributi di un utente no?
    const user = ref({
      Name: 'Juan',
      age: 19
    })

    const u = reactive({  // pero fra... è meglio usare reactive anziché ref per gli oggetti, mo ti faccio vedere perché..
      Name: 'Juan',
      age: 19
    })

    setTimeout(() => {
      // Name = 'Juan ca chitarr' // NO FRA CHE CZZO FAI?! NON SIFA COSI!
      //Name.value = 'Juan ca chitarr' // ECCOMO COME SI FA!
      user.value.Name = 'Juan ca chitarr' // eee... non va. però è giusto! il problema è nel return!
    }, 2000)

    setTimeout(() => {
      u.Name = 'Juan ca chitarr frat cos cos' // vedi? è più semplice con reactive, non devi mettere .value
    }, 2000)


    console.log(isRef(Name.value))        // ecco come capire se le robe sono reattive
    console.log(isReactive(user.value.name))    // in questo caso entrabi danno falso perché sono .value! quindi non reattivi!

    const userRef = toRefs(u) // transformato i .value in ref!

    console.log(isRef(userRef.Name)) // infatti questo da true! LES GOOO!


    // inoltre le variabili qua non sono disponibili nel template! a meno che non fai...
    return { // ...questo! se ci pensi anche data() aveva il return eh
      userName: user.value.Name,  // e cosi lo passiamo al template SIUM
      age: user.value.age,
      user: user, // ECCO come risolvere il problema! perché l'oggetto è reattivo, non i valori all'interno! per cui tocca mandare l'oggetto intero
      u
    } 
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>