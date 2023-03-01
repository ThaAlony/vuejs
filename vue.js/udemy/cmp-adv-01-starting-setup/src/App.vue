<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <CourseGoals>
      <template #default="slotProp"> <!-- PROPRS per gli SLOT!!-->
        <h2> {{ slotProp.goal }}</h2> <!-- goal perché g è stato definito in CourseGoals-->
        <p>{{  slotProp['goal'] }}</p>
      </template>
    </CourseGoals>
  </div>
</template>

<script>
import TheHeader from'./components/TheHeader.vue' // IMPORTA un component per poi usarlo localmente ( in questo component )
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoals from './components/CourseGoals'

export default {
  components: { // Components da importare localmente
    'the-header': TheHeader, // tag html: component effettivo ( o tanti altri modi)
    BadgeList: BadgeList,  // component effettivo : componenet effettivo ( traduce in automatico in badge-list)
    UserInfo,          // solo cmponent effettivo ( traduce in atomatico )
    CourseGoals
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<!-- ANCHE LO STILE è global! quindi qualsiasi stile tu metti in un tag <style> in qualsiasi component ha effetto
su TUTTO! come fare lo stile locale? check other components brodm -->
<style> 
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>