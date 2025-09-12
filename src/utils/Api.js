import axios from "axios";

export const API = axios.create({
  baseURL: "https://tradgo.in/appapi4/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const API2 = axios.create({
  baseURL: "https://tradgo.in/Shopping/",
  headers: {
    "Content-Type": "application/json",
  },
});

