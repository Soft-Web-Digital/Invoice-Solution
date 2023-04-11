import { createStore } from "vuex";
import auth from "./modules/auth";
import transaction from "./modules/transaction";
import persistedStateVuex from "persisted-state-vuex";

persistedStateVuex.config({
  paths: [auth],
});

export default createStore({
  modules: {
    auth,
    transaction,
  },
  plugins: [persistedStateVuex.init],
});
