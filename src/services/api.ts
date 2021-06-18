import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NODE_ENV !== "production"?'http://localhost:3333':"https://rocketseat-chapter-01-02-api.herokuapp.com/",
});