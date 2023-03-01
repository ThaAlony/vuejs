<template>
  <section>
    <base-card>
    <template #header> <!-- che minchia è #header? è solo la forma corta di v-slot:header! -->
      <h2>Available Badges</h2>
    </template>
    
    <template v-slot:default> <!-- sto template andrà sempre nello slot di default-->
      <ul>
      <li>
        <base-badge type="admin" caption="ADMIN"></base-badge>
      </li>
      <li>
        <base-badge type="author" caption="AUTHOR"></base-badge>
      </li>
    </ul>
    </template>
  </base-card>
  </section>
</template>

<style scoped>
section h2 {
  margin: 0.5rem 0;
  color: #3a3a3a;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

li {
  margin-right: 1rem;
}
</style>