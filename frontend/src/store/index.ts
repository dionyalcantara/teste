import { createStore } from 'vuex';
import axios from 'axios';
import router from '../router';

interface State {
  token: string;
  user: object | null;
}

export default createStore({
  state: {
    token: localStorage.getItem('jwt') || '',
    user: null,
  } as State,
  mutations: {
    setToken(state: State, token: string) {
      state.token = token;
      localStorage.setItem('jwtToken', token);
    },
    setUser(state: State, user: object) {
      state.user = user;
    },
    logout(state: State) {
      state.token = '';
      state.user = null;
      localStorage.removeItem('jwtToken');
    },
  },
  actions: {
    async login({ commit }, { email, password }) {
      const response = await axios.post('http://localhost:3000/api/login', { email, password });
      commit('setToken', response.data.token);
    },
    async fetchProfile({ commit }) {
      try {
        const response = await axios.get('http://localhost:3000/api/profile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
          },
        });
        commit('setUser', response.data);
      } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response && error.response.status === 401) {
          commit('logout');
          router.push({ name: 'login' });
        } else {
          console.error('Falha ao carregar o perfil', error);
        }
      }
    },
  },
  getters: {
    isAuthenticated: (state: State) => !!state.token,
    user: (state: State) => state.user,
  },
});
