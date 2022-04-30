import { Main } from "../types/main";
import { v4 as uuid } from "uuid";

export const githubRepos: Main[] = [
  {
    id: uuid(),
    title: "Learning Zone JavaScript Interview Questions",
    url: "https://github.com/learning-zone/javascript-interview-questions",
  },
];
