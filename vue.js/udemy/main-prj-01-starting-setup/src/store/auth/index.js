export default {
    state() {
        return {
            userId: null,
            token: null,
            tokenExpiration: null
        }
    },
    getters: {
        userId(state) {
            return state.userId
        }
    },
    mutations: {
        setUser(state, payload) {
            state.token = payload.token;
            state.userId = payload.userId
            state.tokenExpiration = payload.tokenExpiration
        }
    },
    actions: {
        async signup(context, payload) {
            const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCGqXKiXBDCEotMlhHUN2KVw_xow7MYr70', {
                method: 'POST',
                body: JSON.stringify({
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true
                })
            })

            const resData = await res.json()

            if(!res.ok) {
                const error = new Error(resData.message || 'ERRORE HOLY SHIT')
                throw error
            }

            console.log(resData)
            context.commit('setUser', {
                token: resData.idToken,
                userId: resData.localid,
                tokenExpiration: resData.expiresIn
            })

        }
    }
}