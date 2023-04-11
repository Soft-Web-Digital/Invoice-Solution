import { API, apiConfig, ROUTES } from "../../utils/api.url";
import router from "../../router/index";

export default {
  namespaced: true,
  state: {
    user: [],
    message: "",
    error: "",
  },
  mutations: {
    SET_DATA(state, data) {
      state.user = data;
    },
    SET_MESSAGE(state, data) {
      state.message = data;
      console.log("babz");
    },
    SET_ERROR(state, data) {
      state.error = data;
      console.log("error");
    },
  },
  actions: {
    async login({ commit }, payload) {
      let result = await API.post(ROUTES().login, payload)
        .then((res) => {
          $cookies.set("user", res.data.data.token);
          commit("SET_MESSAGE", res.data.message);
          router.push("/");
          setTimeout(() => {
            commit("SET_MESSAGE", "");
          }, 3000);
        })
        .catch((err) => {
          commit("SET_ERROR", err.response.data.error);
          setTimeout(() => {
            commit("SET_ERROR", "");
          }, 3000);
        });

      return result;
    },
    async sendPasswordReset({ commit }, payload) {
      let result = await API.post(ROUTES().resetlink, payload)
        .then((res) => {
          commit("SET_MESSAGE", res.data.message);
          setTimeout(() => {
            commit("SET_MESSAGE", "");
            router.push({ name: "reset-password" });
          }, 3000);
        })
        .catch((err) => {
          if (err.response) {
            commit("SET_ERROR", err.response.data.error);
            setTimeout(() => {
              commit("SET_ERROR", "");
            }, 3000);
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
