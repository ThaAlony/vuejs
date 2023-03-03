<template>
    <p>hm {{  counter }}</p>
</template>

<script>
export default {
    computed: {
        counter() {
            // return this.$store.state.counter * 2  // e cre sta cos fratm? nono, definiamo dei metodo seri in main.js
            //return this.$store.getters.normalizedCounter  // mo si primm no!
            return this.$store.getters['counter/normalizedCounter'] // qua è come si fa con i moduli che hanno namespaced: true
        }
    }
}
</script>