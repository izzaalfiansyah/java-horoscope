import axios, { AxiosInstance } from "axios";

const http: AxiosInstance = axios.create({
  // baseURL: "http://localhost:8080",
  baseURL: "https://java-horoscope-api.vercel.app",
});

export default http;
