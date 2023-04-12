import { createStore } from "vuex";
import auth from "./modules/auth";
import transaction from "./modules/transaction";
import users from "./modules/users";
import persistedStateVuex from "persisted-state-vuex";

persistedStateVuex.config({
  paths: [auth],
});

export default createStore({
  modules: {
    auth,
    transaction,
    users,
  },
  plugins: [persistedStateVuex.init],
});
