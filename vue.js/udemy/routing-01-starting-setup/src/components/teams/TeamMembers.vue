<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Vai al team number ciu</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem
  },
  data() {
    return {
      teamName: '',
      members: [
    ]
    };
  },
  inject: ['users', 'teams'],
  props: ['teamId'],
  methods: {
    loadTeamMember(id) {
    const selectedTeam = this.teams.find(team => team.id == id)
    const members = selectedTeam.members
    const selectedMembers = []
    for (const m of members) {
      const selectedUser = this.users.find(u => u.id == m)
      selectedMembers.push(selectedUser)
    }
    this.teamName = selectedTeam.name  
    this.members = selectedMembers
    }
  },
  created() {       // ci sono i dati ma ancora nulla di visivo
    this.loadTeamMember(this.teamId)
    console.log(this.$route.query)// er query parameter!
  },
  beforeRouteUpdate(to, from, next) {  // praticamente quando riutilizzi questo component, detto in poche parole in questo caso
                          // è quando sei su teams/1 e vai su teams/2 quindi i componenti vengono ricclati 
    //this.loadTeamMember(to.params.teamId) // praticamente sta roba è tipo il watch ma solo per le route quindi STICAZ
    next()
  },
  watch: {
    teamId(v) {
      this.loadTeamMember(v)
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>