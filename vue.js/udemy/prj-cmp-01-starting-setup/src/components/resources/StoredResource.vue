<template>
<ul>
        <ResourceItem v-for="r in resources" :key="r.id"
        :title="r.title" :description="r.description" :link="r.link" :id="r.id">

        </ResourceItem>
    </ul>
</template>

<script>
import ResourceItem from './ResourceItem.vue'

export default{
    data() {
        return {

        }
    },
    inject: ['resources'],
    components: {
        ResourceItem
    }
}
</script>

<style>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>