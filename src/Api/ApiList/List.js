import { postRequest, postRequest2,postRequest3, postRequest4 } from "./request";
import Endpoints from "./endpoints";

export const loginUser = (data) => postRequest(Endpoints.GET_LOGIN_CHECK_USER, data);
export const getLoginPassword = (data) => postRequest2(Endpoints.GET_LOGIN_PASSWORD, data);
export const getLoginOtp = (data)=> postRequest2(Endpoints.GET_LOGIN_OTP,data);
export const get_all_product = (data)=> postRequest3(Endpoints.GET_ALL_SHOPPING_PRODUCT,data);
export const Get_brands_list = (data)=> postRequest3(Endpoints.GET_BRANDS_LIST,data);
export const Get_brand_gift_card = (data)=> postRequest4(Endpoints.GET_BRAND_GIFT_CARD,data);

                