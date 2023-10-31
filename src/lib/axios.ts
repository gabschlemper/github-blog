import axios from "axios";

export const githubUserApi = axios.create({
  baseURL: "https://api.github.com/users/",
});
