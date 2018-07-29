import Vue from 'vue';
import Vuex from 'vuex'
import Cookies from 'js-cookie';

// Vue.use(Vuex);

if (process.env.NODE_ENV === 'development') {
  Vue.use(Vuex)
}

const state = {
  count: 1,
  content: 'hello vuex store',
  user: 'info',
  authorizeKey: ''
};

const mutations = {
  add (state, n) {
    state.count += n;
  },
  reduce (state) {
    state.count -= 1;
  }
};

const getters = {
  getAuthorizeKey (state) {
    if (state.authorizeKey) {
      return state.authorizeKey;
    }
    return Cookies.get('authorizeKey');
  }
};

export default new Vuex.Store({
  state, mutations, getters
})
