import { createRouter, createWebHistory } from 'vue-router'

import CoachList from './components/pages/coahes/CoachList'
import CoachDetail from './components/pages/coahes/CoachDetail'
import CoachRegister from './components/pages/coahes/CoachRegister'
import ContactCoach from './components/pages/requests/ContactCoach'
import RequestList from './components/pages/requests/RequestList'
import NotFound from './components/pages/NotFound'

const router = createRouter({
    history: createWebHistory(),
    routes:  [
        
        
        { path: '/coaches', component: CoachList},
        { path: '/coaches/:id', component: CoachDetail , props: true, children: [
            { path: 'contact', component: ContactCoach}
        ]},
        { path: '/register', component: CoachRegister},
        { path: '/requests', component: RequestList },
        {path: '/', redirect:'/coaches'},
        { path: '/:notFound(.*)', component: NotFound }
    ]
})

export default router