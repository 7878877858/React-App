import { postRequest, postRequest2 } from "./request";
import Endpoints from "./endpoints";

export const loginUser = (data) => postRequest(Endpoints.GET_LOGIN_CHECK_USER, data);
export const getLoginPassword = (data) => postRequest2(Endpoints.GET_LOGIN_PASSWORD, data);