import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: []

  },
  mutations: {
    lists(state, list) {
      state.list = list;

    }
  },
  getters: {
  },
  actions: {
  },
  modules: {
  }
})
