import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

// export const store = new Vuex.Store({
export default new Vuex.Store({
  state: {
    keys: [],
  },

  mutations: {
    updateKeys(state, keys) {
      state.keys = keys;
    },
  },

  getters: {
    keys(state) {
      return state.keys.results;// I'll want to remove results
    },
  },

  actions: {
    getUnicode({ commit }) {
      axios.get('http://localhost:3333/lookup?q=latin&o=0')
        .then(result => commit('updateKeys', result.data))
        .catch(console.error);
    },

    keyTable() {
      const { results } = this.state.keys;// get results into a variable somehow
      const rows = [];
      for (let i = 0; i < results.length + 10; i += 10) {
        const row = [];
        for (let j = i; j < 10; j++) {
          const td = results[j];
          if (!td) { break; }
          td && row.push(td);
        }
        rows.push(row);
      }
    },

  },

});
