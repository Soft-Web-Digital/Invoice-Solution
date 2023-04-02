import { API, apiConfig, ROUTES } from "../../utils/api.url";
import router from "../../router/index";

export default {
  namespaced: true,
  state: {
    user: [],
    success: "",
    error: "",
  },
  mutations: {
    SET_DATA(state, data) {
      state.user = data;
    },
    SET_MESSAGE(state, data) {
      state.message = data;
    },
    SET_ERROR(state, data) {
      state.error = data;
    },
  },
  actions: {
    async login({ commit }, payload) {
      let result = API.post(ROUTES().login, payload)
        .then((res) => {
          $cookies.set("user", res.data.data.token);
          router.push("/");
          console.log($cookies.get("user"));
        })
        .catch((err) => {
          if (err.response) {
            commit("SET_ERROR", err.response.data.error);
          }
        });
      return result;
    },
    async sendPasswordReset({ commit }, payload) {
      let result = API.post(ROUTES().resetlink, payload)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          if (err.response) {
            commit("SET_ERROR", err.response.data.error);
            console.log(err.response);
          }
        });
      return result;
    },
    async getUser({ commit }) {
      API.get(ROUTES().authuser, apiConfig())
        .then((res) => {
          commit("SET_DATA", res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
};
