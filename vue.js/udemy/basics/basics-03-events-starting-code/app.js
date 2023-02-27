const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      nome: '',
      nomeConfermato: '',
      nomeCompleto: '' // usiamo un watcher
    };
  },
  watch: {
    nomeConfermato(value) {  // STESSO nome dlla variabile ( quindi quando nomeConfermato cambia questa funzione viene usata)
      this.nomeCompleto = value + ' ' + "Er COGNOME" // value = la nuova value della variabile nomeConfermato
    }, // però gli watchers è meglio non usarli per queste cose perché sono veramente enormi da programmare
    counter(v) {   // Questo è un esempio di watcher utile 
      if (v > 50) {
        this.counter = 0
      }
    }
  },
  computed: {   // praticamente qua i metodi sono quasi la stessa cosa di data solo che sono funzioni anziche variabili
    fullname() { // praticamente VUE con i computed sa quello che usiamo dentro le funzoini ( in questo caso usiamo this.nome) e quindi lo usa solo se serve ( in questo caso solo se cambia this.nome)
      if (this.nomeConfermato == '') return ''
      return this.nomeConfermato+ " " + "Cognome pazzo"
    }
  },
  methods: {
    add(n) {
      this.counter = this.counter+n
    },
    remove(n) {
      this.counter = this.counter-n
    },
    setName(event) {    // DEFAULT EVENT che viene mandato ad OGNI evento grazie a JavaScript
      this.nome = event.target.value
    },
    submitForm() {
      alert('Yoo')
    },
    confirmName() {
      this.nomeConfermato = this.nome
    },
    reset() {
      this.nome = ''
    },
    outputFullname() {
      if (this.nomeConfermato == '') return ''
      return this.nomeConfermato+ " " + "Cognome pazzo"
    }
  }
});

app.mount('#events');
