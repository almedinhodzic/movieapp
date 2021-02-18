import axios from "axios";

export const movieDB = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const apiKey = process.env.REACT_APP_KEY;
