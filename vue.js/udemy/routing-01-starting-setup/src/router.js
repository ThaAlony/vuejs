import { createRouter, createWebHistory } from 'vue-router'

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers';
import NotFound from './pages/NotFound'
import TeamsFooter from './components/teams/TeamsFooter'
import UsersFooter from './components/users/UsersFooter'


const router = createRouter({
    history: createWebHistory(), // ricordati le pagine che visita l'utnet osi da poter tornare indietro 
    routes: [
        {
            path: '/',              // se vai in '/' quindi di default
            redirect: '/teams'      // fai redirect in teams
            //alias: '/teams'        // carica la route di teams ma nel URL non scrive teams :C
        },
        {
            name: 'teams',   //puoi dare i nomi alle routes
            path: '/teams',
            meta: { // meta? che cazzo è meta?!! no niente praticamente è una roba per dire prendit sti dati
                //qualsiasi cosa siano e li puoi usare praticamente ovunque a patto che ci sia l'oggetto route
                needsAuth: true
            },
            components: {   // EH SI FRATMO se metti la S dopo component ne puoi mettere più di uno!
                default: TeamsList,   // questo va nel default rooter view
                footer: TeamsFooter     // questo nel footer
            },
            children: [
                {
                    name: 'team-members',
                        path: ':teamId',      // vabbe cioe è un child hai capito dai mette ./teams/ in automatico
                        component: TeamMembers,
                        props: true 
                     }
            ]
        },
        {
            path: '/users',
            components: {
                default: UsersList,
                footer: UsersFooter
            },
            beforeEnter(to, from, next) {  // VABBE prima di entrare in sta pagine fai questo:
                //next(false)  // EVIL ROUTE GUARDA BE LIKE: false! NON PUOI PASSARE
                next() // ok vai passa
            }
        },
        {
            path: '/teams/new'   // QUESTO VA PRIMA di teamId! perché? perché altrimenti new verrebbe preso come 
                                    //   parametro id e poi è un casino cioe che rte lo spiego a fa
        },
        // {
        //     path: '/teams/:teamId',
        //     component: TeamMembers,
        //     props: true // BROOO ABBIAMO I PROPS nel ROUTING!! praticametne i parametri ora sono props!
        //                 // perché usare i props? cosi puoi usare il componente in posti diversi SENZA per forza
        //                 // cambiare / aggiornare la route
        // },
        {
            path: '/:notFound(.*)', // che cazo è? vuol dire tutto! ( ovviamente le route sono in ordine quindi è
                                    // tutto tranne quelle prima ovviamente ) ( è tipo bla bla else BAM PAGINA IN 
                                    // FACCIA SCEMO)
            component: NotFound
        }
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) { // metodo ogni volta che cambi route to=verso quale route, from= da quale
                                                // route e savedPositin = dove avevi scrollato prima di lasciare
        if (savedPosition) {        //se c'era una savedPosition ( quidni se praticamente hai premuto il tasto)
            return savedPosition    // indietro, allora torna a quella posizione
        }
        return{left:0, top:0}   // altrimenti vai sopra a tutto e CIAOO
    }
});

router.beforeEach(function (_, to, next) {  // poco prima ogni volta che cambiamo pagina sta funzione viene chiamata
    // if(to.name == 'team-members') {  // se vuoi andare in team member allora
    //     next() // allora  OK PUOI PROSEGUIRE carica la route
    // }  else { // ALTRIMENTI
    //     next({ name: 'team-members', params: { teamId: 't2'} }); // ALTRIMENTI  SEI OBBLIGATO AD ANDARE QUA
    // }
    if(to.meta.needsAuth) {
        alert('bro.... non sei loggato')
    }
    next() // bo si cioe sopra c'è un esempio commentato ma sticazzi vai avanti
})

router.afterEach(function(to , from) { // sta roba viene eseguita dopo ogni volta che cambi route 
                                        // quindi ormai è tutto gia caricato mi dispiace non puoi fare nulla 
    console.log(to, from)
                                    })

export default router;

