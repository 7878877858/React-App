let authToken = "";
let apiToken = "";


export const setAuthToken = (token) => {
  authToken = token;
  localStorage.setItem("login_token", token); // persist token
};
export const setApiToken = (token) => {
  apiToken = token;
  localStorage.setItem("apitoken", token); // persist token
};

export const getAuthToken = () => {
  if (!authToken) {
    authToken = localStorage.getItem("login_token") || "";
  }
  return authToken;
};
export const getApiToken = () => {
  if (!apiToken) {
    apiToken = localStorage.getItem("apitoken") || "";
  }
  return apiToken;
};