import { createStore } from "vuex";
import auth from "./modules/auth";
import persistedStateVuex from "persisted-state-vuex";

persistedStateVuex.config({
  paths: [auth],
});

export default createStore({
  modules: {
    auth,
  },
  plugins: [persistedStateVuex.init],
});
