export const state = () => ({
  teams: [],
});

export const mutations = {
  setTeams(state, payload) {
    state.teams = payload;
  },
};

export const actions = {
  async getTeams({ commit }) {
    const response = await fetch("dummy-data/about/team.json");
    const data = await response.json();
    commit("setTeams", data);
  },
};
