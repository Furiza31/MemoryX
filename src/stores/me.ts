import { defineStore } from 'pinia';

export const useMeStore = defineStore('me', {
  state: () => ({
    id: 0,
    username: '',
    email: '',
    token: '',
    loggedIn: false,
  }),
  getters: {
    isLoggedIn(state) {
      return state.loggedIn;
    },
    getUsername(state) {
      return state.username || '';
    },
    getEmail(state) {
      return state.email || '';
    },
    getToken(state) {
      return state.token || '';
    }
  },
  actions: {
    login(id: number, username: string, email: string, token: string) {
      this.loggedIn = true;
      this.username = username;
      this.email = email;
      this.token = token;
      this.id = id;
    },
    logout() {
      this.loggedIn = false;
      this.username = '';
      this.email = '';
      this.token = '';
    },
  },
});
