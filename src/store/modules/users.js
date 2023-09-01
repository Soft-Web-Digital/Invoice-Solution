import { API, apiConfig, ROUTES } from "../../utils/api.url";
import router from "../../router/index";

export default {
  namespaced: true,
  state: {
    users: [],
    userinvoices: [],
    userestimates: [],
    userexpenses: [],
    usertransactions: [],
    user: null,
    message: "",
    error: "",
    total: 0,
    expenses_total: null,
    transactions_total: null,
  },
  mutations: {
    SET_USERS(state, data) {
      state.users = data;
    },
    SET_USERINVOICES(state, data) {
      state.userinvoices = data;
    },
    SET_USERESTIMATES(state, data) {
      state.userestimates = data;
    },
    SET_USEREXPENSES(state, data) {
      state.userexpenses = data;
    },
    SET_USERTRANSACTIONS(state, data) {
      state.usertransactions = data;
    },
    SET_USER(state, data) {
      state.user = data;
    },
    SET_TOTALPAGES(state, data) {
      state.total = data;
    },
    SET_EXPENSESPAGES(state, data) {
      state.expenses_total = data;
    },
    SET_TRANSACTIONSPAGES(state, data) {
      state.transactions_total = data;
    },
    SET_MESSAGE(state, data) {
      state.message = data;
    },
    SET_ERROR(state, data) {
      state.error = data;
    },
  },
  actions: {
    async getUsers({ commit }, { page, per_page, query }) {
      let result = await API.get(
        `${
          ROUTES().users
        }?current_page=${page}&per_page=${per_page}&query=${query}`,
        apiConfig()
      )
        .then((res) => {
          commit("SET_USERS", res.data);
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
    async getUserInvoices({ commit }, { id, page, per_page, query }) {
      let result = await API.get(
        `${
          ROUTES().users
        }/${id}/invoices?current_page=${page}&per_page=${per_page}&query=${query}`,
        apiConfig()
      )
        .then((res) => {
          commit("SET_USERINVOICES", res.data);
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
    async getUserEstimates({ commit }, { id, page, per_page, query }) {
      let result = await API.get(
        `${
          ROUTES().users
        }/${id}/estimates?current_page=${page}&per_page=${per_page}&query=${query}`,
        apiConfig()
      )
        .then((res) => {
          commit("SET_USERESTIMATES", res.data);
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
    async getUserExpenses({ commit }, { id, page, per_page, query }) {
      let result = await API.get(
        `${
          ROUTES().users
        }/${id}/expenses?current_page=${page}&per_page=${per_page}&query=${query}`,
        apiConfig()
      )
        .then((res) => {
          commit("SET_USEREXPENSES", res.data);
          commit(
            "SET_EXPENSESPAGES",
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
    async getUserTransactions({ commit }, { id, page, per_page, query }) {
      let result = await API.get(
        `${
          ROUTES().users
        }/${id}/transactions?current_page=${page}&per_page=${per_page}&query=${query}`,
        apiConfig()
      )
        .then((res) => {
          commit("SET_USERTRANSACTIONS", res.data);
          commit(
            "SET_TRANSACTIONSPAGES",
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
    async getUser({ commit }, id) {
      let result = await API.get(`${ROUTES().users}/${id}`, apiConfig())
        .then((res) => {
          commit("SET_USER", res.data.data);
        })
        .catch((err) => {
          if (err.response) {
            commit("SET_ERROR", err.response.data.error);
          }
        });
      return result;
    },
    async restrictUser({ commit }, id) {
      let result = API.put(`${ROUTES().users}/${id}/restrict`, {}, apiConfig())
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
    async restoreUser({ commit }, id) {
      let result = API.put(`${ROUTES().users}/${id}/reinstate`, {}, apiConfig())
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
    users(state) {
      return state.users;
    },
    user(state) {
      return state.user;
    },
    userinvoices(state) {
      return state.userinvoices;
    },
    userestimates(state) {
      return state.userestimates;
    },
    userexpenses(state) {
      return state.userexpenses;
    },
    usertransactions(state) {
      return state.usertransactions;
    },
    total(state) {
      return state.total;
    },
    expenses_total(state) {
      return state.expenses_total;
    },
    transactions_total(state) {
      return state.transactions_total;
    },
  },
};
