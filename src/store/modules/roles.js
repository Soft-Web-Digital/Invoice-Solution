import { API, apiConfig, ROUTES } from "../../utils/api.url";
import router from "../../router/index";

export default {
  namespaced: true,
  state: {
    roles: [],
    role: [],
    permissions: [],
    message: "",
    error: "",
    total: null,
  },
  mutations: {
    SET_ROLES(state, data) {
      state.roles = data;
    },
    SET_ROLE(state, data) {
      state.role = data;
    },
    REMOVE_ROLE(state, id) {
      let roleIndex = state.roles.data.findIndex((role) => role.id === id);
      state.roles.data.splice(roleIndex, 1);
    },
    SET_PERMISSIONS(state, data) {
      state.permissions = data;
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
    async getRoles({ commit }, { page, per_page, query }) {
      commit("SET_ROLES", []);
      let result = await API.get(
        `${
          ROUTES().roles
        }?current_page=${page}&per_page=${per_page}&query=${query}`,
        apiConfig()
      )
        .then((res) => {
          commit("SET_ROLES", res.data);
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
    async getPermissions({ commit }) {
      let result = await API.get(ROUTES().permissions, apiConfig())
        .then((res) => {
          commit("SET_PERMISSIONS", res.data.data);
        })
        .catch((err) => {
          if (err.response) {
            commit("SET_ERROR", err.response.data.error);
          }
        });
      return result;
    },
    async showRole({ commit }, id) {
      let result = await API.get(ROUTES(id).showrole, apiConfig())
        .then((res) => {
          commit("SET_ROLE", res.data.data);
        })
        .catch((err) => {
          if (err.response) {
            commit("SET_ERROR", err.response.data.error);
          }
        });
      return result;
    },
    async createRole({ commit }, payload) {
      let result = API.post(ROUTES().roles, payload, apiConfig())
        .then((res) => {
          commit("SET_MESSAGE", res.data.message);
          setTimeout(() => {
            router.push("/roles-and-permissions");
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
    async editRole({ commit }, { id, payload }) {
      let result = API.put(ROUTES(id).showrole, payload, apiConfig())
        .then((res) => {
          commit("SET_MESSAGE", res.data.message);
          setTimeout(() => {
            router.push("/roles-and-permissions");
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
    async deleteRole({ commit }, id) {
      commit("REMOVE_ROLE", id);
      let result = API.delete(ROUTES(id).showrole, apiConfig())
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
    roles(state) {
      return state.roles;
    },
    role(state) {
      return state.role;
    },
    permissions(state) {
      return state.permissions;
    },
    total(state) {
      return state.total;
    },
  },
};
