<template>
<div>
    <form @submit.prevent="subtmiForm">
        <div class="form-control">
            <label for="email">Metti l'email</label>
            <input type="email" id="email" v-model.trim="email">
        </div>
        <div class="form-control">
            <label for="message">Messaggio Pazzo</label>
            <textarea rows="5" id="message" v-model.trim="message"></textarea>
        </div>
        <p class="errors" v-if="!isValid"> WE WE fai il serio dai</p>
        <div class="actions">
            <base-button>Manda Messaggio</base-button>
        </div>
    </form>
  </div>
</template>
    
<script>
export default {
    data() {
        return {
            email: '',
            message: '',
            isValid: true
        }
    },
    methods: {
        validateform() {
            this.isValid = true
            if(this.email == '' || !this.email.includes('@') || this.message == '')
            this.isValid = false
        },
        subtmiForm() {
            this.validateform()

            if(!this.isValid) return

            this.$store.dispatch('requests/addRequest', {
                email: this.email,
                message: this.message,
                coachId: this.$route.params.id 
            })

            this.$router.replace('/coaches')
        }
    }
}
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>