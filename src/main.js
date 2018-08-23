import Vue from 'vue'
import App from './App.vue'
import { store } from './store' //ne mora index.js jer kad je index on zna da
// trazi index js a inace ne moramo ni eksetnziju da pisemo

Vue.config.productionTip = false

new Vue({
  store,//nakacili smo store da bude tu prilikom instance naseg roota aplikacije
  //odavde se citava aplikacija instancira, ovo je ulazni deo aplikacije
  render: h => h(App)
}).$mount('#app')
