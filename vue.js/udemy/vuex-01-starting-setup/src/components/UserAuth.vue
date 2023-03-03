<template>
    <div>
        <button @click="login" v-if="!isAuthenticated">Login</button>
    <button @click="logout" v-if="isAuthenticated">Logout</button>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    methods: {
        ...mapActions(['login', 'logout'])
    },
    computed: {
        ...mapGetters(['isAuthenticated'])
    }
}
</script>