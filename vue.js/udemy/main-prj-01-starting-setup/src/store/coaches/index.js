export default {
    namespaced: true,
    state() {
        return{
          lastFetch: null, // BRO LA CACHE HOLY SHIT!!!
            coaches: [
                {
                  id: 'c1',
                  firstName: 'Maximilian',
                  lastName: 'Schwarzmüller',
                  areas: ['frontend', 'backend', 'career'],
                  description:
                    "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                  hourlyRate: 30
                },
                {
                  id: 'c2',
                  firstName: 'Julie',
                  lastName: 'Jones',
                  areas: ['frontend', 'career'],
                  description:
                    'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                  hourlyRate: 30
                }
              ]
        }
    },
    mutations: {
      addCoach(state, payload) {
        state.coaches.push(payload)
      },
      setCoaches(state, payload) {
        state.coaches = payload
      },
      setFetchTimestamp(state) {
        state.lastFetch = new Date().getTime()
      }
    },
    actions: {
      async addCoach(context, payload) {
        const id = context.rootGetters.userId
        const coach = {
          firstName: payload.first,
          lastName: payload.last,
          description: payload.desc,
          hourlyRate: payload.rate,
          areas: payload.areas
        }

        const token = context.rootGetters.token
            // await = la variabile viene creata quando arriva la risposta al DB lets go!
        const res = await fetch(`https://vue-http-demo-be565-default-rtdb.europe-west1.firebasedatabase.app/coaches/${id}.json?auth=${token}`, {
          method: 'PUT',
          body: JSON.stringify(coach)
        })

        if(!res.ok) {
          //bordello pazzo
        }

        context.commit('addCoach', {
          ...coach,
          id: id
        })
      },
      async setCoaches(context, payload) {
        if (!payload.forceRefresh && !context.getters.shouldUpdate) return

        const res = await fetch(`https://vue-http-demo-be565-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`)

        const resData = await res.json()
        if (!res.ok) {
          const error = new Error(resData.message || 'Tutto esploso holy shit')
          throw error
        }

        const cs = []

        for (const key in resData) {
          const coach = {
            id: key,
            firstName: resData[key].firstName,
            lastName: resData[key].lastName,
            description: resData[key].description,
            horlyRate: resData[key].horlyRate,
            areas: resData[key].areas
          }
          cs.push(coach)
        }
        
        context.commit('setCoaches', cs)
        context.commit('setFetchTimestamp')
      }
    },
    getters: {
        coaches(state) {
            return state.coaches
        },
        hasCoaches(state) {
            return state.coaches && state.coaches.length > 0
        },
        isCoach(_, getters, _2, rootGetters) {
          const cs = getters.coaches
          const ID = rootGetters.userId
          return cs.some( (c) => c.id == ID)  //.some() = ritorna true se almeno 1 è cosi
        },
        shouldUpdate(state) {
          const lastFetch = state.lastFetch
          if (!lastFetch) {
            return true
          }
          const currentTimeStamp = new Date().getTime()
          return (currentTimeStamp - lastFetch) / 1000 > 60  // se è più di un minuto fa
        }
    }
}