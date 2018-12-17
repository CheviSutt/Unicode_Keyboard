import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

// export const store = new Vuex.Store({
export default new Vuex.Store({
  state: {
    keys: [],
    language: 'latin',
  },

  mutations: {
    updateKeys(state, keys) {
      const { results } = keys;// get results into a variable somehow
      const rows = [];
      for (let i = 0; i < results.length + 16; i += 16) {
        const row = [];
        for (let j = i; j < i + 16; j += 1) {
          const td = results[j];
          if (!td) {
            break;
          }
          td && row.push(td);
        }
        rows.push(row);
      }
      // console.log(rows);
      state.keys = rows;
    },
    updateLanguage(state, language) {
      state.language = language;
    },
  },
  getters: {
    keys(state) {
      return state.keys;// I'll want to remove results
    },
  },
  actions: {
    getUnicode({ commit, state }) {
      // axios.get('http://localhost:3333/lookup?q=latin&o=0')
      axios.get('http://localhost:3333/lookup?q=' + state.language + '')
        .then(result => commit('updateKeys', result.data))
        .catch(console.error);
    },
    setLanguage({ dispatch, commit, state }, selectedLanguage) {
      commit('updateLanguage', selectedLanguage);
      dispatch('getUnicode');
    },
  },

});
