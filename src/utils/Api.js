import axios from "axios";

const API = axios.create({
  baseURL: "https://tradgo.in/appapi4/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
