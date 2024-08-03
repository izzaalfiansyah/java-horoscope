import axios, { AxiosInstance } from "axios";

const http: AxiosInstance = axios.create({
  baseURL: "https://java-horoscope-api.vercel.app",
});

export default http;
