export const state = () => ({
  clients: [],
});

export const mutations = {
  setClients(state, payload) {
    state.clients = payload;
  },
};

export const actions = {
  async getClients({ commit }) {
    const response = await fetch("dummy-data/api-integration/client.json");
    const data = await response.json();
    commit("setClients", data);
  },
};
