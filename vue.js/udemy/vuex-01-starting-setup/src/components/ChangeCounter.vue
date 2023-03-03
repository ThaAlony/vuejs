<template>
    <button @click="addOne">aggiungi fratm</button>
</template>

<script>
export default{
    methods: {
        addOne() {            // componenti diversi? e chi se ne frega! ci pensa lo store lets gooooo
            this.$store.dispatch('counter/increment')  
        }
    }
}</script>