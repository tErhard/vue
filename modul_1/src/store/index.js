import { createStore } from "vuex";

export default createStore({
  state: {
    Schedules: [
      {
        id: 1,
        lecture1: "English",
        lecture2: "Web Programming",
        lecture3: "Programming",
        lecture4: "PHP",
        section: "Sport section",
      },
      {
        id: 2,
        lecture1: "C#",
        lecture2: "Programming",
        lecture3: "History",
        lecture4: "Math",
        section: "Sport section",
      },
      {
        id: 3,
        lecture1: "Geometry",
        lecture2: "Python",
        lecture3: "Web Programming",
        lecture4: "PHP",
        section: "Sport section",
      },
    ],
  },
  getters: {
    getSchedule: (state) => state.schedules,
  },
  mutations: {
    delete(state, { id }) {
      this.state.schedules = state.schedules.filter((item) => item.id !== id);
    },
    add(state, item) {
      state.schedules.push({
        ...item,
        id: Date.now(),
      });
    },
  },
  actions: {
    deleteSchedule({ commit }, item) {
      commit("delete", item);
    },
    addSchedule({ commit }, item) {
      commit("add", item);
    },
  },
});