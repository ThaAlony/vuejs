let timer 

export default {
    state() {
        return {
            userId: null,
            token: null,
            tokenExpiration: null,
            didLogout: false
        }
    },
    getters: {
        userId(state) {
            return state.userId
        },
        token(state) {
            return state.token
        },
        isAuthenticated(state) {
            return !!state.token
        },
        didAutoLogout(state) {
            return state.didLogout
        }
    },
    mutations: {
        setUser(state, payload) {
            state.token = payload.token;
            state.userId = payload.userId,
            state.didLogout=false
        },
        didLogout(state) {
            state.didLogout = true
        }
    },
    actions: {
        async auth(context, payload) {
            const mode = payload.mode
            let url ="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCGqXKiXBDCEotMlhHUN2KVw_xow7MYr70"

            if(mode == 'signup') url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCGqXKiXBDCEotMlhHUN2KVw_xow7MYr70"


            const res = await fetch(url, {
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

            const expiresIn = responseData.expiresIn * 1000
            const expirationDate = new Date().getTime() +  expiresIn

            localStorage.setItem('token', resData.idToken)
            localStorage.setItem('userId', resData.localid)
            localStorage.setItem('tokenExpiration', expirationDate)

            timer = setTimeout(() => {
                context.dispatch('autoLogout')
            }, expiresIn)

            console.log(resData)
            context.commit('setUser', {
                token: resData.idToken,
                userId: resData.localid
            })

            
        },
        tryLogin(context) {
            const token = localStorage.getItem('token')
            const userId = localStorage.getItem('userId')
            const tokenExpiration = localStorage.getItem('tokenExpiration')

            const expiresIn = +tokenExpiration - new Date().getTime()


            if (expiresIn < 0) {
                return
            }

            setTimeout(() => {
                context.dispatch('autoLogout')
            }, expiresIn)

            if(token && userId) context.commit('setUser', {
                token: token,
                userId: userId
            })
        },
        async login(context, payload) {
            return context.dispatch('auth', {
                ...payload,
                mode: "login"
            })

        },
        async signup(context, payload) {

            
            return context.dispatch('auth', {
                ...payload,
                mode: "signup"
            })

        },
        logout(context) {
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
            localStorage.removeItem('tokenExpiration')

            clearTimeout(timer)

            context.commit('setUser', {
                token : null,
            userId : null
            })
        },
        autoLogout(context) {
            context.dispatch('logout')

            context.commit('didLogout')
        }
    }
}