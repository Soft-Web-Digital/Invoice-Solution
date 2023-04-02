import { createStore } from "vuex";
import auth from "./modules/auth";
import transactions from "./modules/transactions";
import persistedStateVuex from "persisted-state-vuex";

persistedStateVuex.config({
  paths: [auth],
});

export default createStore({
  modules: {
    auth,
    transactions,
  },
  plugins: [persistedStateVuex.init],
});
