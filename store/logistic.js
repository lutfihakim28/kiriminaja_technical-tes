export const state = () => ({
  logistics: [],
});

export const mutations = {
  setLogistics(state, payload) {
    state.logistics = payload;
  },
};

export const actions = {
  async getLogistics({ commit }) {
    const response = await fetch("dummy-data/home/logistic.json");
    const data = await response.json();
    commit("setLogistics", data);
  },
};
