import { createStore } from 'vuex'

import rootMutations from './mutations';
import rootActions from './actions'
import rootGetters from './getters'
import counterModule from './counter/index';

const store = createStore({
    modules: {
        counter: counterModule  
    },
    state() {            
        return {
            isLogged: false
        }
    },
    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters
});

export default store