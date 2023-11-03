import axios from "axios";

export const githubUserApi = axios.create({
  baseURL: "https://api.github.com/users/",
});

export const githubIssuesApi = axios.create({
  baseURL: "https://api.github.com/repos",
});

export const githubSearchApi = axios.create({
  baseURL: "https://api.github.com/search/issues",
});
