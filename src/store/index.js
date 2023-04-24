import { createStore } from "vuex";
import auth from "./modules/auth";
import transaction from "./modules/transaction";
import subscription from "./modules/subscription";
import users from "./modules/users";
import admin from "./modules/admin";
import roles from "./modules/roles";
import coupon from "./modules/coupon";
import persistedStateVuex from "persisted-state-vuex";

persistedStateVuex.config({
  paths: [auth],
});

export default createStore({
  modules: {
    auth,
    transaction,
    admin,
    users,
    subscription,
    roles,
    coupon,
  },
  plugins: [persistedStateVuex.init],
});
