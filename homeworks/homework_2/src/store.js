import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accessToken: null
  },
  mutations: {
    authUser(state, accessToken) {
      state.accessToken = accessToken;
    },
    clearAuthData (state) {
      state.accessToken = null;
    }
  },
  actions: {
    login({commit, dispatch}, accessToken) {
      commit('authUser', accessToken);

      localStorage.setItem('accessToken', accessToken);

      router.replace('/')
    },
    autoLogin({commit}) {
      const accessToken = localStorage.getItem('accessToken');

      if (!accessToken) {
        return;
      }

      commit('authUser', accessToken);
    },
    logout ({commit}) {
      commit('clearAuthData');

      localStorage.removeItem('accessToken');

      router.replace('/')
    },
  },
  getters: {
    isAuthenticated (state) {
      return state.accessToken !== null
    }
  }
})
