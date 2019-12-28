import Vue from 'vue'
import Vuex from 'vuex'
import home from './home/idnex'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
  }
})
