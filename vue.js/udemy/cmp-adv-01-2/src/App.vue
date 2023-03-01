<template>
  <div>
    <the-header></the-header>
    <button @click="selectComponent('active-goals')">Active Goals</button>  <!-- bottoni per rendere dei component dinamici!-->
    <button @click="selectComponent('managa-goals')">Manage Goals</button>  <!-- spariscono ed appaiono che magia holt shit -->
    
    
    
    <!-- TAG Pazzo che permette di non distruggere i component dinamici! 
                           detot in poche parole se switcho tra active goals e manage goals il primo component
  (parlo di queto sotto)   rimane vivo e non muore, lo stesso vale anche al contrario ovviamente -->
   <!-- ATTENZIONE! in keep alive non puoi metterci nesun altro tag oltre ad un componente
  NEANCHE I COMMENTI CIOE MA SCHERZIAMO?
--> 
<keep-alive>
    <component :is="selectedComponent"></component>  
  </keep-alive> <!-- il tag qui sopra = COMPONENT DINAMICI!!! -->


  </div>
</template>

<script>
import TheHeader from'./components/layout/TheHeader.vue' 
import ActiveGoals from './components/ActiveGoals.vue';
import ManagaGoals from './components/ManagaGoals.vue';

export default {
  components: { 
    'the-header': TheHeader,
    ActiveGoals,
    ManagaGoals
  },
  data() {
    return {
      selectedComponent: 'active-goals',
    };
  },
  methods: {
    selectComponent(c) {
      this.selectedComponent= c
    }
  }
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