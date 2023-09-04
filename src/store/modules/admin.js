import { API, apiConfig, ROUTES } from "../../utils/api.url";
import router from "../../router/index";

export default {
  namespaced: true,
  state: {
    admins: [],
    admin: [],
    message: "",
    error: "",
    total: null,
  },
  mutations: {
    SET_ADMINS(state, data) {
      state.admins = data;
    },
    SET_ADMIN(state, data) {
      state.admin = data;
    },
    SET_TOTALPAGES(state, data) {
      state.total = data;
    },
    SET_MESSAGE(state, data) {
      state.message = data;
    },
    SET_ERROR(state, data) {
      state.error = data;
    },
  },
  actions: {
    async getAdmins({ commit }, { page, per_page, query }) {
      commit("SET_ADMINS", []);
      let result = await API.get(
        `${
          ROUTES().admins
        }?current_page=${page}&per_page=${per_page}&query=${query}`,
        apiConfig()
      )
        .then((res) => {
          commit("SET_ADMINS", res.data);
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
    async getAdmin({ commit }, id) {
      let result = await API.get(`${ROUTES().admins}/${id}`, apiConfig())
        .then((res) => {
          commit("SET_ADMIN", res.data.data);
        })
        .catch((err) => {
          if (err.response) {
            commit("SET_ERROR", err.response.data.error);
          }
        });
      return result;
    },
    async createAdmin({ commit }, payload) {
      let result = API.post(ROUTES().admins, payload, apiConfig())
        .then((res) => {
          commit("SET_MESSAGE", res.data.message);
          setTimeout(() => {
            router.push("/admin");
            commit("SET_MESSAGE", "");
          }, 2000);
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
    async editAdmin({ commit }, { id, payload }) {
      let result = await API.put(
        `${ROUTES().admins}/${id}`,
        payload,
        apiConfig()
      )
        .then((res) => {
          commit("SET_MESSAGE", res.data.message);
          setTimeout(() => {
            router.push("/admin");
            commit("SET_MESSAGE", "");
          }, 2000);
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
    async restrictAdmin({ commit }, id) {
      let result = API.put(`${ROUTES().admins}/${id}/restrict`, {}, apiConfig())
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
    async restoreAdmin({ commit }, id) {
      let result = API.put(
        `${ROUTES().admins}/${id}/reinstate`,
        {},
        apiConfig()
      )
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
    admins(state) {
      return state.admins;
    },
    admin(state) {
      return state.admin;
    },
    total(state) {
      return state.total;
    },
  },
};
