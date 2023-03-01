const app = Vue.createApp({
    data() {
        return {
            friends: [
                {id: "crazy", name: "Crazy Tan", phone: "123 456 7890", email: "chrisiwigghi@gmail.com"},
                {id: "siro", name: "Siro Soldick", phone: "098 765 4321", email: "sirosoldick@gmail.com"}
            ]
        }
    }
})

app.component("contact", {
    template: `<h2>{{ f.name }}</h2>
    <button @click="toggleDetails">{{ f.showDetails ? 'hide' , 'show'}} details</button>
    <ul v-if="show">
      <li><strong>Phone:</strong> {{ f.phone }}</li>
      <li><strong>Email:</strong> {{f.email}}</li>
    </ul>`,
    data() {
        return  {
            id: "crazy", 
            name: "Crazy Tan",
             phone: "123 456 7890", 
             email: "chrisiwigghi@gmail.com",
             showDetails: false
            }
    },
    methods: {
        toggleDetails() {
            this.showDetails = !this.showDetails
        }
    }
})

app.mount('#app')