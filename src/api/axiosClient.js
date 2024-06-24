import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://stuverse.in/api/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
