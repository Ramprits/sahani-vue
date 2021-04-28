import { createStore } from "vuex";
import authModules from "./modules/auth/index.js";

export default createStore({
  modules: {
    auth: authModules,
  },
  state: {},
  mutations: {},
  actions: {},
});
