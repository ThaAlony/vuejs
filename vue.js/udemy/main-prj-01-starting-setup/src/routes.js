import { createRouter, createWebHistory } from 'vue-router'

import CoachList from './components/pages/coahes/CoachList'
import CoachDetail from './components/pages/coahes/CoachDetail'
import CoachRegister from './components/pages/coahes/CoachRegister'
import ContactCoach from './components/pages/requests/ContactCoach'
import RequestList from './components/pages/requests/RequestList'
import NotFound from './components/pages/NotFound'
import UserAuth from './components/pages/auth/UserAuth'

import store from './store/index'

const router = createRouter({
    history: createWebHistory(),
    routes:  [
        
        
        { path: '/coaches', component: CoachList},
        { path: '/coaches/:id', component: CoachDetail , props: true, children: [
            { path: 'contact', component: ContactCoach}
        ]},
        { path: '/register', component: CoachRegister, meta:{ requiresAuth: true}},
        { path: '/requests', component: RequestList, meta:{ requiresAuth: true} },
        {path: '/', redirect:'/coaches'},
        {path: '/auth', component: UserAuth, meta:{ requiresUnauth: true}},
        { path: '/:notFound(.*)', component: NotFound }
    ]
})

router.beforeEach(function(to, _, next) {
    if(to.meta.requiresAuth && !store.getters.isAuthenticated) return next('/auth')
    if(to.meta.requiresUnauth && store.getters.isAuthenticated) return next('/coaches')
    next()
})

export default router