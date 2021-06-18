import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NODE_ENV !== "production"?'http://localhost:3333':"https://epic-allen-0e21ba.netlify.app:3333",
});