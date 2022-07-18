const TOKEN_KEY = 'token';
const SERVEMENU_KEY = 'servemenu';

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

const setServeMenu = (data: any) => {
  localStorage.setItem(SERVEMENU_KEY, data);
};

const clearServeMenu = () => {
  localStorage.removeItem(SERVEMENU_KEY);
};

export {
  isLogin,
  getToken,
  setToken,
  clearToken,
  setServeMenu,
  clearServeMenu,
};
