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
    usersettings: null,
    usercustomers: [],
    usertransactions: [],
    usersubscriptions: [],
    userbanks: [],
    user: null,
    message: "",
    error: "",
    total: 0,
    expenses_total: null,
    transactions_total: null,
    url: null,
  },
  mutations: {
    SET_USERS(state, data) {
      state.users = data;
    },
    SET_USERINVOICES(state, data) {
      state.userinvoices = data;
    },
    SET_USERSETTINGS(state, data) {
      state.usersettings = data;
    },
    SET_USERSUBSCRIPTIONS(state, data) {
      state.usersubscriptions = data;
    },
    SET_USERBANKS(state, data) {
      state.userbanks = data;
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
    SET_USERCUSTOMERS(state, data) {
      state.usercustomers = data;
    },
    SET_EXPORTURL(state, data) {
      state.url = data;
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
    async getUserSettings({ commit }, id) {
      let result = await API.get(
        `${ROUTES().users}/${id}/settings`,
        apiConfig()
      )
        .then((res) => {
          commit("SET_USERSETTINGS", res.data.data);
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
    async getUserCustomers({ commit }, { id, page, per_page, query }) {
      commit("SET_USERCUSTOMERS", []);
      commit("SET_TOTALPAGES", null);
      let result = await API.get(
        `${
          ROUTES().users
        }/${id}/customers?current_page=${page}&per_page=${per_page}&query=${query}`,
        apiConfig()
      )
        .then((res) => {
          commit("SET_USERCUSTOMERS", res.data);
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
    async getUserSubscriptions({ commit }, { id, page, per_page, query }) {
      commit("SET_USERSUBSCRIPTIONS", []);
      let result = await API.get(
        `${
          ROUTES().users
        }/${id}/subscriptions?current_page=${page}&per_page=${per_page}&query=${query}`,
        apiConfig()
      )
        .then((res) => {
          commit("SET_USERSUBSCRIPTIONS", res.data);
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
    async getUserBanks({ commit }, { id, page, per_page, query }) {
      commit("SET_USERBANKS", []);
      let result = await API.get(
        `${
          ROUTES().users
        }/${id}/bank-accounts?current_page=${page}&per_page=${per_page}&query=${query}`,
        apiConfig()
      )
        .then((res) => {
          commit("SET_USERBANKS", res.data);
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
    async exportCustomers({ commit }, id) {
      let result = await API.post(
        `${ROUTES().users}/${id}/customers/export`,
        { format: "excel" },
        apiConfig()
      )
        .then((res) => {
          commit("SET_EXPORTURL", res.data.data.url);
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
    usercustomers(state) {
      return state.usercustomers;
    },
    usersettings(state) {
      return state.usersettings;
    },
    usersubscriptions(state) {
      return state.usersubscriptions;
    },
    userbanks(state) {
      return state.userbanks;
    },
    url(state) {
      return state.url;
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
