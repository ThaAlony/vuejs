<template>
    <div>
    <base-dialog :show="!!error" title="Errore!!!" @close="handleError">
    <p>{{ error }}</p>
</base-dialog>
    <section>
        <base-card>
    <header>
        <h2>Richieste!</h2>
    </header>
    <base-spinner v-if="isLoading">
</base-spinner>
        <ul v-else-if="hasRequests && !isLoading">
            <RequestItem v-for="r in receivedRequests" :key="r.id"
            :email="r.userEmail"
            :message="r.message"
            ></RequestItem>
        </ul>
        <h3 v-else>bro non hai richieste sadge</h3>
</base-card>
    </section>
</div>
</template>
    
<script>
import RequestItem from '../../requests/RequestItem.vue';

export default{
    components: {
        RequestItem
    },
    data() {
        return {
            isLoading: false,
            error: null
        }
    },
    computed: {
        receivedRequests() {
            console.log(this.$store.getters['requests/r'])
            return this.$store.getters['requests/requests']
        },
        hasRequests() {
            
            console.log(this.$store.getters['requests/r'])
            return this.$store.getters['requests/hasRequests']
        }
    }, 
    created() {
        this.loadRequests()
    },
    methods: {
        async loadRequests() {
            this.isLoading= true
            try {
                await this.$store.dispatch('requests/fetchRequests')
            } catch (e) {
                this.error = e.message || 'SUPER MEGA FAIL!!'
            }
            this.isLoading= false
        },
        handleError() {
            this.error=null
        }
    }
}
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>