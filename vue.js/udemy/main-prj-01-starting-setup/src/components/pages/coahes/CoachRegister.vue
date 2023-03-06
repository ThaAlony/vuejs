<template>
    <div>
    <section>
        <base-card>
        <h2>Registrati bello</h2>
        <CoachForm @save-data="saveData"></CoachForm>
    </base-card>
        
    </section>
</div>
</template>
    
    <script>
    import CoachForm from '../../coaches/CoachForm.vue';

    export default {
        components: {
            CoachForm
        },
        methods: {
            saveData(data) {
                console.log(data)
                this.$store.dispatch('coaches/addCoach', data)
                this.$router.replace('/coaches')  // praticametne il replace ti porta in una pagina e poi non puoi fare back
            }
        }
    }
    </script>