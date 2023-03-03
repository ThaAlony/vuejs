export default{
    
    increment(context) { 
        setTimeout(() => {
            context.commit('increment')
        }, 2000)
    },
    increase(context, payload) {  
        if(payload == 0) return  
        context.commit('increase', payload)
    },

}