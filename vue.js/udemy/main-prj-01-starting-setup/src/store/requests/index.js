export default {
    namespaced: true,
    state() {
        return{
            requests: []
        }
    },
    mutations: {
        addRequest(state, payload) {
            state.requests.push(payload)
        },
        setRequests(state, payload) {
            state.requests = payload 
        }  
    },
    actions: {
        async addRequest(context, payload) {
            const request = {
                userEmail: payload.email,
                message: payload.message
            }
            const res = await fetch(`https://vue-http-demo-be565-default-rtdb.europe-west1.firebasedatabase.app/requests/${request.coachId}.json`, {
                method: 'POST',
                body: JSON.stringify(request)
            })

            const resData = await res.json()


            if (!res.ok) {
                const error = new Error(resData.message || 'Che errore holy shit')
                throw error
            }

            request.id = resData.name
            request.coachId = payload.coachId
            context.commit('addRequest', request)
        },
        async fetchRequests(context) {
            const coachId = context.rootGetters.userId
            const token = context.rootGetters.token
            const res = await fetch(`https://vue-http-demo-be565-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json?auth=${token}`)
           const resData = await res.json()

           if (!res.ok) {
            const error = new Error(resData.message || 'Mega fail...')
            throw error
           }

           const reqs = []

           for (const key in resData) {
            const req = {
                id: key,
                coachId: coachId,
                userEmail: resData[key].userEmail,
                message: resData[key].message
            }
            reqs.push(req)
           }

           context.commit('setRequests', reqs)
        }
    },
    getters: {
        r(state) {
            return state.requests
        },
        requests(state, _, _2, rootGetters) {
            
        
            const id = rootGetters.userId
            return state.requests.filter( (r) => r.coachId == id)
        },
        hasRequests(_, getters) {
            return getters.requests && getters.requests.length > 0
        }
    }
}