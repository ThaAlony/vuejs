<template>
    <h2>{{  userName }}</h2>
    <h3>{{ age }}</h3>
    {{  dati }}
    <br>{{  a }}
</template>

<script>
import { computed, inject, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from'vue' 

export default{
    props: ['userName', 'age'],
    setup(props, context) {
        // mettiamo caso che ivnece voglio usare la compositotnont api
        const dati = computed(() => {
            // return this.userName + ' ' + this.age // e invece no, this non funzoina dentro la compositio api!
            return props.userName + ' ' + props.age
        })


        const a = inject('variabile')

        onBeforeMount(() => {
            console.log('beforemout')
        })

        onMounted(() => {
            console.log('mounted')
        })

        onBeforeUpdate(() => {
            console.log('before udpate')
        })

        onUpdated(() => {
            console.log('udpated')
        })

        onBeforeUnmount(() => {
            console.log('before unmount')
        })

        onUnmounted(() => {
            console.log('unmounted')
        })

        context.emit('', 'robe') // = this.$emit('', 'robe')
        return {
            dati,
            a

        }
    }
    // computed: {
    //     dati() {
    //         return this.userName + ' ' + this.age
    //     }
    // }   // FUNZIONA! e quindi..? e quindi neinte puoi usare la composition e la option nello stesso progetto tranquillamente in component diversi

    
}
</script>