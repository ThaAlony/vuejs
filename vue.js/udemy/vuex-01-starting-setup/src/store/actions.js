export default{
    
    login(context) {
        context.commit('setAuth', {isLogged: true})
    },
    logout(context) {
        context.commit('setAuth', {isLogged: false})
    }
}