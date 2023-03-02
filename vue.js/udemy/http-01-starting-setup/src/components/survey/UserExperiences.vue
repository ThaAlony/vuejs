<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading</p>
      <div v-else-if="error">
        <h1> {{ error }} </h1>
        <img style="height: 100px;" src="https://s.keepmeme.com/files/en_posts/20201109/what-is-impostor-s-favorite-computer-brand-asus.jpg">
      </div>
      <div v-else-if="!results || results.length < 1">
        <h1> No Data? </h1>
        <img style="height: 100px;" src="https://i.imgflip.com/65939r.jpg?a466008">
      </div>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  //props: ['results'],
  data() {
    return {
      results: [],
      isLoading: false,
      error: null
    }
  },
  methods: {
    loadExperiences() {
      this.isLoading = true
      this.error = null
      //di default le fetch sono GET)
      // returnano una PROMISE ( quindi . then per fare le cose dopo che i dati arrivano)
      fetch('https://vue-http-demo-be565-default-rtdb.europe-west1.firebasedatabase.app/surveys.json').then((res) => {
        if (!res.ok) return  // esempio: response 404 = not okay!
        return res.json() // fa un PARSE automatico!
      }).then((data) => { // dopo aver fatto il PARSE ( anche il parse è una promise!)  
        const results = []        // differenza tra (data) => { } e function(data) { }?  la seconda non ha un this.
        for (const id in data) {
          results.push({
            id: id, 
            name: data[id].name, 
            rating: data[id].rating
          })
        }
          this.results = results
        }).catch((err) => {  // catch = qualsiasi errore va qua!
          console.log(err)
          this.error = "Problema pazzo non funziona uin cazz"
        })
        this.isLoading = false 
      }
  },
   components: {
     SurveyResult,
   },
  mounted() {
    this.loadExperiences(); // appena il componente è montato ( piazzato nel DOM ) usa sto metodo
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>