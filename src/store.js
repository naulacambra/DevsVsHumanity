import Vue from 'vue'
import Vuex from 'vuex'
import blackCards from 'database/black.json';
import whiteCards from 'database/white.json';

Vue.use(Vuex)

// the root, initial state object
const initialState = {
  blackCards,
  whiteCards,
  players: [],
}

// define the possible mutations that can be applied to our state
const mutations = {

}

const getters = {
    getRandomBlackCard: state => {
      return state.blackCards[Math.floor(Math.random()*state.blackCards.length)]
    }
}

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default new Vuex.Store({
  state: initialState,
  mutations,
  getters
})