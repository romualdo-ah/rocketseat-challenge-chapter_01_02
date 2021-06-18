import axios from "axios";

export const api = axios.create({
  baseURL:
    process.env.NODE_ENV !== "production"
      ? "http://localhost:3333"
      : 'https://my-json-server.typicode.com/romualdo-ah/rocketseat-challenge-chapter_01_02/server.json',
});
