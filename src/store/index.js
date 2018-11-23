import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		id: 0,
		parentId: 0,
		brand: 0
	},
	mutations:{
		getId(state,payload){
			state.id = payload
			//console.log(state.id)
		},
		changeId(state,payload) {
			state.parentId = payload[0];
			state.brand = payload[1];
		}
	}
})

export default store