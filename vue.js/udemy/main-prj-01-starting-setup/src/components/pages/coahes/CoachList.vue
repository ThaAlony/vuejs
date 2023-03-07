<template>
    <div>
    <base-dialog :show="!!error" title="Errore!!!" @close="handleError">
    <p>{{ error }}</p>
</base-dialog>
    <section>
        <coach-filter @change-filter="setFilter"></coach-filter>
    </section>
   <base-card>
    <section>
        <div class="controls">
            <base-button mode="outline" @click="loadCoaches(true)">Refresh
        </base-button>
        <base-button v-if="!isLogged"  link to="/auth?redirect=register">
                Login per diventare un coach
            </base-button>
            <base-button v-if="!isCoach && !isLoading && isLogged"  link to="/register">
                Register
            </base-button>
        </div>
        <div v-if="isLoading">
        <base-spinner>
    </base-spinner>
</div>
        <ul v-else-if="hasCoaches">
            <CoachItem v-for="coach in toShowCoaches" :key="coach.id"
            :id="coach.id"
            :first-name="coach.firstName"
            :last-name="coach.lastName"
            :areas="coach.areas"
            :rate="coach.hourlyRate"
            ></CoachItem>

        </ul>
        <h3 v-else>NO COCCHES??</h3>
    </section></base-card>
</div>
</template>
    
<script>
import CoachItem from '../../coaches/CoachItem.vue' 
import CoachFilter from '../../coaches/CoachFilter.vue'

export default {
    components: {
    CoachItem,
    CoachFilter
},
data() {
    return {
        isLoading: false,
        error: null,
        activeFilters: {
            frontend: true,
            backend: true,
            career: true
        }
    }
},
        
    computed: {
        isLogged() {
            return this.$store.getters.isAuthenticated
        },
        toShowCoaches() {
            console.log(this.$store.getters['coaches/coaches'])
            const coaches = this.$store.getters['coaches/coaches']
            return coaches.filter( (c) => {
                if (this.activeFilters.frontend && c.areas.includes('frontend')) {
                    return true
                }
                if (this.activeFilters.backend && c.areas.includes('backend')) {
                    return true
                }
                if (this.activeFilters.career && c.areas.includes('career')) {
                    return true
                }
                return false
            })
        },
        hasCoaches() {
            return !this.isLoading && this.$store.getters['coaches/hasCoaches']
        },
        
        isCoach() {
                return this.$store.getters['coaches/isCoach']
            }
    },
    methods: {
        setFilter(f) {
            this.activeFilters = f
        },
        async loadCoaches(refresh = false) {
            this.isLoading = true
            try {
                await this.$store.dispatch('coaches/setCoaches', {forceRefresh: refresh})
            } catch(err) {
                this.error = err.message || 'Qualcosa ha fatt BDISHH!!'
            }   
            this.isLoading = false
        },
        handleError() {
            this.error = null
        }
    },
    created() {
        this.loadCoaches()
    }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>