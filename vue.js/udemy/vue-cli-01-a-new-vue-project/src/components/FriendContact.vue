<template>
    <li>
        <h2>{{ name }} {{ isFavorite == true ? 'Favorito' : '' }}</h2>
        <button @click="toggleDetails">{{ show ? 'hide' : 'show' }} details</button>
        <button @click="toggleFavorite">Yoo soo un troll</button>
        <button @click="toggleFavoriteFRFR">Yoo io worko fr</button>
        <ul v-if="show">
            <li>Phone {{ phoneNumber }}</li>
            <li>Email {{ emailAddress }}</li>
        </ul>
        <button @click="deleteFriend">CANCELLA UCCIDI AMMAZZA</button>
    </li>
</template>

<script>
import { toIdentifier } from '@babel/types';


export default{
    data() {
        return {
            show: false
        }
    },
    // qua metti le cose che da ( praticamente una lista di eventi dai )
    //emits: ['toggle-favorite'], // forma base
    emits: { // forma sgravata 
        'toggle-favorite': function(id) { // praticamente cosi fai che capire che cazzo è sto toggle favorite ( un evento che ha come parametro id)
            if (id) {
                return true    // essendo che sto metodo deve avere un id se lo ha è tutto ok
            } else {
                console.warn("done estas l'id de merdia?!")   // se invece sto id per un motivo o per un altro si è perso 
                return false;                                 // OMMIO DIO SI E' PERSO L'ID VI PREGO QUALCUNO MI AIUTI 
            }                                                 // più o meno va cosi
        },
        'delete-contact': function (id) {

        }
    }, 
    props: {   // qua quello che prende lmao
        id: String,   // TIPIZZIAMO?? ODDIO TI PREGO TYPESCRIPT NON CI CREDO 
        name: {         // OBJ come tipo? pog
            type: String,       // praticamente name è sempre una stringa solo che ha delle proprietà
            required: true      // questa è una di tante altre proprietà che DA VUE JS IN AUTOMATICO
        },                      // quindi non si possono inventare nuove prorpietà cazo
        phoneNumber: String,
        emailAddress: String,
        isFavorite: {
            type: Boolean,
            required: false,
            default: false    // FRATMO qua ci puoi mettere anche una funzione basta che da un risultato effettivo di tipo "type"
        }    // I PROPs NON possono essere modificati

    },
    methods: {
        toggleDetails() {
            this.show=!this.show
        },
        toggleFavorite() {               // no no no no!! una volta che i dati sono stati passati dal parent al child ( prop )devono rimanere immutati!
            if(this.isFavorite == '1') {
                this.isFavorite = 0
            } else if(this.isFavorite == '0') {
                this.isFavorite = 1
            }
        },
        toggleFavoriteFR() {  // ecco come si fa ( se proprio devi )
            if(this.isFavoriteData == true) {
                this.isFavoriteData = false
            } else if(this.isFavoriteData == false) {
                this.isFavoriteData = true
            }
        },
        toggleFavoriteFRFR() {  // BRO QUESTO E' PIU SERIO CIOE LO CAMBIA PROPRIO IN APP ( quidni nel parent )
            this.$emit('toggle-favorite', this.id)
        },
        deleteFriend() {
            this.$emit('delete-contact', this.id)
        }
    }
    
}
</script>
