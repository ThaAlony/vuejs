const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      input: "ss"
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.input)
    },
    deleteGoal(i) {
      this.goals.splice(i, 1)  
    }
  }
});

app.mount('#user-goals');
