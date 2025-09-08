// utils/deviceId.js
export const getDeviceId = () => {
  let deviceId = localStorage.getItem("device_id");

  if (!deviceId) {
    deviceId = crypto.randomUUID(); // generate new unique ID
    localStorage.setItem("device_id", deviceId);
  }

  return deviceId;
};
