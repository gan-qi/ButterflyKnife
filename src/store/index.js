import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    active: {
      home: true,
      task: false,
      department: false,
      taskassignment: false,
      feedback: false
    },
    login: false
  },
  mutations: {
    changeActive(state, activeName = "nothing") {
      state.active = {
        home: false,
        task: false,
        department: false,
        taskassignment: false,
        feedback: false
      };
      if (activeName != "nothing") state.active[activeName] = true;
    },
    changeLoginStatus(state, status = true) {
      state.login = status;
    }
  },
  actions: {},
  modules: {}
});
