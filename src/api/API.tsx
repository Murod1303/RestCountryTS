import axios from "axios";

export const BASE_URL = "https://restcountries.com/v3.1/";

export const instanse = axios.create({
  baseURL: BASE_URL,
});
