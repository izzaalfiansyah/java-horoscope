import axios, { AxiosInstance } from "axios";

const http: AxiosInstance = axios.create({
  baseURL: "http://localhost:8080",
});

export default http;
