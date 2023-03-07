<template>
    
    <div>
        <base-dialog  :show="!!error" title="Errore!!!" @close="handleError" >
        <p>{{error}}</p>
        </base-dialog>
        <base-dialog fixed title="Aspe aspe" :show="isLoading"><p>Un attimo fratm.....</p>
    <base-spinner></base-spinner></base-dialog>
        <base-card>
        <form @submit.prevent="submitForm">
          
           <div class="form-control">
                <label for="email">Email</label>
                <input type="email" id="email" v-model.trim="email">
            </div>
            <div class="form-control">
                <label for="password">Password</label>
                <input type="password" id="password" v-model.trim="password">
            </div>
            <p v-if="!isValid">Eddai bro non trollare inserisci le cose serie ( lasswprdo almeno 6 caratteri eh)</p>
            <base-button>{{ submitButton }}</base-button>
            <base-button type="button" mode="flat" @click="switchAuthMode">{{ switchButton }}</base-button>
        </form>
    </base-card>
    </div>
</template>

<script>
export default{
    data() {
        return {
            email: '',
            password: '',
            isValid: true,
            mode: 'login',
            isLoading: false,
            error: null
        }
    },
    computed: {
        submitButton() {
            if(this.mode == 'login') return 'Login'
            if(this.mode == 'signup') return 'Sign up'
            return 'problem'
        },
        switchButton() {
            if(this.mode == 'login') return 'Switch to Sign up'
            if(this.mode == 'signup') return 'Switch to Login'
            return 'problem'
        }
    },
    methods: {
        async submitForm() {
            this.isValid = true
            if(this.email == '' || !this.email.includes('@') || this.password < 6) {
                this.isValid = false
                return
            }

            this.isLoading = true

            try {
                if (this.mode == 'login') {
                await this.$store.dispatch('login', {
                    email: this.email,
                    password: this.password
                })
            } else {
                await this.$store.dispatch('signup', {
                    email: this.email,
                    password: this.password
                })
            }
            const redUrl = '/'+ (this.$route.query.redirect || 'coaches' )
            this.$router.replace(redUrl)
            } catch(e) {this.error = e.message || 'ERRORE PAZZO'}

            this.isLoading = false
        },
        switchAuthMode() {
            console.log(this.mode)
            if (this.mode == 'login') return this.mode = 'signup'
            if (this.mode == 'signup') return  this.mode = 'login'
        },
        handleError() {
            console.log("A")
            this.error=false
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

</style>