<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--<p>{{ count }}</p>-->
    <p>{{ countWithPercentage }}</p>
    
    <button @click="increment(1000)">Increment</button> <!-- sad ovde prosledimo
    1000 kada preko mapAction radimo increment jer on prima jos jedan parametar -->
  
  </div>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex' // { } raspakujemo objekat

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed:{ // prop u computedu nikad se nece okinuti ako nije u samom templatu naveden {{ }},ako hocemo 
  //da consol.logujemo nece moci
   /* count(){
      return this.$store.state.count //ovako pristupamo storu koji je u index.js
    },*/
   /* countWithPercentage(){
      return this.$store.getters.getCountAsPercentage
    },*/

    ...mapState([ 'count' ]), //drugi nacin umesto count() gore
    //map state vraca novi objekat a ... raspakuje npr computed jer je on sam objekat a posto map je
    //i sam objekat onda bi imali objekat u objektu pa ga sa ...  zapravo raspakujemo, i sve parametri
    //su dostupni sada na tom nivou..a map state nam inace daje u novom objektu zapakovano sve ono 
    //sto smo trazili iz state..u ovom slucaju count
    ...mapGetters({
      countWithPercentage:'getCountAsPercentage' //ovako smo preimenovali getter
    })
  },
  methods:{
    ...mapActions({ //drugi nacin za increment() dole, i gore kod @click prosledjujemo metod
      increment:'incrementAfterProvidedTime'
    })
    /*increment(){
      //MUTACIJE se pozivaju preko stora i metode commit,prvi parametar je id ili naziv mutacije
      //drugi parametar je perload
      //this.$store.commit('increment')
      //this.$store.dispatch('incrementAfter100ms') //akcije pozivamo sa dispatch metodome
      this.$store.dispatch('incrementAfterProvidedTime', 1000)

    }*/
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
