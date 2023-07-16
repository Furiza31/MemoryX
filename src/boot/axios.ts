import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';
import Authentification from 'src/services/authentification';
import localStorage from 'src/services/localStorage';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}
// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: 'http://localhost:3000' });

// for each request recieved, check if the error is not a 401
// if it is, use Authentification.getInstance().logout()
// to logout the user and redirect to the login page
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      Authentification.getInstance().logout();
    }
    return Promise.reject(error);
  }
);

api.defaults.headers['authorization'] = (localStorage.get('me') as {token: string})?.token || '';

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$api
  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { api };
