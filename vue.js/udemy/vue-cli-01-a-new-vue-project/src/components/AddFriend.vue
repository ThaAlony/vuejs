<template>
    <form @submit.prevent="submitForm">
        <div>
        <label>Name</label>
        <input type="text" v-model="name">
    </div>
    <div>
        <label>Phone</label>
        <input type="tel" v-model="phone">
    </div>
    <div>
        <label>email</label>
        <input type="email" v-model="email">
    </div>
    <div>
        <button>Add Contat</button>
    </div>
    </form>
</template>

<script>
export default{
    data() {
        return {
            name: "",
            phone: "",
            email: ""
        }
    },
    emits: {
        'add-contact': {

        }
    },
    methods: {
        submitForm() {
            this.$emit('add-contact', this.name, this.phone, this.email )
        }
    }
}
</script>
