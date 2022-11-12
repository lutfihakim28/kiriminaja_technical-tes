export const state = () => ({
  banners: [],
});

export const mutations = {
  setBanners(state, payload) {
    state.banners = payload;
  },
};

export const actions = {
  async getBanners({ commit }) {
    const response = await fetch("dummy-data/home/banner.json");
    const data = await response.json();
    commit("setBanners", data);
  },
};
