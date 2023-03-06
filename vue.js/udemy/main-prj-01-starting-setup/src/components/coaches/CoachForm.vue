<template>
    <form @submit.prevent="submitForm">
        <div class="form-control" :class="{invalid: !firstName.isValid}" @blur="clearValidity('firstName')">
            <label for="firstname">Firstname</label>
            <input type="text" id="firstname" v-model.trim="firstName.val">
            <p v-if="!firstName.isValid">Ayo mettici qualcosa</p>
        </div>
        <div class="form-control" :class="{invalid: !lastName.isValid}" @blur="clearValidity('lastName')">
            <label for="lastname">Lastname</label>
            <input type="text" id="lastname" v-model.trim="lastName.val">
            <p v-if="!lastName.isValid">Brodm mettici qualcosa</p>
        </div>
        <div class="form-control" :class="{invalid: !description.isValid}" @blur="clearValidity('description')">
            <label for="description">Description</label>
            <textarea rows="5" id="description" v-model.trim="description.val"></textarea>
            <p v-if="!description.isValid">Scrivi qualcosa </p>
        </div>
        <div class="form-control" :class="{invalid: !rate.isValid}" @blur="clearValidity('rate')">
            <label for="rate">Soldi all'ora</label>
            <input type="number" id="rate" v-model.number="rate.val">
            <p v-if="!rate.isValid"> aoo mettici i soldi</p>
        </div>
        <div class="form-control" :class="{invalid: !areas.isValid}">
            <h3>Areas of Expertise</h3>
            <div>
                <input type="checkbox" id="frontend" value="frontend" v-model="areas.val" @blur="clearValidity('areas')">
                <label for="frontend">Er Frontenndde</label>
            </div>
            <div>
                <input type="checkbox" id="backend" value="backend" v-model="areas.val" @blur="clearValidity('areas')">
                <label for="backend">Er Bechends</label>
            </div>
            <div>
                <input type="checkbox" id="career" value="career" v-model="areas.val" @blur="clearValidity('areas')">
                <label for="career">La.. CARRIERA!</label>
            </div>
            <p v-if="!areas.isValid">Se fai cagare in tutto che cazzo ti iscrivi?</p>
        </div>
        <p v-if="!isValid">Fixa gli errori SCEMO!</p>
        <base-button>REGISTRATI!</base-button>
    </form>
</template>

<script>
export default{
    data() {
        return {
            firstName: {
                val: '', isValid: true
            },
            lastName: {
                val: '', isValid: true
            },
            description: {
                val: '', isValid: true
            },
            rate: {
                val: null,  isValid: true
            },
            areas: {
                val: [], isValid: true
            },
            isValid: true
        }
    },
    emits: ['save-data'],
    methods: {
        clearValidity(input) {
            this[input].isValid = true
        },
        validateForm() {
            this.isValid = true

            if ( this.firstName.val == '') {
                this.firstName.isValid = false
                 this.isValid = false
            }
            if ( this.lastName.val == '') {
                this.lastName.isValid = false
                 this.isValid = false
            }
            if ( this.description.val == '') {
                this.description.isValid = false
                 this.isValid = false
            }
            if ( !this.rate.val || this.rate.val < 0  ) {
                this.rate.isValid = false
                 this.isValid = false
            }
            if ( this.areas.val.length == 0) {
                this.areas.isValid = false
                 this.isValid = false
            }
        },
        submitForm() {
            this.validateForm()

            if (!this.isValid) return

            const formData = {
                first: this.firstName.val,
                last: this.lastName.val,
                desc: this.description.val,
                rate: this.rate.val,
                areas: this.areas.val
            }

            this.$emit('save-data', formData)
        }
    }
}
</script>

<style scoped>
.form-control{
    margin: 0.5rem 0;
}

label{
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
    font-weight: normal;
    display: inline;
    margin: 0 0 0 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit
}

input:focus,
textarea:focus{
    background-color: #f0e6fd;
    outline: none;
    border-color: #3d008d;
}

input[type="checkbox"]:focus {
    outline: #3d008d solid 1px;
}
h3 {
    margin:  0.5rem 0;
    font-size: 1rem;
}
.invalid label {
    color: red
}
.invalid input,
.invalid textarea {
    border: 1px solid red
}
</style>