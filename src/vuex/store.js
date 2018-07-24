import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  count: 1,
  content: 'hello vuex store',
  user: 'info'
};

const mutations = {
  add (state, n) {
    state.count += n;
  },
  reduce (state) {
    state.count -= 1;
  }
};

export default new Vuex.Store({
  state, mutations
})
