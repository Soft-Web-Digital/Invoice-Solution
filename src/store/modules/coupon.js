import { API, apiConfig, ROUTES } from "../../utils/api.url";
import router from "../../router/index";

export default {
  namespaced: true,
  state: {
    coupons: [],
    coupon: [],
    role: [],
    message: "",
    error: "",
    total: null,
  },
  mutations: {
    SET_COUPONS(state, data) {
      state.coupons = data;
    },
    SET_COUPON(state, data) {
      state.coupon = data;
    },
    REMOVE_COUPON(state, id) {
      let couponIndex = state.coupons.data.findIndex(
        (coupon) => coupon.id === id
      );
      state.coupons.data.splice(couponIndex, 1);
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
    async getCoupons({ commit }, { page, per_page, query }) {
      let result = await API.get(
        `${
          ROUTES().coupons
        }?current_page=${page}&per_page=${per_page}&query=${query}`,
        apiConfig()
      )
        .then((res) => {
          commit("SET_COUPONS", res.data);
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
    async createCoupon({ commit }, payload) {
      let result = API.post(ROUTES().coupons, payload, apiConfig())
        .then((res) => {
          commit("SET_MESSAGE", res.data.message);
          setTimeout(() => {
            router.push("/coupons");
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
    async editCoupon({ commit }, { id, payload }) {
      let result = API.put(`${ROUTES().coupons}/${id}`, payload, apiConfig())
        .then((res) => {
          commit("SET_MESSAGE", res.data.message);
          setTimeout(() => {
            router.push("/coupons");
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
    async deleteCoupon({ commit }, id) {
      commit("REMOVE_COUPON", id);
      let result = API.delete(`${ROUTES().coupons}/${id}`, apiConfig())
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
    coupons(state) {
      return state.coupons;
    },
    coupon(state) {
      return state.coupon;
    },
    total(state) {
      return state.total;
    },
  },
};
