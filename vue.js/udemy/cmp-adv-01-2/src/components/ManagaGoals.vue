<template>
    <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal">

    <button @click="setGoal">Set Goal</button>
    <Teleport to="body"> <!-- questo è un altro broken tag che tippa il contenuto sopra a tutto quello che mettiamo,
                                in questo caso lo porta all'inizio del body ma possono metterci
                                anche un potenziale id di qualiasi div etc -->
        <error-alert v-if="!isValid">
        <h2>Aooo</h2>
        <p>e mettici qualcosa</p>
        <button @click="confermError">VA BIEN CHIUDITI</button>
    </error-alert>  <!-- broken perché qua non ho nessun tag style etc, tutta la parte di abbellimento viene gestita
                        in ErrorAlert -->
    </Teleport>
    
</div>
</template>

<script>
import ErrorAlert from'./ErrorAlert.vue'
export default{
    data() {
        return {
            isValid: true
        }
    },
    components: {
        ErrorAlert
    },
    methods: {
        setGoal() {
            const v = this.$refs.goal.value
            if(v == '') {
                this.isValid = false
            } else this.isValid = true
        },
        confermError() {
            this.isValid = true
        }
    }
}
</script>