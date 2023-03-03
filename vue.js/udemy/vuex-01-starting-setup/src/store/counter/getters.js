export default {
    finalCounter(state) {  
        return state.counter * 2
    },
    normalizedCounter(getters ) {  
        if(getters.finaleCounter < 0) return 0 
    if(getters.finaleCounter > 100) return 100 
    return getters.finaleCounter
},
}