import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    language: null,
  },

  mutations: {
    updateLanguage(state, language) {
      state.language = language;
    },
  },

  actions: {
    getUnicode({ commit }) {
      axios.get('http://localhost:3333/lookup?q=latin&o=0')
        .then(result => commit('updateLanguage', result.data))
        .catch(console.error);
    },
  },

});
