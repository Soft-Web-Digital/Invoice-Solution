import { API, apiConfig, ROUTES } from "../../utils/api.url";
import router from "../../router/index";

export default {
  namespaced: true,
  state: {
    transactions: [],
    success: "",
    error: "",
    per_page: 50,
  },
  mutations: {
    SET_TRANSACTIONS(state, data) {
      state.transactions = data;
    },
    SET_MESSAGE(state, data) {
      state.message = data;
    },
    SET_ERROR(state, data) {
      state.error = data;
    },
  },
  actions: {
    async getTransactions({ state, commit }) {
      let result = await API.get(
        `${ROUTES().transactions}?per_page=${state.per_page}`,
        apiConfig()
      )
        .then((res) => {
          commit("SET_TRANSACTIONS", res.data.data);
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
    transactions(state) {
      return state.transactions;
    },
  },
};
