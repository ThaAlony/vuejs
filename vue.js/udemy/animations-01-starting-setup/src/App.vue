<template>
  
    <RouterView v-slot="slotProps">
      <Transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </Transition>
    </RouterView>
  
  <!-- 
<div class="container">
    <ListData></ListData>
  </div>
  <div class="container">
    <div class="block" :class="{animate: isAnimated}"></div>
    <button @click="animate">Animate</button>
  </div>
  <div class="container">
    <Transition name="buttons" mode="out-in">
      <button @click="btnUno" v-if="!buttonz">Hi HI Hi</button>
      <button @click="btnDue" v-else-if="buttonz">Ho hoo HO</button>
    </Transition>
    
  </div>
  <div class="container">
    <Transition name="para"> --> 
        <!-- per dirgli id usare le classi con para all'inizio--> 
        <!-- 
      <p v-if="paraVisible">yo</p>
    </Transition>
    <button @click="togglePara">ao</button>
  </div>

  <div class="container">
    -->
    <!-- che vuol dire :css=false? niente stiamo dicendo a Vue che sta roba l'abbiamo animata con js 
    quindi non ha senso cercare nel css le animazioni quindi va un po' più veloce-->
    <!-- 
    <Transition 
    :css="false" 
    @before-enter="beforeEnter"
     @enter="enter" 
     @after-enter="afterEnter" 
     @before-leave="beforeLeave"
     @leave="leave"
     @after-leave="afterLeave"
     @enter-cancelled="enterCancelled"
     @leave-cancelled="leaveCancelled"
     > 
      <p v-if="pVisible">bella</p>
    </Transition>
    <button @click="toggleP">giavascript</button>
  </div>
  
    <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>

  -->
</template>  

<script>
import ListData from './components/ListData.vue';

export default {
  data() {
    return { dialogIsVisible: false,
      isAnimated: false,
    paraVisible: false,
    buttonz: false,
    pVisible: false,
    enterInterval : null,
    leaveInterval : null
  };
  },
  components: {
    ListData
  },
  methods: {
    beforeEnter(el) {
      // sta roba viene eseguita prima dell'animazione
      // el = l'elemento che sta a fa sta animazione
      el.style.opacity = 0
    },
    enter(el, done) {
      // sta roba viene eseguita durante l'animazione 
      let i = 1
       this.enterInterval =setInterval(() => {
        el.style.opacity = i * 0.1
        i++
        if(i > 10) {
          clearInterval(this.enterInterval)  // clearInterval = bast fine
        done() // done = ANIMAZIONE FINITA VAI AVANTI LESGO
        }
      }, 20)
      
    },
    afterEnter() {
      // sta roba viene eseguita quando l'animazione finisce
    },
    beforeLeave() {
      // questo invece viene eseguita poco prima prima dell'animazione finale dopo verametne ASSURDO cioe i lifecycle hook delle animazioni praticamente 
     
    },
    leave(el, done) {
 // sta roba viene eseguita durate l'animazione
 let i = 1
       this.leaveInterval =setInterval(() => {
        el.style.opacity = 1-  i * 0.1
        i++
        if(i > 10) {
          clearInterval(this.leaveInterval)  
        done() 
        }
      }, 20)
    },
    afterLeave() {
 // sta roba viene eseguita quando l'animazione finisce
    },
    enterCancelled() {
 // sta roba viene eseguita  se l'animazione di entrata viene interrotta ( tipo premendo sul tasto due volte)
    },
    leaveCancelled() {
 // sta roba viene eseguita  se l'animazione di uscita viene interrotta ( tipo premendo sul tasto due volte)
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animate() {
      this.isAnimated = true
    },
    togglePara() {
      this.paraVisible = !this.paraVisible
    },
    toggleP() {
      this.pVisible = !this.pVisible
    },
    btnUno() {
      this.buttonz= true
    },
    btnDue() {
      this.buttonz= false
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /*transition: transform 0.3s ease-out;*/
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /*transform: translateX(-50px);*/
  animation: slide-fade 0.3s ease-out forwards;
}

.para-enter-from {
opacity: 0;
transform: translateY(-30px);
}

.para-enter-active {
transition: all 0.3s ease-out;
}

.para-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.para-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.para-leave-active {
transition: all 0.3s ease-in;
}

.para-leave-to {
  opacity: 0;
transform: translateY(-30px);
  
}

.modal-enter-active {
 animation: modal 0.3s ease-out;
}


.modal-leave-active {
  animation: modal 0.3s ease-in reverse;
}

.buttons-enter-from,
.buttons-leave-to{
  opacity: 0;
}

.buttons-enter-active{
  transition: opacity 0.3s ease-out ;
}

.buttons-leave-active{
  transition: opacity 0.3s ease-out ;
}

.buttons-enter-to,
.buttons-leave-from{
  opacity: 1;
}

.route-enter-from {

}

.route-enter-active {
  animation: modal 0.5s ease-out;
}

.route-leave-active {
  animation: modal 0.5s ease-in;
}

@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-200px) scale(1.1);
  }

  100% {
    transform: translateX(-225px) scale(1);
  }
}

@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale 0.9;
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>