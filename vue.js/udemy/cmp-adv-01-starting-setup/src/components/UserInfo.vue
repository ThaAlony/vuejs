<template>
  <section>
  <base-card>  <!-- APRO base card-->
 
                                    
     <template v-slot:header>   <!-- sto dicendo che sta roba va nello slot dell'header! -->
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
     </template>
     <template v-slot:default>
    <!-- tutta sta roba è lo SLOT senza nome!-->
    <p>{{ infoText }}</p>
  </template>
  </base-card>    <!-- CHIUDO base card-->
</section>
</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role'],
};
</script>


