import { API, apiConfig, ROUTES } from "../../utils/api.url";

export default {
  namespaced: true,
  state: {
    transactions: [],
    message: "",
    error: "",
    total: null,
  },
  mutations: {
    SET_TRANSACTIONS(state, data) {
      state.transactions = data;
    },
    SET_TOTALPAGES(state, data) {
      state.total = data;
    },
    CHANGE_TRANSACTION_STATUS(state, id) {
      const transactionIndex = state.transactions.findIndex(
        (transaction) => transaction.id === id
      );
      state.transactions[transactionIndex].status =
        result.data.data.product.verified_at;
    },
    SET_MESSAGE(state, data) {
      state.message = data;
    },
    SET_ERROR(state, data) {
      state.error = data;
    },
  },
  actions: {
    async getTransactions({ commit }, { page, per_page, type, query }) {
      commit("SET_TRANSACTIONS", []);
      let result = await API.get(
        `${
          ROUTES().transactions
        }?current_page=${page}&per_page=${per_page}&type=${type}&query=${query}`,
        apiConfig()
      )
        .then((res) => {
          commit("SET_TRANSACTIONS", res.data);
          commit(
            "SET_TOTALPAGES",
            Math.ceil(res.data.meta.total / res.data.meta.perPage)
          );
        })
        .catch((err) => {
          if (err.response) {
            commit("SET_ERROR", err.response.data.error);
          }
        });
      return result;
    },
    async approveTransaction({ commit }, id) {
      let result = API.post(ROUTES(id).approveTransaction, {}, apiConfig())
        .then((res) => {
          commit("SET_MESSAGE", res.data.message);
          setTimeout(() => {
            commit("SET_MESSAGE", "");
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
    async declineTransaction({ commit }, id) {
      let result = API.post(ROUTES(id).declineTransaction, {}, apiConfig())
        .then((res) => {
          commit("SET_MESSAGE", res.data.message);
          setTimeout(() => {
            commit("SET_MESSAGE", "");
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
  },
  getters: {
    transactions(state) {
      return state.transactions;
    },
    total(state) {
      return state.total;
    },
  },
};
