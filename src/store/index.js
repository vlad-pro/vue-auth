import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${userData.token}`;
    }
  },
  actions: {
    register({ commit }, credentials) {
      return axios
        .post("//localhost:5000/register", credentials)
        .then(({ data }) => {
          console.log(data);
          commit("SET_USER_DATA", data);
        });
    },
    login({ commit }, credentials) {
      return axios
        .post("//localhost:5000/login", credentials)
        .then(({ data }) => {
          console.log(data);
          commit("SET_USER_DATA", data);
        });
    }
  },
  modules: {},
  getters: {
    loggedIn(state) {
      return !!state.user;
    }
  }
});
