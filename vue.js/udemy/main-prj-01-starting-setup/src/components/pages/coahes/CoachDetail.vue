<template>
    <div>
<section>
    <base-card>
    <h2>{{  fullName }}</h2>
    <h3>{{ rate }} all'ora</h3>    
</base-card>
</section>
<section>
    <base-card>
    <header>
        <h2>Interessato? E allora premi fratm</h2>
    <base-button link :to="contactLink">les go</base-button>
    </header>
    <RouterView></RouterView>
    </base-card>
</section>
<section>
    <base-card>
    <base-badge v-for="a in selectedCoach.areas" :key="a" :type="a" :title="a"></base-badge>
    <p>{{  description }}</p>
</base-card>
</section>
</div>
</template>
    
<script>
    export default{
        props: ['id'],
        data() {
            return {
                selectedCoach: null
            }
        },
        computed: {
            fullName() {
                return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName
            },
            contactLink() {
                return this.$route.path + '/' + this.id + '/contact'   
            },
            rate() {
                return this.selectedCoach.hourlyRate
            },
            description() {
                return this.selectedCoach.description
            }
        },
        created() {
            this.selectedCoach= this.$store.getters['coaches/coaches'].find((c) => c.id == this.id)
        }
    }
</script>