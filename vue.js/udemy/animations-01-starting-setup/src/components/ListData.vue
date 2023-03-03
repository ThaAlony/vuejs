<template>
        <TransitionGroup tag="ul" name="user-list"> <!-- praticamente aziché mettere <ul> mettiamo transitiongroup con
            tag = ul-->
            <li v-for="u in users" :key="u" @click="deleteUser(u)">
                {{  u }}
            </li>
        </TransitionGroup>
    <div>
        <input type="text" ref="input">
        <button @click="addUser">Aggungi un brother</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: ['Fratm', 'Brodmo', 'Fratmo', 'Pascal']
        }
    },
    methods: {
        addUser() {
            this.users.unshift(this.$refs.input.value)
        },
        deleteUser(u) {
            this.users = this.users.filter( us => us != u)
        }
    }
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 1rem 0;
    padding: 0;
}

li {
    border: 1px solid #ccc;
    text-align: center;
    padding: 1rem;
}

.user-list-enter-from {
    opacity: 0;
    transform: translateX(-30px);
}
.user-list-enter-active {
    transition: all 1s ease-out;
}

.user-list-leave-active {
    transition: all 1s ease-out;
    position: absolute;
}
.user-list-enter-to,
.user-list-leave-from {
    opacity: 1;
    transform: translateX(0);
}

.user-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.user-list-move { /* praticamente per controllare gli altri elementi della lista quando succede qualcosa */
    transition: transform 0.8s ease;
}
</style>