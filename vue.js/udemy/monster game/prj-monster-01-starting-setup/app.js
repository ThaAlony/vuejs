const app = Vue.createApp({
    data() {
        return {
            health: 100,
            monsterHealth: 100,
            round: 0,
            winner: null,
            actions: []
        }
    },
    watch: {
        health() {
            if (this.health < 1 && this.monsterHealth < 1) {
                this.winner = 'draw'
            } else if (this.health < 1) {
                this.winner="monster"
            }
            console.log(this.winner)
        },
        monsterHealth() {
            if (this.monsterHealth < 1 && this.health < 1) {
                this.winner = 'draw'
            } else if (this.monsterHealth < 1) {
                this.winner="player"
            }
            console.log(this.winner)
        }
    },
    computed: {
        monsterBarStyles() {
            return {width: this.monsterHealth + '%'}
        },
        healthBarStyles() {
            return {width: this.health + '%'}
        },
        canUseSpecialattack() {
            return this.round % 3 !== 0
        }
    },
    methods: {
        startGame() {
            this.health = 100
            this.monsterHealth = 100
            this.round = 0
            this.winner = null
            actions= []
        },
        attack() {
            const atk = Math.floor(Math.random()* (15 - 5) + 5)
            this.monsterHealth-= atk
            this.addLog("player", "attack", atk)
            this.monsterAttack()
            this.round++
        },
        monsterAttack() {
            const atk =  Math.floor(Math.random()*(18 - 8 ) + 8)
            this.health-= atk
            this.addLog("monster", "attack", atk)
        },
        specialAttack() {
            const atk = Math.floor(Math.random()*( 20 - 15) + 15)
            this.monsterHealth-= atk
            this.addLog("player", "special attack", atk)
            this.monsterAttack()
            this.round++
        },
        heal() {
            const heal = Math.floor(Math.random()*(21- 16) + 16)
            this.health+= heal
            if (this.health > 100) { health = 100}
            this.addLog("player", "heal", heal)
            this.monsterAttack()
            this.round++
        },
        surrender() {
            this.health = 0
        },
        addLog(who, what, value) {
            this.actions.push( { 
                actionBy: who,
                actionType: what,
                actionValue: value
            })
        }
    }
})

app.mount('#game')