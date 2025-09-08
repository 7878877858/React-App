let authToken = "";

export const setAuthToken = (token) => {
  authToken = token;
  localStorage.setItem("login_token", token); // persist token
};

export const getAuthToken = () => {
  if (!authToken) {
    authToken = localStorage.getItem("login_token") || "";
  }
  return authToken;
};
