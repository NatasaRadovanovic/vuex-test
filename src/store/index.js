import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)//kazemo vue da ga koristi 

export const store = new Vuex.Store({
    state:{ //kada promenimo state rekreiramo sve,tree state
        //devtool nam je super jer mozemo vracati state, i na taj nacin raditi debagovanje
        count: 1
    },
    mutations:{ //sastoje se iz funkcija (pure function -ne modifikuje parametre)
        increment(state){
            return state.count++
        } //svaka fja u mutaciji ima parametar state
    },
    getters:{ //modifikacije konkretno nad state npr filter kod filmova bi isao u geter
        // oni su kao computed propovi u nasoj komponenti
        getCountAsPercentage(state){
            return state.count + '%'
        }
    },

    //asinhrono modifikovati state NE SME SE RADITI U MUTACIJAMA, mutacija mora uvek biti sinhrona
    //a asinhrono u akcijama ,akcije su ASINHRONE

    actions:{
        incrementAfter100ms(context){ //akcija dobija uvek contex store/samu instancu store
            //svaka akcija koja je asinh onda moze pozvati mutaciju
            setTimeout(()=>{
                context.commit('increment') //pozvali mutaciju sa commit kao u komponenti
                //bolje da generalno zovemo akcije a ne mutacije npr servis za dovlacenje filmova
                //akcije stavljamo kod
            }, 1000)
        },
        incrementAfterProvidedTime(context,millisecond){ //ako hocemo vise parametra stavimo u objekat
            setTimeout(() => {
                context.commit('increment')
            }, millisecond)
        }
    }
}) //store je ugradjeno, to je klasa
//vuex he objekat koji predstavlja plugin i ima store 
//najvazniji deo stora je state
//state je objekat,kada ga instanciramo on postane reaktivan