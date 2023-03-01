<template>
    <div>
        <header v-if="$slots.header"> <!-- $slots = gli slot, .header = slot soprannominato header, praticamente è
                                            se viene passato lo slot nominato header allora rendereizza, altrimenti no-->
            <slot name="header"> <!-- che è slot='header'? è il nome dello slot!-->
               
            </slot> 
        </header>
        <slot>  <!-- che cazzo è slot? vuole dire quello che metti all'interno dei tag html di sto component 
                            guarda UserInfo per capire meglio -->
            <h2>Default</h2>   <!-- QUESTO è il contenuto di DEFAULT! se non gli viene passato nulla fa questo-->
        </slot> 
    </div>
</template>

<script>
export default{
    
}
</script>

<!-- ECCO QUA! scoped = style locale, style locale = funziona solo su sto component -->
<style scoped> 
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>