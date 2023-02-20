import axios from "axios";
import {API, apiConfig, ROUTES} from '../../utils/api.url';
import router from "../../router/index";

export default {
  namespaced: true,
  state: {
    user: [],
    count: 0,
  },
  getters: {
    data: (state) => state.data,
  },
  actions: {
    async getData({ commit }, payload) {
      API.post(ROUTES().login,payload)
        .then((res) => {
          $cookies.set("user", res.data.data.token, 60 * 60 * 12);
          commit("SET_DATA", res.data);
          router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    increaseCount({ commit }) {
      commit("INCREASE_COUNT", 20);
    },
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data;
    },
    INCREASE_COUNT(state, data) {
      state.count = data;
    },
  },
};
