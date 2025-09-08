import API from "../../utils/Api";
import { getDeviceId } from "../../utils/getDeviceId";
import { getAuthToken } from "../../utils/authToken";

export const postRequest = async (url, data) => {
  try {
    const deviceId = getDeviceId();
    const appVersion = "116";    // hardcoded or dynamic
    const language = "en";       // hardcoded or dynamic
    const response = await API.post(url, data, {
      headers: {
        login_token: "",
        device_id: deviceId,
        app_version: appVersion,
        Accept: "application/json",
        Language: language,
      },
    });

    return response.data;
  } catch (error) {
    console.error(`POST ${url} error:`, error);
    throw error;
  }
};
export const postRequest2 = async (url, data) => {
  try {
    const deviceId = getDeviceId();
    const appVersion = "116";    // hardcoded or dynamic
    const language = "en";       // hardcoded or dynamic
    const token = getAuthToken();
    console.log(token)
    const response = await API.post(url, data, {
      headers: {
        login_token: token,
        device_id: deviceId,
        app_version: appVersion,
        Accept: "application/json",
        Language: language,
      },
    });

    return response.data;
  } catch (error) {
    console.error(`POST ${url} error:`, error);
    throw error;
  }
};
