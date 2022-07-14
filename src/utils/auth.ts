const TOKEN_KEY = 'token';
const APP_KEY = 'app';

const isLogin = () => {
  return !!localStorage.getItem(TOKEN_KEY);
};

const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

const clearToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

const clearApp = () => {
  localStorage.removeItem(APP_KEY);
};

export { isLogin, getToken, setToken, clearToken, clearApp };
