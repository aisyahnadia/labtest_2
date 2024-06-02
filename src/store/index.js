import { createStore } from 'vuex';
import axios from 'axios'

export default createStore({
  state: {
    profile: {
      name: 'Aisyah Nadia',
      courseYear: '3rd Year',
      matrixNo: '12345678',
      address: '123 Main St, City, Country',
      searchQuery: '', 
    },
    photos: [], 
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    SET_SEARCH_QUERY(state, query) {
      state.searchQuery = query;
    },
    SET_PHOTOS(state, photos) { 
      state.photos = photos;
    }
  },
  actions: {
    updateProfile({ commit }, profile) {
      commit('setProfile', profile);
    },
    fetchPhotos({ commit }) { 
      axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
        .then(response => commit('SET_PHOTOS', response.data));
    }
  },
  getters: {
    profile: (state) => state.profile,
    filteredPhotos(state) { 
      return state.photos.filter(photo => 
        photo.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    }
  }
});
