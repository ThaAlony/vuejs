<template>
    <ul>
        <li v-for="g in goals" :key="g">
        <slot :goal="g"></slot>    <!-- g è uno slot PROPS-->
    </li>
    </ul>
</template>

<script>
export default{
    data() {
        return {
            goals: ['Finish the cors', 'Impara viugeies']
        }
    }
}
</script>