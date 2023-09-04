import { API, apiConfig, ROUTES } from "../../utils/api.url";
import router from "../../router/index";

export default {
  namespaced: true,
  state: {
    notifications: [],
    coupon: [],
    role: [],
    message: "",
    error: "",
    total: null,
  },
  mutations: {
    SET_NOTIFICATIONS(state, data) {
      state.notifications = data;
    },
    SET_COUPON(state, data) {
      state.coupon = data;
    },
    REMOVE_NOTIFICATIONS(state, id) {
      let notificationIndex = state.notifications.data.findIndex(
        (notification) => notification.id === id
      );
      state.notifications.data.splice(notificationIndex, 1);
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
    async getNotifications({ commit }, { page, per_page, query }) {
      commit("SET_NOTIFICATIONS", []);
      let result = await API.get(
        `${
          ROUTES().notifications
        }?current_page=${page}&per_page=${per_page}&query=${query}`,
        apiConfig()
      )
        .then((res) => {
          commit("SET_NOTIFICATIONS", res.data);
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
    async getCoupon({ commit }, id) {
      let result = await API.get(`${ROUTES().coupons}/${id}`, apiConfig())
        .then((res) => {
          commit("SET_COUPON", res.data.data);
        })
        .catch((err) => {
          if (err.response) {
            commit("SET_ERROR", err.response.data.error);
          }
        });
      return result;
    },
    async createNotification({ commit }, payload) {
      let result = API.post(ROUTES().notifications, payload, apiConfig())
        .then((res) => {
          commit("SET_MESSAGE", res.data.message);
          setTimeout(() => {
            router.push("/notification");
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
    async resendNotification({ commit }, id) {
      let result = API.post(`${ROUTES().notifications}/${id}`, {}, apiConfig())
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
    async deleteNotification({ commit }, id) {
      commit("REMOVE_NOTIFICATIONS", id);
      let result = API.delete(`${ROUTES().notifications}/${id}`, apiConfig())
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
    notifications(state) {
      return state.notifications;
    },
    total(state) {
      return state.total;
    },
  },
};
