<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h2>{{  user.age }}</h2>
    <button @click="changeAge">Change Age</button>
    <div>
      <input type="text" placeholder="Nome pazz" @input="setFirstName">
      <input type="text" placeholder="Cognome paz" @input="setLastName">
    </div>
    {{  nomeCompleto }}
    <div>
      <input type="text" placeholder="Nome VMODEL!" v-model="fName">
      <input type="text" placeholder="Cognome VMODEL!!" v-model="lName">
    </div>
    {{  nCompleto }}
    <div>
      <input type="text" placeholder="Er Ref" ref="testInput">
      <button @click="setTest">Set Test</button>
    </div>
    {{  testValue }}
  </section>
</template>

<script>
import {  ref, reactive, computed, watch } from 'vue'

export default {
  setup() {

    const user = reactive({
      name: 'Juan',
      age: 19
    })

    const firstName = ref('')
    const lastName = ref('')

    const fName = ref('')
    const lName = ref('')
    
    const testInput = ref('')
    const testValue = ref('')

    // watchers pazzissimi
    watch([fName, lName], (newValues, oldValues) => {
      console.log('Nome: La vecchia: ' + oldValues[0] + " e la nuova " + 'La nuova: ' + newValues[0])
      console.log('Cognome?!:  La vecchia: ' + oldValues[1] + " e la nuova " + 'La nuova: ' + newValues[1])
    })

    //c- c- c- computed?
    const nomeCompleto = computed(() => {
      return firstName.value + ' ' + lastName.value
    })   // alla fine, computed() ritorna un ref! ma un ref che puoi solo leggere, non modificare

    const nCompleto = computed(() => {
      return fName.value + ' ' + lName.value
    })

    // funzioni varie ( tra cui anchew i methods!)
    function setAge() {
      user.age = 32
    }

    function setFirstName(e) {
      firstName.value = e.target.value
    }

    function setLastName(e) {
      lastName.value = e.target.value
    }

    function setTest() { // come uso i ref? intendo quelli nel template eh non quelli in setup() scemo!
      //testValue.value = this.$refs   /// eh no fra vorrei fosse cosi facile
      testValue.value = testInput.value.value // ecco come si fa! praticamnte il primo value è un pointer all'input tag, il secondo value invece è la value del tag, niente di spaventoso!
    }

    return{
      user: user,
      changeAge: setAge,  // e cosi passiamo i methods!
      setFirstName,
      setLastName,
      nomeCompleto, // e passaci sto computed!
      fName,        // e passiamo ste variabili per i model va!
      lName,
      nCompleto,
      testInput,  // passa sto template ref!
      setTest,
      testValue
    }
  },
  // methods: {   // NO NO NO! questa è la option api! noi stiamo usando la composiion!
  //   bal bla bla
  // },
  // compouted: {   // noooooooooo fra, è sempre options api!
  //   blalbalbla
  // },
  // watch: {  // frate... devi usare la composition.. e questa roba è della option...
  //   bla bla bla bla 
  // }
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