<template>
    <base-card>
    <base-button @click="setTab('stored-resource')" :mode="storedResButtonMode">
    StoredResources
        </base-button>
        <base-button  @click="setTab('add-resource')" :mode="addResButtonMode">
        AddResource
        </base-button>
    </base-card>
    <BaseCard>
    <component :is="selectedTab"></component>
    </BaseCard>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
import BaseCard from '../UI/BaseCard.vue';
import StoredResource from './StoredResource.vue';
import AddResource from './AddResource.vue'

export default{
    components: {
        BaseButton,
        BaseCard,
        StoredResource,
        AddResource
    },
    computed: {
        storedResButtonMode() {
            return this.selectedTab == 'stored-resource' ? null : 'flat' 
        },
        addResButtonMode () {
            return this.selectedTab == 'add-resource' ? null : 'flat' 
        },
        },
        data() {
            return {
                selectedTab: 'stored-resource',
                storedResources: [
                { id:'official-guide', title: 'Guida Ufficiale', description: 'La guida pazza ufficiale', link: 'https://vuejs.org'},
                { id:'google', 
                title: 'Er GOOGLE', 
                description: 'er motore di ricerca', 
                link: 'https://google.com'}
            ]
            }
        },
        provide() {
        return {
            resources: this.storedResources,
            addResource: this.addResource,
            deleteResource: this.deleteResource
        }       
        },
        methods: {
            setTab(tab) {
                this.selectedTab = tab
            },
            addResource(t, d, l) {
                const newRes = {
                    id: this.storedResources.length,
                    title: t,
                    description: d,
                    link: l
                }
                this.storedResources.unshift(newRes)
                console.log("hm")
            },
            deleteResource(id) {
                const idx = this.storedResources.findIndex(r => r.id == id)
                this.storedResources.splice(idx, 1)
            }
        }
}
</script>