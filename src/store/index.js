import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		id:0
	},
	mutations:{
		getId(state,payload){
			state.id = payload
			//console.log(state.id)
		}
	}
})

export default store